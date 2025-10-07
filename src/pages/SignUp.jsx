import { Activity, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { constants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [emailId,setEmailID] = useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitProfile = async () => {
    try {
     const res =  await axios
        .post(
          `${constants.BASE_URL}/auth/signup`,
          {
            firstName,
            lastName,
            password,
            emailId,
            age,
            photoUrl,
          },
          { withCredentials: true }
        )
        setResponse(res.data);
        navigate("/profile");
        dispatch(addUser(res.data.data))
        setTimeout(()=>{setResponse(""),setError("")})
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="my-10">
      <Activity mode={error == "" ? "hidden" : "visible"}>
      
          <div className="flex justify-center">
            <div className="w-sm text-center alert alert-error">
            <span>{error}</span>
          </div>
          </div>
      </Activity>
      <Activity mode={response == "" ? "hidden" : "visible"}>
        <div className="flex justify-center">
          <div className="w-sm text-center alert alert-success">
            <span>{response}</span>
          </div>
          </div>
      </Activity>
      <div className="flex justify-center gap-10">
        <fieldset className="fieldset text-start bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <h1 className="text-center text-3xl font-bold ">Sign Up</h1>
          <label className="label text-start">First Name</label>
          <input
            type="text"
            className="input"
            placeholder="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label">Last Name</label>
          <input
            type="text"
            className="input"
            placeholder="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />
          
<label className="label text-start">Email</label>
          <input
            type="email"
            className="input"
            placeholder="email"
            onChange={(e) => setEmailID(e.target.value)}
          />
          <label className="label text-start">Password</label>
          <input
            type="password"
            className="input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label">Age</label>
          <input
            type="text"
            onChange={(e) => setAge(e.target.value)}
            className="input"
            placeholder="age"
          />

         
          <label className="label">Photo URL</label>
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input"
            placeholder="photo-url"
          />


          <button className="btn btn-primary mt-4" onClick={submitProfile}>
            SignUp
          </button>
          <div className="text-center text-[16px]"><p>Already a user? <Link to="/login" style={{textDecoration:"underline"}}>Login</Link></p></div>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
