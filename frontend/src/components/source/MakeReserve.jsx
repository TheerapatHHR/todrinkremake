import Modal from "./Modal";
import { Link, Form, redirect } from "react-router-dom";
import classes from "../style/MakeReserve.module.css";
import { useLocation } from "react-router-dom";


function MakeReserve(){
    
    const location = useLocation();
    const placeid = location.state;
    // console.log(placeid);

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <input type="hidden" id="placeid" name="placeid" value={placeid} />
                <p>
                    <label htmlFor="reserved_num">Adults :</label>
                    <input type="number" id="reserved_num" name="reserved_num" min="1" max="100" />
                </p>
                <p>
                    <label htmlFor="reserved_date">Date :</label>
                    <input type="date" id="reserved_date" name="reserved_date" />
                </p>
                <p>
                    <label htmlFor="reserved_zone">Zone :</label>
                    <select name="reserved_zone" id="reserved_zone">
                        <option defaultValue="any">Any</option>
                        <option value="front">Front</option>
                        <option value="window">Near Window</option>
                        <option value="door">Near Door</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="reserved_name">Name :</label>
                    <input type="text" id="reserved_name" name="reserved_name" />
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default MakeReserve;

export async function action({request}){
    const formData = await request.formData();
    const reserveData = Object.fromEntries(formData);
    await fetch("http://localhost:3000/placelists-api/createReservation/", {
        method: "POST",
        body: JSON.stringify(reserveData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(reserveData);
  
      return redirect('/');
  }