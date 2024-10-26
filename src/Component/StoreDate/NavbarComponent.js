import { Link } from "react-router-dom";
import { useCart } from "../CollectCart/CartDetails";

function NavBarComponent()
{

    const[cartItems]=useCart();

    return(
        <>
      <div className="navbar-list">
        <h2>E-Mart</h2>
        <div>
            <input type="text" placeholder="enter details" className="input-list"></input>
        </div>
        <div className="cart-list">
           <p>SingIn/SignUp</p>
        </div>
            <Link to="/cart">
            <span>
                Cart
                {cartItems.length}
            </span>
            </Link>
      </div>
       <div className="order-list">
        <ul>
            <Link to='/' className="link-page">
            <li>Home</li>
            </Link>

           <Link to='/acpages' className="link-page">
           <li>Ac</li>
           </Link>

           <Link to='/book' className="link-page">
           <li>Book</li>
           </Link>

           <Link to='/computerpage' className="link-page">
           <li>Computer</li>
           </Link>
           <Link to='/fridge' className="link-page">
           <li>Fridge</li>
           </Link>
           <Link to='/furniture' className="link-page">
           <li>Furniture</li>
           </Link>
           <Link to='/kitchen' className="link-page">
           <li>Kitchen</li>
           </Link>
           <Link to='/menwear' className="link-page">
           <li>Menwear</li>
           </Link>
           <Link to='/mobile' className="link-page">
           <li>Mobile</li>
           </Link>
           <Link to='/tv' className="link-page">
           <li>Tv</li>
           </Link>
           <Link to='/watch' className="link-page">
           <li>Watch</li>
           </Link>
            <Link to='/woman' className="link-page">
           <li>Womanwear</li>
           </Link>

        </ul>
       </div>
        </>
    )
}
export default NavBarComponent;