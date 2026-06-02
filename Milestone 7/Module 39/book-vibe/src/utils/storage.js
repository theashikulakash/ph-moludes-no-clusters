import { toast } from 'react-toastify';

export const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
}

export const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        toast.warn('Already added to Read list');
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast.success('Added to Read list');
        
        // Remove from wishlist if it exists there
        removeFromStoredWishlist(id, false);
    }
}

export const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wishlist');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
}

export const addToStoredWishlist = (id) => {
    const readList = getStoredReadList();
    const wishlist = getStoredWishlist();

    if (readList.includes(id)) {
        toast.error('You have already read this book!');
    } else if (wishlist.includes(id)) {
        toast.warn('Already in Wishlist');
    } else {
        wishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        toast.success('Added to Wishlist');
    }
}

export const removeFromStoredWishlist = (id, showToast = true) => {
    const wishlist = getStoredWishlist();
    const remaining = wishlist.filter(bookId => bookId !== id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    if (showToast && wishlist.length !== remaining.length) {
        toast.info('Removed from Wishlist');
    }
}
