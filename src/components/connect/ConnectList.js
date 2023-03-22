import { useEffect, useState } from "react"
import { getSubscribedTrips } from "../../managers/TripManager"
import { Link, useNavigate } from "react-router-dom"
import { HumanDate } from "../utils/HumanDate"
import "./Connect.css"


export const ConnectList = ({ token }) => {

  const [trips, setTrips] = useState([])
  const tokenInt = parseInt(token)
  const navigate = useNavigate()

  useEffect(() => {
    getSubscribedTrips(tokenInt).then((tripData) => setTrips(tripData))

  }, [])



  const mostRecentTrip = trips[0]
  const secondTrip = trips[1]
  const allOtherTrips = trips.slice(2)






  return (
    <article className="connectTripsPage">
      <div key={`trip--${trips.id}`}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/connect/discover`}
          className="hover goBack"
        > ⬅️ Find More Travelers
        </Link>
        <article className="connectTripPages" >
          <h2 className="connectHeader">Welcome to your Connect Page...</h2>
          {trips.length ? (
            <div className="connectTripsContainer">
              <div className="columns" >


                <div className="mostRecentContainer column is-10">
                  <section className="trip">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/trips/${mostRecentTrip?.id}`}
                    >
                      <div className="connectLabel">Most Recent Trip...</div>
                      <br></br>
                      <h1 className="connectSubtitle">{mostRecentTrip.title}</h1>
                      <span style={{ fontWeight: "bold" }}>
                        <section className="subscribe_tripheader">
                          <h3>
                            Traveler:{" "}
                            <Link to={`/travelers/${mostRecentTrip.traveler.id}`}>
                              <div className="travelerName">{mostRecentTrip?.traveler?.full_name}</div>
                            </Link>
                          </h3>
                          <div className="trips_date">
                            Published On:{" "}
                            <HumanDate date={mostRecentTrip.publication_date} />
                          </div>
                        </section>
                      </span>
                      <img className="trip_image" src={mostRecentTrip?.image_url} />
                      <section className="subscribe_tripbody">
                        <p>
                          {mostRecentTrip.notes}

                        </p>
                      </section>
                    </Link>
                    <hr className="hr"></hr>
                  </section>
                </div>

                <div className="secondTripContainer">
                  <section className="column">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/trips/${secondTrip?.id}`}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        <div className="side_trips_title">{secondTrip.title}</div>
                        <h3>
                          Traveler:{" "}
                          <Link to={`/travelers/${secondTrip.traveler.id}`}>
                            <div className="travelerName">{secondTrip?.traveler?.full_name}</div>
                          </Link>
                        </h3>
                        <div className="trips_date">
                          Published On:{" "}
                          <HumanDate date={secondTrip.publication_date} />
                        </div>

                      </span>
                      <img className="trip_image" src={secondTrip?.image_url} />
                      <section className="subscribe__tripbody">
                        <div className="column">{secondTrip.notes}
                        </div>
                      </section>
                    </Link>
                    <section>
                    </section>
                  </section>
                  <hr className="hr"></hr>
                </div>
              </div>

              <div className="allOtherTripsContainer">
                {allOtherTrips.map((trip) => (
                  <div className=" bottomTrips">
                    <div className="columns is-centered">

                      <hr className="hr"></hr>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/trips/${trip?.id}`}
                      >
                        <br />
                        <div className="column is-two-thirds">
                          <p
                            className="title is-4 has-text-weight-bold is-margin"
                            aria-label="breadcrumbs"
                          >
                            {trip?.title}
                          </p>
                          <h3>
                            Traveler:{" "}
                            <Link to={`/travelers/${trip.traveler.id}`}>
                              <div className="travelerName">{trip?.traveler?.full_name}</div>
                            </Link>
                          </h3>
                          <div className="subtitle is-custom">
                            <span style={{ margin: 0, padding: 0 }}>
                              <HumanDate date={trip.publication_date} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>


                    <div className="column">
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/trips/${trip?.id}`}
                        className="hover"
                      >{trip.notes}
                      </Link></div>

                    <div className="column">
                      <Link
                        to={`/trips/${trip?.id}`}
                        className="trip_image"
                      ><img id="image" src={trip.image_url} alt="Image 1"></img></Link>

                    </div>
                    <hr className="hr"></hr>
                  </div>


                )
                )}</div>
            </div>
          )
            : (<>
              <div className="subscribe__text">Follow travelers to curate your connect page!</div>
            </>

            )}
        </article >
      </div >
    </article >
  )
}

