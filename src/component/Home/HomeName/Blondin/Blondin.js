import classes from "./Blondin.module.css";
import { Link } from "react-router-dom"

const Blondin = () => {
    return (
        <div className={classes.Blondin}>
            <div className={classes.shampoo}>
                <img src="https://estel-shop.ru/upload/iblock/01f/01f4d21ad3dc1b1ff85a6c4922c2ad1c.jpg" alt={"fe"} />
                <Link to="catolog"><p>Estel Haute Couture Luxury Color New Роскошь цвета Маска для окрашенных волос 200 мл.</p>
                    <strong>Достаточно
770 руб./шт</strong>
                </Link>
            </div>
            <div  className={classes.shampoo}>
                <img src="https://estel-shop.ru/upload/iblock/e25/e2534b914721510f2ade62c83d3f1c07.jpg" alt={"fe"}/>
                <Link to="catolog"><p>Estel Haute Couture Luxury Color New Роскошь цвета Маска для окрашенных волос 200 мл.</p>
                    <strong>Достаточно
770 руб./шт</strong>
                </Link>
            </div>
            <div  className={classes.shampoo}>
                <img src="https://estel-shop.ru/upload/iblock/7df/7df2e674fc6cbfe470669f28d6f5fd3b.jpg" alt={"fe"}/>
                <Link to="catolog"><p>Estel Haute Couture Luxury Color New Роскошь цвета Маска для окрашенных волос 200 мл.</p>
                    <strong>Достаточно
770 руб./шт</strong>
                </Link>
            </div>
            <div  className={classes.shampoo}>
                <img src="https://estel-shop.ru/upload/iblock/02b/02bb8883e7fa7d5ff342c1a30336b814.jpg" alt={"fe"}  />
                <Link to="catolog"><p>Estel Haute Couture Luxury Color New Роскошь цвета Маска для окрашенных волос 200 мл.</p>
                    <strong>Достаточно
770 руб./шт</strong>
                </Link>
            </div>
            <div  className={classes.shampoo}>
                <img src="https://estel-shop.ru/upload/iblock/6c3/6c32fa7f864981edb9527d92154626d9.jpg" alt={"fe"} />
                <Link to="catolog"><p>Estel Haute Couture Luxury Color New Роскошь цвета Маска для окрашенных волос 200 мл.</p>
                    <strong>Достаточно
770 руб./шт</strong>
                </Link>
            </div>

        </div>
    );
}

export default Blondin;