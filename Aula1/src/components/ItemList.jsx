/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";


const ItemList = ({title, itens, array, path, idPath}) => {
    return (
        
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>

                <Link to={path}  className="item-list__link">
                    Mostrar mais 
                </Link>
            </div>

            <div className="item-list__container" >
                {array.filter( (currentValue, index) => index < itens  ).map((currObj, index)=> 
                <SingleItem  
                // id={currObj.id} 
                // img={currObj.image} 
                // name={currObj.name} 
                // artist={currObj.artist} 
                // banner={currObj.banner} 
                idPath={idPath}
                {...currObj}
                key={`${title}-${index}`}/> )}

            </div>
        </div>
    )

}

export default ItemList;