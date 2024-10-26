
import { tvData } from "../Date/Tvdata";

function TvStoreDate()
{
   
    const fun="Tv Component"

    return(
        <>
        <h2>{fun}</h2>
    <div className="ac-date">
        {
            tvData.map((add)=>{
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
export default TvStoreDate;