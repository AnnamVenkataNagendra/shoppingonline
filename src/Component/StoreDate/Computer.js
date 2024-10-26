
import { computerData } from "../Date/Computerdata";

function ComputerStoreDate()
{
   
    const computer="Computer Component"

    return(
        <>
        <h2>{computer}</h2>
    <div className="ac-date">
        {
            computerData.map((add)=>{
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
export default ComputerStoreDate;