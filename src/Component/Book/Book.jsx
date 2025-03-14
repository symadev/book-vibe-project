

const Book = ({book}) => {
    const {author,bookName,image} = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-xl">
        <figure className="bg-slate-800 p-8 rounded-xl">
          <img className="h-[140px]"
            src={image}
            alt="bookname" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By:{author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default Book;