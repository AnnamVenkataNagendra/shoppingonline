
import { furnitureData } from "../Date/Furnituredata";
function FurnitureStoreDate()
{
   
    const fun="Furniture Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            furnitureData.map((add)=>{
                return(
                  <>
                    <div className="data-ac">
                        <img src={add.image}></img>
                       
                        </div>
        
                  </>
                )
            })
        }

    </div>
        </>
    )

}
export default FurnitureStoreDate;