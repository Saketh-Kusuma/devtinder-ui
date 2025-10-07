import axios from "axios";
import { Activity, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { constants } from "../utils/constants";
import Alert from "../components/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const loginSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post(
          `${constants.BASE_URL}/auth/login`,
          {
            emailId: email,
            password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          dispatch(addUser(res.data));
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col my-10 items-center justify-items-center">
      <Activity mode={error === "" ? "hidden" : "visible"}>
        <Alert err={error} />
      </Activity>
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body flex flex-col gap-y-10">
          <h2 className="text-3xl font-bold  card-title justify-center text-center">
            Login
          </h2>
          <form
            onSubmit={(e) => loginSubmit(e)}
            className="flex flex-col gap-10"
          >
            <label className="input validator">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mail@site.com"
                required
                value={email}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                required
                value={password}
                placeholder="Password"
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 6 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <div className="card-actions flex-col items-center justify-center">
              <button className="btn btn-primary">Login</button>
            <div cla><p>New User? <Link to="/signup" style={{textDecoration:"underline"}}>Signup</Link></p></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
