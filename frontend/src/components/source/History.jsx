import { useLoaderData } from "react-router-dom";
import Reserved from "./Reserved";
import classes from "../style/History.module.css";

function History(){

    const reservedHistory = useLoaderData();
    // console.log(reservedHistory);

    return (
        <>
        <div>History</div>
            {reservedHistory.length > 0 && (
                <ul className={classes.lists}>
                    {reservedHistory
                    .slice().reverse()
                    .map((queue) => (
                        <Reserved key={queue.reserved_id} queuedata={queue} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default History;


export async function loader(){
    const command = "http://localhost:3000/placelists-api/getReservation/";
    const response = await fetch(command);
    const resData = await response.json();
    return resData.data;
}