

import { useParams } from "react-router-dom";

import NavBarComponent from "../StoreDate/NavbarComponent";
import { computerData } from "../Data/Computerdata";
import { useCart } from "../CollectCart/CartDetails";

function ComputerSingledata()
{
    const {id} =useParams();
      const[addtocart,caetItems]=useCart();
    const Acdata=computerData.find((item)=>item.id==id);
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
                    {Acdata.company}
                    <h6>{Acdata.model}</h6>
                    <h6>{Acdata.price}</h6>
                </div>
                <div className="card-footer">
                    <p>{Acdata.description}</p>
                    <button className="btn btn-danger w-50 bi bi-cart4" onClick={()=>addtocart(computerData)}>Add to Cart</button>
                </div>

              </div>
              </>

            }

        </div>
        
        </>
    )
}
export default ComputerSingledata;