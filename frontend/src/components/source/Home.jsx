import classes from "../style/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const toPlacelist = "/placelist";

  return (
    <div className={classes.home}>
      <div className={classes.content}>
        <div className={classes.start}>START YOUR</div>
        <div className={classes.best}>BEST NIGHT</div>
        <Link to={toPlacelist}>
          <button className={classes.toListBtn}>BOOK NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
