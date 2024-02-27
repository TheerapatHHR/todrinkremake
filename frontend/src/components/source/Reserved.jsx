import classes from "../style/Reserved.module.css"
import { BsPeopleFill } from "react-icons/bs"
import { FaCalendarCheck, FaChair } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export function Reserved({ queuedata }){
    const queueData = {queuedata}.queuedata;
    const logoPath = "image/" + queueData.logo + ".png";
    const reservedDate = new Date(queueData.reserved_date);
    console.log("rawData: " + queueData.reserved_date);
    console.log(reservedDate);
    const reservedDay = reservedDate.getUTCDate()+1;
    const reservedMonth = reservedDate.getMonth()+1;
    const reservedYear = reservedDate.getFullYear();
    const queueDate = reservedDay + " / " + reservedMonth + " / " + reservedYear;


    return (
        <>
            <li className={classes.list}>
                <div className={classes.details}>
                    <div className={classes.logoContainer}>
                        <img src={logoPath} alt={queueData.logo} className={classes.logoPic} />
                    </div>
                    <div className={classes.content}>
                        <div className={classes.placeName}>{queueData.placename.toUpperCase()}</div>
                        <div className={classes.detail}>
                            <div className={classes.showId}>
                                <div className={classes.topic}>Queue Number</div>
                                <div className={classes.data}>#{queueData.reserved_id}</div>
                                <div className={classes.data}>name: {queueData.reserved_name}</div>
                            </div>
                            <div className={classes.info}>
                                <IconContext.Provider value={{ color: "#FDA624" }}>
                                <div className={classes.data}><BsPeopleFill /> {queueData.reserved_num}</div>
                                <div className={classes.data}><FaCalendarCheck /> {queueDate}</div>
                                <div className={classes.data}><FaChair /> {queueData.reserved_zone}</div>
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className={classes.status}>
                            <div className={classes.statusTopic}>Status :</div>
                            <div className={classes.statusData}>Waiting</div>
                            {/* <button>Cancel</button> */}
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Reserved;