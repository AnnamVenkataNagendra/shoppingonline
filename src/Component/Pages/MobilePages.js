






import NavBarComponent from "../StoreDate/NavbarComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mobileData } from "../Date/Mobiledata";
function MobilePages()
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
    mobileData:mobileData.filter((item)=>selected.includes(item.company))
    return(
        <>
        <NavBarComponent />
        <div className="acpages-date">
        <div>
           {
             
             mobileData.map((item)=>{
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
                   <Link to={`/mobile/${item.id}`}>
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
 export default MobilePages;