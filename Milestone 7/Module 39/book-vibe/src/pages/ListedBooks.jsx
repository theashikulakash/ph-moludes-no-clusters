import { useEffect, useState } from "react";
import { getStoredReadList, getStoredWishlist } from "../utils/storage";
import { FaChevronDown } from "react-icons/fa";
import { LuUsers, LuFileText } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [displayRead, setDisplayRead] = useState([]);
    const [displayWishlist, setDisplayWishlist] = useState([]);
    const [activeTab, setActiveTab] = useState('read'); // 'read' or 'wishlist'
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        fetch("/books.json")
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
                const readIds = getStoredReadList();
                const wishlistIds = getStoredWishlist();

                const rBooks = data.filter(book => readIds.includes(book.bookId));
                const wBooks = data.filter(book => wishlistIds.includes(book.bookId));

                setReadBooks(rBooks);
                setWishlistBooks(wBooks);
                setDisplayRead(rBooks);
                setDisplayWishlist(wBooks);
            });
    }, []);

    useEffect(() => {
        const handleSort = (books) => {
            if (sortBy === 'Rating') {
                return [...books].sort((a, b) => b.rating - a.rating);
            } else if (sortBy === 'Pages') {
                return [...books].sort((a, b) => b.totalPages - a.totalPages);
            } else if (sortBy === 'Year') {
                return [...books].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            }
            return books;
        };

        setDisplayRead(handleSort(readBooks));
        setDisplayWishlist(handleSort(wishlistBooks));
    }, [sortBy, readBooks, wishlistBooks]);

    const BookListItem = ({ book }) => (
        <div className="card lg:card-side bg-base-100 border border-base-200 p-6 rounded-2xl mb-6 flex-col lg:flex-row gap-8">
            <figure className="bg-[#F3F3F3] p-8 rounded-2xl lg:w-60 shrink-0">
                <img src={book.image} alt={book.bookName} className="h-full object-contain" />
            </figure>
            <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-bold">{book.bookName}</h2>
                <p className="mt-2 text-base-content/80 font-medium">By : {book.author}</p>
                
                <div className="mt-4 flex flex-wrap items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-3">
                        <span className="font-bold">Tag</span>
                        <div className="flex gap-2">
                            {book.tags.map((tag, idx) => (
                                <span key={idx} className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium">#{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-base-content/70">
                        <MdOutlineLocationOn className="text-xl" />
                        <span>Year of Publishing: {book.yearOfPublishing}</span>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 lg:gap-6 text-base-content/70 pb-5 border-b border-base-200">
                    <div className="flex items-center gap-2">
                        <LuUsers className="text-xl" />
                        <span>Publisher: {book.publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuFileText className="text-xl" />
                        <span>Page {book.totalPages}</span>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 items-center">
                    <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-medium">Category: {book.category}</span>
                    <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-medium">Rating: {book.rating}</span>
                    <Link to={`/book/${book.bookId}`} className="btn btn-primary text-white rounded-full px-6 min-h-0 h-10">View Details</Link>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto py-8">
            <div className="bg-base-200 rounded-2xl py-8 text-center mb-8">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>

            <div className="flex justify-center mb-12">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-primary text-white px-8 gap-3">
                        {sortBy ? `Sort By: ${sortBy}` : 'Sort By'} <FaChevronDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                        <li><button onClick={() => setSortBy('Rating')}>Rating</button></li>
                        <li><button onClick={() => setSortBy('Pages')}>Number of pages</button></li>
                        <li><button onClick={() => setSortBy('Year')}>Publisher year</button></li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input 
                    type="radio" 
                    name="book_tabs" 
                    role="tab" 
                    className="tab text-lg" 
                    aria-label="Read Books" 
                    checked={activeTab === 'read'} 
                    onChange={() => setActiveTab('read')} 
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6 pt-10">
                    {displayRead.length > 0 ? (
                        displayRead.map(book => <BookListItem key={book.bookId} book={book} />)
                    ) : (
                        <div className="text-center py-20 text-xl opacity-50">No books found in Read list</div>
                    )}
                </div>

                <input 
                    type="radio" 
                    name="book_tabs" 
                    role="tab" 
                    className="tab text-lg" 
                    aria-label="Wishlist Books" 
                    checked={activeTab === 'wishlist'} 
                    onChange={() => setActiveTab('wishlist')} 
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6 pt-10">
                    {displayWishlist.length > 0 ? (
                        displayWishlist.map(book => <BookListItem key={book.bookId} book={book} />)
                    ) : (
                        <div className="text-center py-20 text-xl opacity-50">No books found in Wishlist</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
