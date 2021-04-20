import { Link } from "react-router-dom";
import politra from "../../Imgs/politra.jpg"
import blondinka from "../../Imgs/blondinka.jpg"
import raznui from "../../Imgs/Polit.jpg"
import men from "../../Imgs/men.jpg"
import uhot from "../../Imgs/uhot.jpg"
import classes from "./HomeList.module.css";
import family from '../../Imgs/family.jpg'
const HomeList = () => {
    return ( <div className={classes.one}>
 <div className={classes.Person} style={{
                backgroundImage: `url(${politra})`,
                
                width: "250px",
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "15px"
            }}>
      <h3 className={classes.blondes}>
                  <Link to="/catolog"   >Catolog</Link> </h3>

            </div>
            <div className={classes.blondin}  style={{
                backgroundImage: `url(${blondinka})`,
               
                width: "250px",
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "15px"
            }}>
                <h3 className={classes.blondes}>
                  <Link to="/blondin"   >For Blondes</Link> </h3>
            </div>

            <div style={{
                backgroundImage: `url(${raznui})`,
                
                width: "250px",
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "15px"
            }}>
        <h3 className={classes.blondes}>
                  <Link to="/politra"   >Politra</Link> </h3>
            </div>
            <div style={{
                backgroundImage: `url(${men})`,
               
                width: "250px",
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "15px"
            }}>
                      <h3 className={classes.blondes}>
                  <Link to="/men"   > For Men</Link> </h3>
            </div>
            <div style={{
                backgroundImage: `url(${uhot})`,
              
                width: "250px",
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "15px"
            }}>
                      <h3 className={classes.blondes}>
                  <Link to="/stock"   > Skin Сare</Link> </h3>
            </div>
            <div style={{
                backgroundImage: `url(${family})`,
               
                width: "250px",
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "15px"
            }}>
                      <h3 className={classes.blondes}>
                  <Link to="/person"   > For Family</Link> </h3>
            </div>
    </div> );
}
 
export default HomeList;