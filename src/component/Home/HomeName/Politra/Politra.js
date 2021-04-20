import classes from "./Politra.module.css";
import { Link } from "react-router-dom"

const Politra = () => {
    return (
        <div className={classes.Politra}>
           <div> <h1>Универсальная палитра оттенков Estel Professional</h1>
 <h4>Универсальная палитра краски для волос Estel Professional</h4>
 <strong>В этом разделе сайта собраны все красители для волос Estel Professional.</strong>
 <p>Выбрав нужный уровень глубины тона (Столбцы) и интересное направление тона (Строки) - Вы можете увидеть все доступные, на сегодняшний день, краски всех основных палитр Estel Professional.</p>
 <strong>Estel Prince </strong><p>- стойкая крем-краска для волос (100 мл.)</p>
 <strong>Estel Princess Essex </strong><p>- стойкая крем-краска для волос</p>
 <strong>Estel Prince </strong><p>-  стойкая краска-уход</p>
 <strong>Estel Prince </strong><p>- крем-краска для седых волос</p>
 <strong>Estel Prince </strong><p>- полуперманентная крем-краска для волос</p>
<div></div>
            <div className={classes.poli}>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/b4e/b4eff4fe2c7d0fa399a27b4f5107b030.jpg" width="100px"  alt={"fe"}/>htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/da5/da584b7094b13a2f78a097d67ed0cb5a.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/51a/51afd7a78e1f88d17b7f56d3953fd44e.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/367/367cbaaca736ff1578b40c76dc36c4ec.jpg" width="100px" alt={"fe"}/>htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/121/1213790cfd9210efb055ab8c326242ac.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/ea8/ea836991b610f6329510902745683483.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/e09/e09a71b2b29400117f3b2a15c07c5141.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/51a/51afd7a78e1f88d17b7f56d3953fd44e.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/e2e/e2e6c266136e500776a7824eade54fc6.jpg" width="100px" alt={"fe"} />htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/c76/c768bedc5f6b97cd97f8bb3c5445bf79.jpg" width="100px"  alt={"fe"}/>htrshs</Link></div>
                <div><Link to="/home"><img src="https://estel-shop.ru/upload/iblock/749/749ca639ef1a1a8d462e844d47caf999.jpg" width="100px" alt={"fe"}/>htrshs</Link></div>
            </div>
            <div>
                <img src="" />
            </div>
        </div>
        </div>
    );
}

export default Politra;
