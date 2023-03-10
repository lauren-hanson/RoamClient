import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Login.css"

//Login function handles initializing user object, posting user to login table, and conditionally rendering JSX
export const Login = ({ setToken }) => {
  //useRef hook is a state variable that 1. persists between renders and 2. can change but doesn't instigate re-renders.
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [isUnsuccessful, setisUnsuccessful] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
//initialize user object
    const user = {
      username: username.current.value,
      password: password.current.value
    }
//loginUser() POSTS to login table to the API. Should this happen? Should logout delete this row?
    loginUser(user)
      .then(res => {
      /*
      tests to see if the response object contains the valid property or the "valid" string
      setToken
      */
      if ("valid" in res && res.valid && "token" in res) {
        //Sets the user into local storage and navigates to home
        setToken(res.token)
        localStorage.setItem("roam_token", res.token)
        navigate("/")
      }
      else {
        //Used to generate a string on the form "Username or password not valid"
        setisUnsuccessful(true)
      }
    })
  }

  return (
    <section>
      {/*login form*/}
      <form className="login" onSubmit={handleLogin}>
        <h1 className="title">Roam</h1>
        <p className="subtitle">Create Your Own Road Trip Story</p>

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" ref={username} />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" ref={password} />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            {/*submission button*/}
            <button className="button is-rounded is-link" type="submit" >Submit</button>
          </div>
          <div className="control">
            <Link to="/register" className="button is-rounded is-link is-light">Cancel</Link>
          </div>
        </div>
        {
          isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
        }
      </form>
    </section>
  )
}
