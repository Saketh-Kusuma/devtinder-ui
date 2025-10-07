import axios from "axios";
import { Activity } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function HandleLogout() {
    axios
      .post("http://localhost:3000/auth/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
      });
    dispatch(removeUser());
    navigate("/login");
  }
  return (
    <div className="navbar bg-primary-200 shadow-lg/20">
      <div className="flex-1">
        <p onClick={() => navigate("/")} className="btn btn-ghost text-xl">
          💻 Devtinder
        </p>
      </div>
      <div className="flex gap-2 ">
        <Activity mode={user ? "visible" : "hidden"}>
          <div className="dropdown flex flex-row-reverse items-center gap-2 dropdown-bottom  mx-5">
            <p className="">{`Welcome ${user?.firstName}`}</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Profile" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className="justify-between"
                to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
               <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link
                  className="justify-between"
                to="/requests"
                >
                  Requests
                </Link>
              </li>
              <li>
                <p onClick={HandleLogout}>Logout</p>
              </li>
            </ul>
          </div>
        </Activity>
      </div>
    </div>
  );
};

export default Navbar;
