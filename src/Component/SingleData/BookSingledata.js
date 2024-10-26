
import { useParams } from "react-router-dom";
import { booksData } from "../Data/Bookdata";
import NavBarComponent from "../StoreDate/NavbarComponent";
import { useCart } from "../CollectCart/CartDetails";

 function BookSingelData()
 {
    const {id}=useParams();
const[addtoCart,caetItems]=useCart();
    const Book=booksData.find((item)=>item.id == id)

    return(
        <>
        <NavBarComponent />
        <div className="d-flex flex-wrap">
        {
           
           <>
           <div className="card w-25 p-3 m-3">
            <img src={Book.image} alt="Book Inages"></img>
            <div className="card-header">
                {Book.author}
              <h6>{Book.price}</h6>
            </div>
            <div className="card-footer">
                <p>{Book.description}</p>
                <button className="btn btn-primary w-50" onClick={()=>addtoCart(booksData)}>Add to Cart</button>
            </div>

           </div>
           </>
          
        }
        </div>
        </>
    )
 }
 export default BookSingelData;