import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { Home } from "../components/home/Home"
import { NewTrip } from "../../src/components/trip/NewTrip"
import { MyTripList } from "../components/trip/MyTripList"
import { TripDetails } from "../../src/components/trip/TripDetails"
import { EditTrip } from "../../src/components/trip/EditTrip"
// import { ItemList } from "../../src/components/packlist/ItemList
import { AddItem } from "../../src/components/packlist/AddItem"
import { PackList } from "../../src/components/packlist/PackList"
import { TravelerList } from "../components/traveler/TravelerList"
import { TravelerDetails } from "../components/traveler/TravelerDetails"
import { Connect } from "../components/connect/Connect"
import { ConnectFeed } from "../components/connect/ConnectFeed"
import { Map } from "../components/map/Map"
// import { AddTripTips } from "../components/map/AddTripTips"
import { CalendarView } from "../components/calendar/CalendarView"

export const ApplicationViews = ({ token, setToken }) => {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login setToken={setToken} />} />
				<Route path="/register" element={<Register setToken={setToken} />} />
				<Route path="/">
					<Route index element={<Home token={token} />} />
				</Route>
				<Route element={<Authorized token={token} />} >
					<Route path="/trips" >
						{/* <Route index element={<MyTrips token={token} />} /> */}
						{/* <Route index element={<TripContainer token={token} />} /> */}
						<Route index element={<MyTripList token={token} />} />
						<Route path=":tripId" element={<TripDetails path=":tripId" token={token} />} />
						<Route path="newtrip" element={<NewTrip token={token} />} />
						<Route path="edit/:tripId" element={<EditTrip token={token} />} />
					</Route>
					<Route path="/favorites" >
						<Route index element={<Map token={token} />} />
						{/* <Route path=":destinationId/tips" element={<AddTripTips token={token} />} /> */}
					</Route>
					<Route path="/packlist" >
						<Route index element={<PackList token={token} />} />
						<Route path="add" element={<AddItem token={token} />} />
					</Route>
					<Route path="/connect" >
						<Route index element={<ConnectFeed token={token} />} />
						<Route path="discover" element={<Connect token={token} />} />
					
					</Route>
					<Route path="/calendar" >
						<Route index element={<CalendarView token={token} />} />
					</Route>
					<Route path="/travelers" >
						<Route index element={<TravelerList token={token} />} />
						<Route path=":travelerId" element={<TravelerDetails
							token={token} />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}