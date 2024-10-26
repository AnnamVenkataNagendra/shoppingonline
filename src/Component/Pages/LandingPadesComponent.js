import AcStoraData from "../StoreDate/Ac";
import BookStoreDate from "../StoreDate/Book";
import ComputerStoreDate from "../StoreDate/Computer";
import FridgeStoreDate from "../StoreDate/Fridge";
import FurnitureStoreDate from "../StoreDate/Furniture";
import KitchenStoreDate from "../StoreDate/Kitchen";
import MenStoreDate from "../StoreDate/Men";
import MobileStoreDate from "../StoreDate/Mobile";
import NavBarComponent from "../StoreDate/NavbarComponent";
import TvStoreDate from "../StoreDate/Tv";
import WatchStoreDate from "../StoreDate/Watch";
import WomanStoreDate from "../StoreDate/Woman";

function Landingpages()
{
    return(
        <>
     <NavBarComponent />
     <AcStoraData/>
     <BookStoreDate />
     <ComputerStoreDate />
     <FridgeStoreDate />
     <FurnitureStoreDate />
     <KitchenStoreDate />
     <MenStoreDate/>
     <MobileStoreDate />
     <TvStoreDate/>
     <WatchStoreDate/>
     <WomanStoreDate />
        </>
    )
}

export default Landingpages;