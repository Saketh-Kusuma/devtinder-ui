import axios from "axios";
import { constants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestsSlice";

function RequestsCard({
  user, requesId
}) {
    const { firstName, lastName, age, gender, about, photoUrl } = user;
    const dispatch = useDispatch()
        const reviewAccepted = async (requesId) => {
        try{
            const res = await axios.post(`${constants.BASE_URL}/request/review/accepted/${requesId}`,{},{withCredentials:true})
            console.log(res.data)
            dispatch(removeRequest(requesId));
        }
        catch(err)
        {
            console.log(err)
        }
    }
    const reviewRejected = async (requesId) => {
        try{
            const res = await axios.post(`${constants.BASE_URL}/request/review/rejected/${requesId}`,{},{withCredentials:true})
            console.log(res.data)
            dispatch(removeRequest(requesId));

        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <div className="flex items-center justify-center my-2 p-2 md:w-1/2 md:p-0 overflow-y-hidden">
      <div className="card w-full min-w-xs flex flex-row bg-base-300 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
        {/* Image Section */}
        <figure className="relative aspect-square overflow-hidden">
          <img 
            src={photoUrl||constants.DEFAULT_PHOTO} 
            alt={`${firstName} ${lastName}`}
            className="w-sm md:w-full h-full md:h-50 object-cover hover:scale-105 transition-transform duration-500"
          />
        </figure>
        
        {/* Content Section */}
        <div className="card-body sm:w-sm p-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">
                {firstName} {lastName}
              </h2>
              {gender && (
                <div className="flex items-center gap-3 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {gender}
                  </span>
                  <span>•</span>
                  <span>{age} years old</span>
                </div>
              )}
            </div>
          </div>

         <div> <p className="text-sm leading-relaxed mb-4 line-clamp-3">
            {about}
          </p></div>
            <div className="flex gap-2">
                <button className="btn btn-primary" onClick={()=>reviewAccepted(requesId)}>Accept</button>
                <button className="btn btn-secondary" onClick={()=>reviewRejected(requesId)}>Ignore</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RequestsCard;