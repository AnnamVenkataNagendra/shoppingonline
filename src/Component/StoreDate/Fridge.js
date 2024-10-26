
import { fridgeData } from "../Date/Fridgedata";

function FridgeStoreDate()
{
   
    const Fridge="Fridge Component"

    return(
        <>
        <h2>{Fridge}</h2>
    <div className="ac-date">
        {
            fridgeData.map((add)=>{
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
export default FridgeStoreDate;