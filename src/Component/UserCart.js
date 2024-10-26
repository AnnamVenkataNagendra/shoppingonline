

import { useCart } from "./CollectCart/CartDetails";
function UserCart(){

    const[cartitem,addtocart]=useCart();
    return(
        <>
        <div>
            {
                cartitem.map((item)=>{
                    return(
                        <>
                        <div className="cart-section">
                            <div className="cart-image">
                                <img src={item.image} alt="images"></img>
                            </div>
                            <div className="cart-details">
                                <h3>{item.product}</h3>
                                <div>
                                    <h3>{item.price}</h3>
                                </div>
                                <h2>{item.model}</h2>

                            </div>

                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default UserCart;