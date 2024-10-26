
import { kitchenData } from "../Date/Kitchendata";

function KitchenStoreDate()
{
   
    const fun="Kitchen Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            kitchenData.map((add)=>{
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
export default KitchenStoreDate;