import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 border border-base-200 p-6 rounded-2xl transition hover:scale-105 hover:shadow-xl">
        <figure className="bg-[#F3F3F3] py-8 rounded-2xl h-[280px]">
          <img src={image} alt={bookName} className="h-full object-contain" />
        </figure>
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold line-clamp-1">{bookName}</h2>
          <p className="mt-2 text-base-content/70 font-medium">By : {author}</p>
          <div className="mt-auto pt-5 border-t border-dashed border-base-300 flex justify-between items-center text-base-content/70 font-medium">
            <span>{category}</span>
            <div className="flex items-center gap-2">
              <span>{rating}</span>
              <FaRegStar className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
