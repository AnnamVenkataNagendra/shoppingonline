
import NavBarComponent from "../StoreDate/NavbarComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { womanData } from "../Date/Womanweardata";
function WomanPages()
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
    womanData:womanData.filter((item)=>selected.includes(item.brand))
    return(
        <>
        <NavBarComponent />
        <div className="acpages-date">
        <div>
           {
             
             womanData.map((item)=>{
                return(
                    <>
                    <div className="user-checkbox">
                    <input type="checkbox" checked={selected.includes(item.brand)} onChange={()=>{handelchange(item.brand)}}/>
                    {item.brand}

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
                   <Link to={`/woman/${item.id}`}>
                   <div className="card p-2 w-75 m-2">
                        <img src={item.image}></img>
                        <div className="card-footer">
                            <p>{item.model}</p>
                            <p>{item.brand}</p>
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
 export default WomanPages;