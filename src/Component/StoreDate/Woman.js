
import { womanData } from "../Date/Womanweardata";
function WomanStoreDate()
{
   
    const fun="Woman Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            womanData.map((add)=>{
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
export default WomanStoreDate;