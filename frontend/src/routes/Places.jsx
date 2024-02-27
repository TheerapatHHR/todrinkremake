import PlaceList from "../components/source/PlaceList";
import { Outlet } from "react-router-dom";

function Places() {

    return (
        <>
            <Outlet />
            <main>
                <PlaceList />
            </main>
        </>
    );
}

export default Places;

export async function loader(){
    const command = "http://localhost:3000/placelists-api/getData";
    const response = await fetch(command);
    const resData = await response.json();
    return resData.data;
}