import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const{name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value,
    });
  };
//working but not performrd
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", formData).then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        console.log("login successful");
        setError(''); // Reset error on success
        setSuccess(true);
        navigate('/adminDashoboard');
      });
    } catch (err) {
      console.error("Registration failed", err.response.data);
      setError(err.response.data.message); // Set error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="modern-form">
        <label>
          email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: 'red' }}>{success}</p>}
    </div>
  );
}

export default Login;
