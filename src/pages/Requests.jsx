import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { constants } from "../utils/constants";
import { useEffect } from "react";
import { addRequest } from "../utils/requestsSlice";
import RequestsCard from "../components/RequestsCard";

const Requests = () => {
    const requests = useSelector((state) => state.requests)
    const dispatch = useDispatch();

    const getRequests = async () => {
        if (requests && requests.length > 0) return;
        try{
            const res = await axios.get(`${constants.BASE_URL}/user/requests/received`,{withCredentials:true})
            dispatch(addRequest(res.data.data));
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getRequests()
    },[])
    return (
         <div className="min-h-svh  overflow-y-hidden ">
         <div className="flex flex-col items-center justify-center">

            <h1 className="text-3xl my-4 text-center font-bold underline">Requests</h1>
            {requests && requests.length > 0 ? (requests.map((request,index) => {
                const {_id,firstName,lastName,age,gender,photoUrl,about} = request.fromUserId
                return (
                   
                    <RequestsCard requesId={request._id} user={{firstName,lastName,age,gender,photoUrl,about}} key={_id}  />
                );
            })):(<div>No Requests</div>)}
        </div>
        </div>
    )
}
export default Requests
