import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { MyTrips } from "../../src/components/trip/MyTrips"
import { NewTrip } from "../../src/components/trip/NewTrip"
import { TripList } from "../../src/components/trip/TripList"
import { TripDetails } from "../../src/components/trip/TripDetails"
import { EditTrip } from "../../src/components/trip/EditTrip"


export const ApplicationViews = ({ token, setToken }) => {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login setToken={setToken} />} />
				<Route path="/register" element={<Register setToken={setToken} />} />
				<Route path="/">
				</Route>
				<Route element={<Authorized token={token} />} >
					<Route path="/trips" >
						{/* <Route index element={<MyTrips token={token} />} /> */}
						{/* <Route index element={<TripContainer token={token} />} /> */}
						<Route index element={<TripList token={token} />} />
						<Route path=":tripId" element={<TripDetails path=":tripId"token={token} />} />
						<Route path="newtrip" element={<NewTrip token={token} />} />
						<Route path="edit/:tripId" element={<EditTrip token={token} />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}