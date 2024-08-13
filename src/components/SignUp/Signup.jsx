import React from "react";
import img from "../../assets/wishguard/page-2.png";
const Signup = ({ setPage }) => {
  return (
    <div className="signup">
      <section className="signup-first">
        <section className="signup-first-heading">
          <h2>Join WishGuard AI</h2>
          <p>Generative AI for conversion augmentation</p>
        </section>
        <section className="section-first-fields">
          <div className="fields">
            <label htmlFor=""> User Name</label>
            <input type="text" placeholder="Enter the user name details" />
          </div>
          <div className="fields">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="fields">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button>SIGN UP</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setPage("login")}>Login</span>
          </p>
          <p>
            By Continuing,you agreeto Wish Guard's{" "}
            <span>Term of Service,Privacy policy and Cookie </span>{" "}
          </p>
        </section>
      </section>
      <section className="signup-second">
        <img src={img} alt="" />
      </section>
    </div>
  );
};

export default Signup;
