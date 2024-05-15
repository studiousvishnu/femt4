import { useState } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
const Page = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setValid(validateEmail(inputValue));
  };
  const handleSubmit = () => {
    console.log("Submitting...");
  };
  return (
    <div>
      <div className="container mt-5 mx-auto  ">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 bg-white rounded-5">
            <div className="row">
              <div className="left-container col-12 col-lg-7">
                <div className="img-container d-lg-none">
                  <img
                    className="img-fluid my-4 col-12 "
                    src="./src/Components/images/illustration-sign-up-desktop.svg"
                    alt=""
                  />
                </div>
                <div className="heading">
                  <h1 className=" fw-bold mt-5   p-3">Stay Updated !</h1>
                  <p className=" ps-4  ">
                    Join 60,000+ product managers receiving monthly updates on:
                  </p>
                </div>
                <div className="left-content-container">
                  <div className="left-container-content-1 d-flex align-items-start  ms-4">
                    <img
                      className="pt-1 pe-2"
                      src="./src/Components/images/icon-list.svg"
                      alt="tick"
                    />
                    <p>Product discovery and building what matters</p>
                  </div>
                  <div className="left-container-content-2 d-flex align-items-start  ms-4">
                    <img
                      className="pt-1 pe-2"
                      src="./src/Components/images/icon-list.svg"
                      alt="tick"
                    />
                    <p>Measuring to ensure updates are a success</p>
                  </div>
                  <div className="left-container-content-3 d-flex align-items-start  ms-4">
                    <img
                      className="pt-1 pe-2"
                      src="./src/Components/images/icon-list.svg"
                      alt="tick"
                    />
                    <p>And much more</p>
                  </div>
                </div>
                <div className="email-container mt-5 ms-4 ">
                  <div className="heading-data d-flex justify-content-between align-items-center">
                    <h6>Email address</h6>
                    {!valid && (
                      <p className="text-danger fw-bold">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  <input
                    className="email-text rounded-2 w-100 py-3  "
                    type="email"
                    value={email}
                    placeholder="www.abcd.com"
                    onChange={handleInputChange}
                    style={{
                      color: "#c38883",
                      border: "2px solid #c38883",
                      background: "#ffe7e8",
                    }}
                  />
                  <Link to="/Thankyou">
                    <button
                      onClick={handleSubmit}
                      disabled={!valid}
                      className=" sub-btn mt-3 btn bg-black text-white w-100 p-2 py-3 mb-5 "
                    >
                      Subscribe to monthly newsletter
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img-container d-none d-lg-block">
                  <img
                    className="img-fluid h-100 my-4 "
                    src="./src/Components/images/illustration-sign-up-desktop.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
