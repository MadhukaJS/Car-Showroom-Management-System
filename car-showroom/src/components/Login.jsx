import React from 'react';
import './login.css'

const Login = () => {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Icon */}
        <div className="fadeIn first">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6E1B5PKB6rvUktE90aKaIREmarD9Grxg4g&usqp=CAU" id="icon" alt="User Icon" />
        </div>

        {/* Login Form */}
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        {/* Rsign up */}
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
