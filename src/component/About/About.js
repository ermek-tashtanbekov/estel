import { Link } from "react-router-dom";
import classes from "./About.module.css";
import vidioo from '../Audio/ReklamaESTEL.mp4'
const About = () => {
    return (
        <div className={classes.About}>
            <video src={vidioo} autoPlay loop 
                className={classes.vodio} />

            <div className={classes.per}>
                <div>
                    <div className={classes.full}>
                        <img src="https://estel-shop.ru/upload/iblock/8f1/8f12e410c11d72205d980e96e4a6c73f.jpg" alt={"the are"} />
                        <div className={classes.text}>
                            <small> 5 апреля 2021</small>
                            <Link>   <h5> Скидки 20 и 30% на продукцию Otium. Estel Professional</h5>
                                <h6>Скидки 20 и 30% на продукцию Estel Professional.</h6></Link>
                            <p>В акции участвуют розничные продукты из Линеек Estel OTIUM, Estel Keratin, Estel iNeo-Crystal и Estel Prima Blond.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.full}>
                        <img src="https://estel-shop.ru/upload/iblock/f74/f745484732a5292a8c612210784eaecc.jpg" alt={"the are"} />
                        <div className={classes.text}>
                            <small> 5 апреля 2021</small>
                            <Link>  <h5> Скидки 20 и 30% на продукцию Otium. Estel Professional</h5>
                                <h6>Скидки 20 и 30% на продукцию Estel Professional.</h6></Link>
                            <p>В акции участвуют розничные продукты из Линеек Estel OTIUM, Estel Keratin, Estel iNeo-Crystal и Estel Prima Blond.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.full}>
                        <img src="https://estel-shop.ru/upload/resize_cache/iblock/38a/190_130_2/38aa7135c81471487a6e1fdbe5b1bf47.jpg" alt={"the are"}/>
                        <div className={classes.text}>
                            <small> 5 апреля 2021</small>
                            <Link>   <h5> Скидки 20 и 30% на продукцию Otium. Estel Professional</h5>
                                <h6>Скидки 20 и 30% на продукцию Estel Professional.</h6></Link>
                            <p>В акции участвуют розничные продукты из Линеек Estel OTIUM, Estel Keratin, Estel iNeo-Crystal и Estel Prima Blond.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.full}>
                        <img src="https://estel-shop.ru/upload/iblock/a27/a27b951efa893b25585cc67b470c74ca.jpg" alt={"the are"} />
                        <div className={classes.text}>
                            <small> 5 апреля 2021</small>
                            <Link to="/">   <h5> Скидки 20 и 30% на продукцию Otium. Estel Professional</h5>
                                <h6>Скидки 20 и 30% на продукцию Estel Professional.</h6></Link>
                            <p>В акции участвуют розничные продукты из Линеек Estel OTIUM, Estel Keratin, Estel iNeo-Crystal и Estel Prima Blond.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;