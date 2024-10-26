
import { Route, Routes } from 'react-router-dom';
import './App1.css';
import Landingpages from './Pages/LandingPadesComponent';
import AcpageComponent from './Pages/AcpageComponent';
import AcsingleComponent from './SingleData/AcsingleData';
import BookSinglePage from './Pages/BookpPagesComponent';
import BookSingelData from './SingleData/BookSingledata';
import ComputerPage from './Pages/ComputerPage';
import ComputerSingledata from './SingleData/ComputerSingle';
import FridgeSingelData from './SingleData/FridgeSingleData';
import FridgePage from './Pages/FridgePages';
import FurniturePages from './Pages/FurniturePages';
import FurnitureSingle from './SingleData/FurnitureSingledata';
import KitchenPages from './Pages/KitchenPages';
import KitchenSingle from './SingleData/KitchenSingle';
import MenwearPages from './Pages/MenwearPages';
import MenwearSingle from './SingleData/MenwearSingle';
import MobilePages from './Pages/MobilePages';
import MobileSingle from './SingleData/MobileSingle';
import TvPages from './Pages/TvPages';
import WatchPages from './Pages/WatchsPages';
import WomanPages from './Pages/WomanPages';
import TvSingle from './SingleData/TvSingls';
import WomanSingle from './SingleData/WomanSingle';
import WatchSingle from './SingleData/WatchesSingle';
import FileNotFoundComponent from './FileNotFound';
import UserCart from './UserCart';


 function  App1()
 {
    return(
        <>
        <Routes>
            <Route path='/' element={<Landingpages />}></Route>
            <Route path='/acpages' element={<AcpageComponent />}></Route>
            <Route path='/acsingle/:id' element={<AcsingleComponent/>}/>
            <Route path='/book' element={<BookSinglePage />}/>aa
            <Route path='/booksingle/:id' element={<BookSingelData/>}/>
            <Route path='/computerpage' element={<ComputerPage/>}/>
            <Route path='/com/:id' element={<ComputerSingledata />}></Route>
            <Route path='/fridge' element={< FridgePage/>}></Route>
            <Route path='/fridge/:id' element={<FridgeSingelData />}></Route>
            <Route path='/furniture' element={<FurniturePages />}></Route>
            <Route path='/furniture/:id' element={< FurnitureSingle/>}></Route>
            <Route path='/kitchen' element={<KitchenPages/>}></Route>
            <Route path='/kitchen/:id' element={< KitchenSingle/>}></Route>
            <Route path='/menwear' element={< MenwearPages/>}></Route>
            <Route path='/men/:id' element={<MenwearSingle/>}></Route>
            <Route path='/mobile' element={<MobilePages/>}></Route>
            <Route path='/mobile/:id' element={<MobileSingle/>}></Route>
            <Route path='/tv' element={<TvPages/>}></Route>
            <Route path='/tv/:id' element={<TvSingle/>}></Route>
            <Route path='/tv' element={<TvPages/>}></Route>
            <Route path='/watch' element={<WatchPages/>}></Route>
            <Route path='/watch/:id' element={<WatchSingle/>}></Route>
            <Route path='/woman' element={< WomanPages/>}></Route>
            <Route path='/woman/:id' element={< WomanSingle/>}></Route>
            <Route path='/cart' element={<UserCart />}></Route>
           <Route path='*' element={<FileNotFoundComponent />}></Route>
        </Routes>
        </>
    )
 }
 export default App1;