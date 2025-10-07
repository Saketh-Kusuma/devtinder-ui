import { Activity, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { constants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfileForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const dispatch = useDispatch();
  const submitProfile = async () => {
    try {
      await axios
        .patch(
          `${constants.BASE_URL}/profile/edit`,
          {
            firstName,
            lastName,
            age,
            gender,
            photoUrl,
            about,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setResponse(res.data.message);
          dispatch(addUser(res.data.data));
        });

        setTimeout(()=>{setResponse(""),setError("")})
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <>
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
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
          <legend className="fieldset-legend">Edit Profile</legend>

          <label className="label">First Name</label>
          <input
            value={firstName || ""}
            type="text"
            className="input"
            placeholder="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label">Last Name</label>
          <input
            value={lastName || ""}
            type="text"
            className="input"
            placeholder="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="label">Age</label>
          <input
            type="text"
            value={age || ""}
            onChange={(e) => setAge(e.target.value)}
            className="input"
            placeholder="age"
          />

          <label className="label">Gender</label>
          <input
            type="text"
            value={gender || ""}
            className="input"
            placeholder="gender"
            onChange={(e) => setGender(e.target.value)}
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            value={photoUrl || constants.DEFAULT_PHOTO}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input"
            placeholder="photo-url"
          />

          <label className="label">About</label>
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="input"
            placeholder="about"
          />

          <button className="btn btn-primary mt-4" onClick={submitProfile}>
            Save Profile
          </button>
        </fieldset>
        <div>
          <UserCard
            user={{ firstName, lastName, age, gender, photoUrl, about }}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfileForm;
