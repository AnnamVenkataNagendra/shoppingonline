
import { watchData } from "../Date/Watchdata";
function WatchStoreDate()
{
   
    const fun="Watch Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            watchData.map((add)=>{
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
export default WatchStoreDate;