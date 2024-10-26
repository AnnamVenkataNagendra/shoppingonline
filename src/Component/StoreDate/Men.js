
import { menData } from "../Date/Menweardate";

function MenStoreDate()
{
   
    const fun="Men Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            menData.map((add)=>{
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
export default MenStoreDate;