import { Link } from "react-router-dom";
import classes from "./Catolog.module.css";

const Catolog = () => {
    return (<div classNam={classes.Catolog}>
        <div>
            <div className={classes.bt}>
                <div className={classes.Catologg}>
                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/a07/a0759a757a8c18837a03f36ef7a65e95.jpg" alt={"fe"} />
                        <Link> <h5>Краска для волос (706)</h5>
                            <div><p><strong>Краска для волос Estel Professional.</strong> Палитры: стойкая крем-краска Princess Essex, стойкая краска-уход De Luxe, краска для седых волос De Luxe Silver, полуперманентная De Luxe Sense, прямое окрашивание XTRO. А также тонирующие маски для волос Estel NewTone. Пена для тонирования седины Alpha Homme.</p></div></Link>
                    </div>

                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/341/3414f390f080a207324f27a3de2872b5.jpg" alt={"fe"} />
                        <Link> <h5>Оксиды/Активаторы (26)</h5>
                            <div><p><strong>Оксиданты и активаторы Estel Professional.</strong>От 1,5% до 12% . Для работы с красителями Princess Essex и De Luxe.
</p></div></Link>
                    </div>
                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/7e6/7e609694097644bb4c0cc329249b164d.jpg" alt={"fe"} />
                        <Link> <h5>	Уход за волосами (325)</h5>
                            <div><p><strong>Средства по уходу за волосами от Estel Professional.</strong> Линии профессиональных продуктов Curex, Haute Couture, Otium и Beauty Hair Lab. Для различных типов волос.
Профессиональные шампуни, бальзамы, маски и другие препараты для ухода за волосами и кожей головы.
</p></div></Link>
                    </div>
                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/f64/f64718849b3048fe09248690011916cc.jpg" alt={"fe"} />
                        <Link> <h5>
                         	
Краска для ресниц и бровей (11)</h5>
                            <div><p>Краска для ресниц и бровей
</p></div></Link>
                    </div>
                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/41d/41d57d97566f862705ea6d9f7258ed55.jpg" alt={"fe"} />
                        <Link> <h5>Краска для волос (706)</h5>
                            <div><p>Краска для ресниц и бровей</p></div></Link>
                    </div>

                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/341/3414f390f080a207324f27a3de2872b5.jpg" alt={"fe"} />
                        <Link> <h5>Оксиды/Активаторы (26)</h5>
                            <div><p><strong>Оксиданты и активаторы Estel Professional.</strong>От 1,5% до 12% . Для работы с красителями Princess Essex и De Luxe.
</p></div></Link>
                    </div>
                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/7e6/7e609694097644bb4c0cc329249b164d.jpg" alt={"fe"}/>
                        <Link> <h5>	Уход за волосами (325)</h5>
                            <div><p><strong>Средства по уходу за волосами от Estel Professional.</strong> Линии профессиональных продуктов Curex, Haute Couture, Otium и Beauty Hair Lab. Для различных типов волос.
Профессиональные шампуни, бальзамы, маски и другие препараты для ухода за волосами и кожей головы.
</p></div></Link>
                    </div>
                    <div className={classes.child}>
                        <img src="https://estel-shop.ru/upload/iblock/f64/f64718849b3048fe09248690011916cc.jpg" alt={"fe"} />
                        <Link> <h5>
                            Стайлинг (40)</h5>
                            <div><p>Средства для укладки и стайлинга от Estel Professional. Лаки для волос, муссы, воски, и пр.
</p></div></Link>
                    </div>
                
                </div>


            </div>
        </div>

    </div>);
}

export default Catolog;