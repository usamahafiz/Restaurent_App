import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SellerDashboard from './pages/Dashboard/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard/BuyerDashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AccessDenied from './pages/Dashboard/AccessDenied';
import PrivateRoute from './components/PrivateRoute';
import Homepage from './pages/Frontend/Homepage';
import PageNotFound from './pages/PageNotFound';
import './App.scss';
import Footer from './components/Footer/Footer';
import About from './pages/Frontend/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Frontend/Contact';
import Header from './components/Header/Header';
// import Navbar from './components/Header/Navbar';
import Cart from './pages/Frontend/Cart';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishContext';
import Order from './pages/Frontend/Order';
import AddProduct from './pages/Dashboard/addProduct';
import ManageProduct from './pages/Dashboard/ManageProduct';
import Earning from './pages/Dashboard/Earning';
import Orders from './pages/Dashboard/Orders';
import SellerHeader from './components/Header/SellerHeader';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Wishlist from './pages/Frontend/Wishlist';


const AppContent = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  // Check if the current path is either "/login" or "/register"
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

  // Redirect to homepage if user is logged in and tries to access login or register page
  if (currentUser && (location.pathname === '/login' || location.pathname === '/register')) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* Render specific headers based on the route */}
      {!hideHeaderFooter && (
        location.pathname.startsWith('/seller-dashboard') || 
        location.pathname.startsWith('/add-product') || 
        location.pathname.startsWith('/manage-product') || 
        location.pathname.startsWith('/earning') || 
        location.pathname.startsWith('/my-orders') ? (
          <>
         
            <SellerHeader />
          </>
        ) : (
          <>
        
            <Header /> 
          </>
        )
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/singleProduct/:productId" element={<SingleProduct/>} /> 
        <Route path="/seller-dashboard" element={<PrivateRoute element={<SellerDashboard />} />} />
        <Route path="/add-product" element={<PrivateRoute element={<AddProduct />} />} />
        <Route path="/manage-product" element={<PrivateRoute element={<ManageProduct />} />} />
        <Route path="/earning" element={<PrivateRoute element={<Earning />} />} />
        <Route path="/my-orders" element={<PrivateRoute element={<Orders />} />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
        <Router>
          <AppContent />
        </Router>
      </WishlistProvider>
      </CartProvider>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;














// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './contexts/AuthContext';
// import SellerDashboard from './pages/SellerDashboard';
// import BuyerDashboard from './pages/BuyerDashboard';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AccessDenied from './pages/AccessDenied';
// import PrivateRoute from './components/PrivateRoute';
// import Homepage from './pages/Homepage';
// import PageNotFound from './pages/PageNotFound';
// import './App.scss';
// import Footer from './components/Footer/Footer';
// import About from './pages/About';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Contact from './pages/Contact';
// import Header from './components/Header/Header';
// import Navbar from './components/Header/Navbar';
// import Cart from './pages/Cart';
// import { CartProvider } from './contexts/CartContext';
// import Order from './pages/Order';
// import AddProduct from './pages/Dashboard/addProduct';
// import ManageProducts from './pages/Dashboard/ManageProduct';
// import Earnings from './pages/Dashboard/Earning';
// import Orders from './pages/Dashboard/Orders';
// import SellerHeader from './components/Header/SellerHeader';
// // import SingleProduct from './components/SingleProduct/SingleProduct';


// const AppContent = () => {
//   const location = useLocation();
//   const { currentUser } = useAuth();

//   // Check if the current path is either "/login" or "/register"
//   const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

//   // Redirect to homepage if user is logged in and tries to access login or register page
//   if (currentUser && (location.pathname === '/login' || location.pathname === '/register')) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <>
//       {/* Render specific headers based on the route */}
//       {!hideHeaderFooter && (
//         location.pathname.startsWith('/seller-dashboard') || 
//         location.pathname.startsWith('/add-product') || 
//         location.pathname.startsWith('/manage-products') || 
//         location.pathname.startsWith('/earnings') || 
//         location.pathname.startsWith('/my-orders') ? (
//           <>
//             <Navbar />
//             <SellerHeader />
//           </>
//         ) : (
//           <>
//             <Navbar />
//             <Header />
//           </>
//         )
//       )}

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/shop" element={<BuyerDashboard />} />
//         {/* <Route path="/singleProduct/:productId" element={<SingleProduct/>} />  */}

//         <Route path="/seller-dashboard" element={<PrivateRoute element={<SellerDashboard />} />} />
//         <Route path="/add-product" element={<PrivateRoute element={<AddProduct />} />} />
//         <Route path="/manage-products" element={<PrivateRoute element={<ManageProducts />} />} />
//         <Route path="/earnings" element={<PrivateRoute element={<Earnings />} />} />
//         <Route path="/my-orders" element={<PrivateRoute element={<Orders />} />} />
//         <Route path="/access-denied" element={<AccessDenied />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>

//       {!hideHeaderFooter && <Footer />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <AppContent />
//         </Router>
//       </CartProvider>
//       <ToastContainer />
//     </AuthProvider>
//   );
// };

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext'; 
// import SellerDashboard from './pages/SellerDashboard';
// import BuyerDashboard from './pages/BuyerDashboard'; 
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AccessDenied from './pages/AccessDenied'; 
// import PrivateRoute from './components/PrivateRoute'; 
// import Homepage from './pages/Homepage'; 
// import PageNotFound from './pages/PageNotFound'; 
// import './App.scss';
// import Footer from './components/Footer/Footer';
// import About from './pages/About'; 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Contact from './pages/Contact';
// import Header from './components/Header/Header';
// import Navbar from './components/Header/Navbar';
// import Cart from './pages/Cart';
// import { CartProvider } from './contexts/CartContext';

// const App = () => {
//   return (
//     <> 
//     <AuthProvider> 
//       <CartProvider>
//       <Router>
//         <Navbar/>
//         <Header/>
//         <Routes>
//           <Route path="/login" element={<Login />}/>
//           <Route path="/" element={<Homepage />}/>
//           <Route path="/about" element={<About />}/>
//           <Route path="/contact" element={<Contact/>}/>
//           <Route path="/cart" element={<Cart/>}/>
//           <Route path="/register" element={<Register />} />
//           <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
//           <Route path="/seller-dashboard" element={<PrivateRoute element={<SellerDashboard />} />} />
//           <Route path="/access-denied" element={<AccessDenied />} />
//           <Route path="*" element={<PageNotFound />} /> 
//         </Routes>
//         <Footer/>
//       </Router>
//       </CartProvider>
//     </AuthProvider>
//     <ToastContainer />
//     </>
//   );
// };

// export default App;
