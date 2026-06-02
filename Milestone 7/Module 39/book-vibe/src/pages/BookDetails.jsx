import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishlist } from "../utils/storage";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.bookId === parseInt(id));
        setBook(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!book) {
    return <div className="text-center py-20 text-3xl font-bold">Book Not Found</div>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="container mx-auto mt-10 p-4 lg:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-[#F3F3F3] rounded-3xl flex justify-center items-center p-12 lg:p-24">
          <img
            src={image}
            alt={bookName}
            className="w-full h-full object-contain shadow-2xl rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-bold font-playfair">{bookName}</h1>
          <p className="mt-4 text-xl font-medium text-base-content/80">By : {author}</p>
          <div className="divider my-4"></div>
          <p className="text-xl font-medium text-base-content/80">{category}</p>
          <div className="divider my-4"></div>
          <p className="text-base-content/70 flex-grow">
            <span className="font-bold text-base-content">Review : </span>
            {review}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="font-bold">Tag</span>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="divider my-6"></div>
          
          <div className="grid grid-cols-2 gap-y-3 max-w-sm mb-8">
            <span className="text-base-content/70">Number of Pages:</span>
            <span className="font-bold">{totalPages}</span>
            <span className="text-base-content/70">Publisher:</span>
            <span className="font-bold">{publisher}</span>
            <span className="text-base-content/70">Year of Publishing:</span>
            <span className="font-bold">{yearOfPublishing}</span>
            <span className="text-base-content/70">Rating:</span>
            <span className="font-bold">{rating}</span>
          </div>

          <div className="flex gap-4">
            <button 
                onClick={() => addToStoredReadList(parseInt(id))}
                className="btn btn-outline px-8 font-bold border-base-300 hover:bg-primary hover:border-primary">
              Read
            </button>
            <button 
                onClick={() => addToStoredWishlist(parseInt(id))}
                className="btn btn-secondary px-8 font-bold text-white">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
