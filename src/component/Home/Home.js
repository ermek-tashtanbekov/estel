import classes from "./Home.module.css";
import audio from "../Audio/ESTELL.mp4"
import HomeFull from "./HomeFull/HomeFull";
import { Route } from "react-router";
import HomeList from "./HomeList/HomeList";
import { Link } from "react-router-dom";

const Home = ({ match }) => {
    return (<div>
        <video src={audio} autoPlay loop muted
         className={classes.video} />
        <div className={classes.full}>
            {match.isExact
                ? <HomeList />
                : <Route path="/home/:id" component={HomeFull} />}
        </div>

        <button className={classes.btn}><Link to="/catolog">Catolog</Link></button>
    </div>);
}

export default Home;