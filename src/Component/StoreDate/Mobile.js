
import { mobileData } from "../Date/Mobiledata";
function MobileStoreDate()
{
   
    const fun="Mobile Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            mobileData.map((add)=>{
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
export default MobileStoreDate;