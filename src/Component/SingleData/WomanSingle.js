

import { useParams } from "react-router-dom";

import NavBarComponent from "../StoreDate/NavbarComponent";
import { womanData } from "../Data/Womanweardata";
import { useCart } from "../CollectCart/CartDetails";

function WomanSingle()
{
    const {id} =useParams();
    const[addtoCart,cartitem]=useCart();

    const Acdata=womanData.find((item)=>item.id==id);
    return(
        <>
        <NavBarComponent />
        <div className="d-flex flex-wrap">
            {

              <>
              <div className="card p-2 m-2 w-25" >
                <img src={Acdata.image}></img>
                <div className="card-header">
                    {Acdata.category},
                    {Acdata.brand}
                    <h6>{Acdata.model}</h6>
                    <h6>{Acdata.price}</h6>
                </div>
                <div className="card-footer">
                    <p>{Acdata.description}</p>
                    <button className="btn btn-danger w-50 bi bi-cart4" onClick={()=>addtoCart(womanData)}>Add to Cart</button>
                </div>

              </div>
              </>

            }

        </div>
        
        </>
    )
}
export default WomanSingle;