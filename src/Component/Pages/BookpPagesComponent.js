import NavBarComponent from "../StoreDate/NavbarComponent";

import { booksData } from "../Date/Bookdata";
import { useState } from "react";
import { Link } from "react-router-dom";

  function BookSinglePage(){
  
    const[selected,setselected]=useState([])

    const handelselected=(select)=>{
      if(selected.includes(select)){
        setselected(selected.filter((item)=>item != select))
      }
      else{
        setselected([...selected,select])
      }
      
    }

    const filterdata=selected.length==0?
    booksData:booksData.filter((item)=>selected.includes(item.category))

    
    return(
        <>
        <NavBarComponent />
        <h3>Book Single</h3>
<div className="page-display">
<div className="full-page">
          {
            booksData.map((item)=>{
              return(
                <>
                <div className="user-checkbox">
                  <input type="checkbox" checked={selected.includes(item.category)} onChange={()=>{handelselected(item.category)}}></input>
                  {item.category}
                   </div>
                </>
              )
            })
          }
           
        </div>
        <div className="d-flex flex-wrap">
           {
            filterdata.map((item)=>{
                return(
                    <>
                   <Link to={`/booksingle/${item.id}`}>
                   <div className="card  p-4 m-3">
                    <img src={item.image}></img>
                    <div className="card-header">
                        <p>{item.category}</p>
                        <p>{item.title}</p>
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
  
  export default BookSinglePage;