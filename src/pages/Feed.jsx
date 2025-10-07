import axios from "axios";
import { constants } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "../components/UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  
  const getFeed = async () => {
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(`${constants.BASE_URL}/user/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getFeed();
  }, []);
  
  if (!feed || feed.length === 0) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div><h1>No new users found</h1>
        <h1>Comeback Again</h1></div>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className={feed ? "visible" : "hidden"}>
        <UserCard user={feed[0]} />
      </div>
    </div>
  );
};

export default Feed;
