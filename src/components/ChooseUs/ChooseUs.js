import React from 'react'
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { MdBookOnline } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const ChooseUs =() => {

    const fontFamily = { fontFamily: "Arial, sans-serif" };
    return (
    <div className='mt-4'>
         {/* <h2 className='text-center mt-4 fw-bold'>Why Choose us?</h2> */}
        <section className="project container mt-4 px-3" id="services">

          <div className="row text-align-center mt-4 mb-5" >
            <div className="col-lg-3 mt-5">
           
                  <div className="icon">
                    <MdShoppingCartCheckout />
                  </div>
                  <h4 className="card-title text-center mt-3 fw-bold" style={fontFamily}> Free Delivery</h4>
                  <p className='text-center mt-4'>International Delivery available for <br/> all 
                    orders over $99</p>
              
            </div>

            <div className="col-lg-3 mt-5">
             
                  <div className="icon">
                  <BsCashCoin />
                    {/* <FcCustomerSupport /> */}
                  </div>
                  <h4 className="card-title text-center mt-3 fw-bold" style={fontFamily}>Cashback Reward</h4>
                  <p className='text-center mt-4'>Collect & Reedom on every order <br/> that you purchase.</p>

            </div>


            <div className="col-lg-3 mt-5 ">
           
                  <div className="icon">
                  <MdBookOnline />
                    {/* <MdPayments /> */}
                  </div>
                  <h4 className="card-title text-center mt-3 fw-bold" style={fontFamily}>Secure Payments</h4>
                  <p className='text-center mt-4'>Guarantee 100% secure payments <br/> on our website.</p>


            </div>

            <div className="col-lg-3 mt-5">
             
             <div className="icon">
             <GiReturnArrow />
             </div>
             <h4 className="card-title text-center mt-3 fw-bold" style={fontFamily}>Free Global returns</h4>
             <p className='text-center mt-4'>
             Enjoy free global returns on every<br/> order.</p>

       </div>
          </div>

          

        </section>
      
    </div>
  )
}

export default ChooseUs;