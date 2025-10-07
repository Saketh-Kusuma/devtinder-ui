import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { constants } from "../utils/constants";
import { addConnections } from "../utils/connectionsSlice";
import ConnectionCard from "../components/ConnectionsCard";

const Connections = () => {
  const [error,setError] = useState("");
  const dispatch = useDispatch();
  const connections = useSelector((store) => store?.connections);
const getConnections = async () => { 
  if(connections && connections.length > 0) return;
  try{
    const response = await axios.get(`${constants.BASE_URL}/user/connections`,{withCredentials:true});
    dispatch(addConnections(response?.data?.data))
  }catch(err)
  {
    setError(err.response.data)
  }
};
useEffect(()=>{getConnections()},[])
  return (
    <div className="min-h-svh  overflow-y-hidden ">
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl my-4 text-center font-bold underline">Connections</h1>
      {connections && connections.length > 0 ? (
        connections.map((connection) => (
          <ConnectionCard user={connection} key={connection._id} />
        ))
      ) : (
        <p>No connections found.</p>
      )}
    </div>
    </div>
  );
};
export default Connections;