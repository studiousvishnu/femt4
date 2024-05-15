import "./Thankyou.css";
import { Link } from "react-router-dom";


const Thankyou = () => {
  return (
    <div>
      <div className="container  ">
        <div className="row      ">
          <div className="thankyou-container bg-white col-lg-5 ps-5 rounded-3  mx-auto mt-5 ">
            <img
              className="pe-2 mt-4"
              src="./src/Components/images/icon-list.svg"
              alt="tick"
              style={{ height: "50px" }}
            />
           <div className="thankyou-content-container">
           <h1 className="mt-5 col-lg-10">Thanks for Subscribing</h1>
            <p className=" pe-4">
              A confirmation email has been sent to <span className="fw-bold">ash@loremcompany.com.</span> Please
              open it and click the button inside to confirm your subscription.
            </p>
           </div>

           <div className="dimiss-msg pe-5 mb-4">
           <Link to="/">
 <button className="btn dismiss-btn bg-black  text-white w-100 py-3">Dismiss message </button></Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
