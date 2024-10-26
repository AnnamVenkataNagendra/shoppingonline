import { Link } from "react-router-dom";

import { acData } from "../Date/Acdata";
import NavBarComponent from "../StoreDate/NavbarComponent";
import { useState } from "react";
function AcpageComponent()
{

    const[selected,setselected]=useState([]);
    const handelchange=(java)=>{
            
        if(selected.includes(java)){
            setselected(selected.filter((item)=>item != java));
        }
        else{
            setselected([...selected,java]);
        }

    }

    const filterdata=selected.length==0?
    acData:acData.filter((item)=>selected.includes(item.company))
    return(
        <><NavBarComponent />

<div className="acpages-date">
    
<div>
           {
             
             acData.map((item)=>{
                return(
                    <>
                    <div className="user-checkbox">
                    <input type="checkbox" checked={selected.includes(item.company)} onChange={()=>{handelchange(item.company)}}/>
                    {item.company}

                </div>
                    </>
                )
             })
           }

        </div>
        <div className="d-flex flex-wrap:wrap">
        {
            filterdata.map((item)=>{
                return(
                   <>
                   <Link to={`/acsingle/${item.id}`}>
                   <div className="card p-2 w-75 m-2">
                        <img src={item.image}></img>
                        <div className="card-footer">
                            <p>{item.model}</p>
                            <p>{item.company}</p>
                            </div>

                        </div>
                   </Link>
                   </>
                )
            })
        }
       </div>
</div>

       
       
        </>
    )
}
export default AcpageComponent;