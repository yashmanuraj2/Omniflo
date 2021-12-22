import axios from "axios";
import { useRef ,useState} from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const[gender,setGender] = useState("")
    const phone = useRef();
  
  const history = useNavigate();

  const changeGender = (e) =>{

  setGender(e.target.value)

  }
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        name: username.current.value,
        email: email.current.value,
        password: password.current.value,
        gender : gender,
        phone : phone.current.value
      };
      try {
        await axios.post("/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Omniflow</h3>
          <span className="loginDesc">
           Payments app that keeps track of your money
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
            
            />
           
            <input
              placeholder="Phone"
              required
              ref={phone}
              className="loginInput"
              
              
            />


<p>Gender</p>
<select value="Gender" onChange ={changeGender}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>

          </form>
        </div>
      </div>
    </div>
  );
}