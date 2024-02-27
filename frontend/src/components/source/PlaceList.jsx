import Place from "./Place";
import { useLoaderData } from "react-router-dom";
import classes from "../style/PlaceList.module.css"

function PlaceList() {
    const places = useLoaderData();
    // console.log(places[0].placename);

    return (
        <>
            {places.length > 0 && (
                <ul className={classes.lists}>
                    {places.map((place) => (
                        <Place key={place.placeid} placedata={place} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default PlaceList;