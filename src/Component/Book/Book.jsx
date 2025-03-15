import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,author,bookName,image,tags,category} = book;
    return (
       <Link to = {`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-xl">
        <figure className="bg-slate-800 p-8 rounded-xl">
          <img className="h-[140px]"
            src={image}
            alt="bookname" />

            
        </figure>
        <div className="card-body">
          <div className="  flex  justify-between gap-4">
            {
              tags.map((tag,index)=><button key={index} className="btn btn-xs">{tags}</button>)
            }
          </div>
          <h2 className="card-title">
           {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>


          <p>By:{author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline"><div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-5"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div></div>
          </div>
        </div>
      </div>
       </Link>
    );
};

export default Book;