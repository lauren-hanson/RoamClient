export const getUsers = () => {
  return fetch("http://localhost:8000/users", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("roam_token")}`
    }
  })
    .then(res => res.json())
}
