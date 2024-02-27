/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "../style/Place.module.css";
import { PiWineFill } from "react-icons/pi";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoFlash } from "react-icons/io5";


function Place({ placedata }) {

  const placeData = { placedata }.placedata;
  const status = checkStatus(placeData.status);
  const promotion = checkPromotion(placeData.promotion);
  // console.log(placeData.placeid);
  // console.log(placeData.placeid);
  const toDetail = "/" + placeData.placeid;
  const imgPath = "image/" + placeData.logo + ".png";
  // console.log(imgPath);

  
  const statusPic = status.toLowerCase();
  const statusPath = "image/" + statusPic + ".png";
  const openTime = changeTimeFormat(placeData.open_time);
  const closeTime = changeTimeFormat(placeData.close_time);


  function changeTimeFormat(time){
    const formattedTime = time.slice(0, 5);
    return formattedTime;
  }

  function checkStatus(placeStatus) {
    if (placeStatus == "1") {
      return "OPEN";
    }
    return "CLOSE";
  }

  function checkPromotion(placePromotion) {
    if (placePromotion == "-") {
      return "Special Deals are coming soon!";
    }
    return placePromotion;
  }




  return (
    <>
      <li className={classes.list}>
        {/* <Link to={ toDetail } > */}
        <div className={classes.details}>
          <div className={classes.logoContainer}>
           
            <img src={imgPath} alt={imgPath} className={classes.logoPic} />
          </div>
          <div className={classes.content}>
            <div className={classes.placeName}>{placeData.placename.toUpperCase()}</div>
            <div className={classes.statusPic}> <img src={statusPath} alt={statusPic} /> </div>
            <div>
              <div className={classes.data}> <PiWineFill /> {placeData.type}</div>
              <div className={classes.data}>
                <BsClockHistory /> {openTime} to {closeTime}
              </div>
              <div className={classes.data}> <HiOutlineLocationMarker /> {placeData.location}</div>
            </div>
            <div className={classes.data}> <IoFlash /> {promotion}</div>
          </div>

          <div className={classes.button}>
            <Link to={toDetail}>
              <button className={classes.btn}>Detail</button>
            </Link>
          </div>
        </div>
        {/* </Link> */}
      </li>
    </>
  );
}

export default Place;
