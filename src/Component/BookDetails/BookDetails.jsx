import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/toDB";


const BookDetails = () => {


    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
  
    const book = data.find((book) => book.bookId === id); 
    //we find specific books through the data
    const {image,bookId:currentbookId,review} = book;

    const handleMarkAsButton = (id)=>{


addToStoredReadList(id)

    }


    return (
        <div className="w-2/4 bg-white flex flex-col items-center justify-center mx-auto p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Book Details: {bookId}</h2>
            <img className="w-48 mb-4  rounded-lg" src={image} alt="Book Cover" />
            <p className="text-black text-center">Review: {review}</p>
        </div>
        <div className="m-10 flex gap-6">
            <button  onClick={()=>handleMarkAsButton(bookId)} className="btn bg-red-300  border-0 btn-xs sm:btn-sm md:btn-md lg:btn-lg">Mark As Read</button>
            <button className="btn  bg-red-300 border-0 btn-xs sm:btn-sm md:btn-md lg:btn-lg">Wish To Read</button>
        </div>
    </div>
    
    );
};

export default BookDetails;