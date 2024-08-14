import React from "react";
import img from "../../assets/wishguard/page-2.png";
import "./Signup.scss";
const Signup = ({ setPage, page }) => {
  return (
    <div className="signup">
      <section className="signup-this">
        <article className="signup-this-art">
          <section className="signup-this-art--heading">
            <h2>Join WishGuard AI</h2>
            <p>Generative AI for conversion augmentation</p>
          </section>
          <section className="signup-this-art--fields">
            {page === "login" ? (
              <></>
            ) : (
              <div className="fields">
                <label htmlFor=""> User Name</label>
                <input type="text" placeholder="Enter the user name details" />
              </div>
            )}
            <div className="fields">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter Email" />
            </div>
            <div className="fields">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
            {page === "sign-up" ? (
              <button className="fields signupbutton">SIGN UP</button>
            ) : (
              <button className="fields signupbutton">Login</button>
            )}
            {page === "sign-up" ? (
              <p className="fields-account">
                Already have an account?{" "}
                <span onClick={() => setPage("login")}>Login</span>
              </p>
            ) : (
              <p className="fields-account">
                Don't have an account?{" "}
                <span onClick={() => setPage("sign-up")}>Sign-up</span>
              </p>
            )}
            <p className="fields-terms">
              By Continuing,you agreeto Wish Guard's{" "}
              <span>Term of Service,Privacy policy and Cookie </span>{" "}
            </p>
          </section>
        </article>
      </section>
      <section className="signup-second">
        <img src={img} alt="" />
      </section>
    </div>
  );
};

export default Signup;
