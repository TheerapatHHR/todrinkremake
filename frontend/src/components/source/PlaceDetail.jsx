import { Route, Routes, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import MakeReserve from "./MakeReserve";
import classes from "../style/PlaceDetail.module.css";
import { LiaWineBottleSolid } from "react-icons/lia";
import { FaMusic, FaCalendarCheck } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs"
 
function PlaceDetail() {
  const placeDetail = useLoaderData();
  const placeid = placeDetail.placeid;
  const logoPath = "image/" + placeDetail.logo + ".png"
  const picPath = "image/" + placeDetail.place_pic + ".png";

  return (
    <>
      <div className={classes.details}>
        <div className={classes.logo}><img src={logoPath} alt={placeDetail.logo} className={classes.logoPic} /></div>
        <div className={classes.detail}>
          <div className={classes.placeName}>{placeDetail.placename.toUpperCase()}</div>
          <div>{placeDetail.product}</div>
          <div className={classes.dataContainer}>
            <div className={classes.data}> <LiaWineBottleSolid /> {placeDetail.type}</div>
            <div className={classes.data}> <FaMusic /> {placeDetail.music}</div>
            <div className={classes.data}> <FaCalendarCheck /> Open {placeDetail.openday}</div>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.openhours}>Opening Hour</div>
            <div className={classes.time}>Today</div>
            <div className={classes.time}>{placeDetail.open_time} - {placeDetail.close_time}</div>
          </div>
          {/* <div className={classes.dataContainer}> */}
            <div className={classes.dataContainer}> <HiOutlineLocationMarker /> {placeDetail.location}</div>
            <div className={classes.dataContainer}> <BsTelephoneFill /> {placeDetail.tel}</div>
          {/* </div> */}
          
        </div>
        <div className={classes.picture}>
          <div><img src={picPath} alt={placeDetail.place_pic} /></div>
          <Link to="make-reserve" state={placeid}>
            <button className={classes.reserveBtn}>Reserve</button>
          </Link>
          <Routes>
            <Route path="make-reserve" Component={MakeReserve} />
          </Routes>
        </div>
      </div>
      
      <div className={classes.promotion}>
        <div className={classes.placeName}>Promotion</div>
      </div>
      <hr className={classes.proLine} />
      <div className={classes.promotion}>
        <div className={classes.data}>{placeDetail.promotion}</div>
        <ul>
          <li className={classes.proDetaill}>Valid 11/08/2023 - 30/08/2023</li>
          <li className={classes.proDetaill}>No Tax included</li>
        </ul>
      </div>
    </>
  );
}

export default PlaceDetail;

export async function loader({ params }) {
  const command =
    "http://localhost:3000/placelists-api/getData/" + params.placeid;
  const response = await fetch(command);
  const resData = await response.json();
  // console.log(resData.data[0]);
  return resData.data[0];
}
