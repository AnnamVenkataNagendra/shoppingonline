
import { booksData } from "../Date/Bookdata";


function BookStoreDate()
{
   
    const book="Book Component"

    return(
        <>
        <h2>{book}</h2>
    <div className="ac-date">
        {
            booksData.map((add)=>{
                return(
                  <>
                    <div className="data-ac">
                        <img src={add.image}></img>
                       
                        </div>
        
                  </>
                )
            })
        }

    </div>
        </>
    )

}
export default BookStoreDate;