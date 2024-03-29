import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TripByTag } from "./TripByTag"
import { getPublicTrips, getSearchedTrips } from "../../managers/TripManager"
import { HumanDate } from "../utils/HumanDate";
import "./Trip.css"
// import { TripSearch } from "./TripSearch"

export const AllTrips = ({ token }) => {
    const [trips, setTrips] = useState([])
    const [tagChoice, setSelectedTripByTag] = useState(0)
    // const [searchTerms, setSearchTerms] = useState("Search Trips by Keyword")
    // const [filteredTrips, setFilteredTrips] = useState([])

    // const handleKeypress = (e) => {
    //     //it triggers by pressing the enter key
    //     if (e.keyCode === 13) {
    //         handleSubmit()
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     getSearchedTrips(`${searchTerms}`).then((data) => setFilteredTrips(data))
    //     setSearchTerms("Search Trips by Keyword")
    //     document.getElementById("search").value = ""
    // }

    const filteredTrips = tagChoice
        ? trips.filter((trip) => trip.tag.some((tag) => tag.id === tagChoice))
        : trips

    useEffect(() => {
        getPublicTrips().then((tripData) => setTrips(tripData)
        )
    }, [])


    return (
        <>
            {/* <section className="posts__buttons">
                <section className="posts__filters">
                    <form>
                        <input
                            type="textfield"
                            placeholder={searchTerms}
                            id="search"
                            onChange={(e) => setSearchTerms(e.target.value)}
                            onKeyUp={handleKeypress}
                        ></input>
                        <button className="button is-small" type="submit" onClick={handleSubmit}>
                            Go
                        </button>
                        <button className="button is-small" onClick={() => setFilteredTrips(trips)}>View All</button>
                    </form>
                </section>
            </section> */}
            {/* <TripSearch searchTerms={searchTerms} setSearchTerms={setSearchTerms} getSearchedTrips={getSearchedTrips} trips={trips} /> */}
            <TripByTag setSelectedTripByTag={setSelectedTripByTag} tagChoice={tagChoice} trips={trips} />
            <div key={`trips--${trips.id}`}>
                <div className="allTripList">
                    {filteredTrips.map((trip) => {
                        return <div key={`trip--${trip.id}`}>
                            <Link
                                style={{ textDecoration: "none", color: "inherit" }}
                                to={`/trips/${trip?.id}`}
                                className="hover"
                            >
                                <div className="allTripContainer" >

                                    <div className="tripSubtitle">{trip.title}</div>

                                    <img src={trip.image_url} alt="Image 1" className="allTripBoxImage"></img>


                                    <Link style={{ textDecoration: "none", color: "inherit" }}
                                        to={`/travelers/${trip?.traveler?.id}`}>
                                        <div className=" tripLabel">{trip.traveler.full_name}</div>
                                    </Link>



                                    <span style={{ margin: 0, padding: 0 }}>
                                        <HumanDate date={trip.publication_date} />
                                    </span>

                                    <div className="tags">
                                        {trip.tag.map((t) => (
                                            <ol key={t.id} className="tagList"> {t.type} </ol>))}
                                    </div>
                                </div>
                            </Link>

                        </div>
                    })}</div>
            </div >

        </>)
}
