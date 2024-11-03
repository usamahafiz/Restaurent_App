import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('wishlist');
    if (data) setWishlist(JSON.parse(data));
  }, []);
 
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);




// import { createContext, useContext, useEffect, useState } from "react";

// const WhislistContext = createContext();

// export const WhislistProvider = ({ children }) => {
//   const [whislist, setwhislist] = useState([]);

//   useEffect(() => {
//     const data = localStorage.getItem('whislist');
//     if (data) setwhislist(JSON.parse(data));
//   }, []);
 
//   return (
//     <WhislistContext.Provider value={{ whislist }}>
//       {children}
//     </WhislistContext.Provider>
//   );
// };
 

// export const useWhislist = () => useContext(WhislistContext);