

import { acData } from "../Date/Acdata";

function AcStoraData()
{
    return(
        
    <>
    <h2>Ac Component</h2>
    <div className="ac-date">
        {
            acData.map((add)=>{
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
export default AcStoraData;