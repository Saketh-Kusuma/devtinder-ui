import axios from "axios";
import { useDispatch } from "react-redux";
import { constants } from "../utils/constants";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, age, gender, photoUrl, about } = user;
  const handelSendRequest = async (status,userId) => {
    try{
      const res  = await axios.post(`${constants.BASE_URL}/request/send/${status}/${userId}`,{},{withCredentials:true});
      console.log(res.data);
      dispatch(removeFeed(user._id))
    }
    catch (error) {
      console.log(error);

  };
}
  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure className="py-2">
        <img src={photoUrl || constants.DEFAULT_PHOTO} alt="User Profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <div>
          <p>{`${age}, ${gender}`}</p>
        </div>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary" onClick={() => handelSendRequest("ignored",user._id)}>Ignore</button>
          <button className="btn btn-primary" onClick={() => handelSendRequest("interested",user._id)}>Intrested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
