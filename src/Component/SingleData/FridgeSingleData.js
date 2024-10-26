
import { useParams } from "react-router-dom";
import NavBarComponent from "../StoreDate/NavbarComponent";
import { fridgeData } from "../Data/Fridgedata";
import { useCart } from "../CollectCart/CartDetails";
 function FridgeSingelData()
 {
    const {id}=useParams();
    const[addtoCart,cartitem]=useCart();
    const Book=fridgeData.find((item)=>item.id == id)

    return(
        <>
        <NavBarComponent />
        <div className="d-flex flex-wrap">
        {
           
           <>
           <div className="card w-25 p-3 m-3">
            <img src={Book.image}></img>
            <div className="card-header">
                {Book.brand},
                {Book.model}
              <h6>{Book.price}</h6>
            </div>
            <div className="card-footer">
                <p>{Book.description}</p>
                <button className="btn btn-primary w-50" onClick={()=>addtoCart(fridgeData)}>Add to Cart</button>
            </div>

           </div>
           </>
          
        }
        </div>
        </>
    )
 }
 export default FridgeSingelData;