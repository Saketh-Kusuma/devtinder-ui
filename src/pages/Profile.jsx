import { Activity } from "react";
import EditProfileForm from "../components/EditProfileForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  
  // Handle the case when user data is not yet loaded
  if (user === null) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  return (
    <Activity mode={user === null ? "hidden" : "visible"}>
      <div className="my-10">
        <EditProfileForm user={user} />
      </div>
    </Activity>
  );
};

export default Profile;