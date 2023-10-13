import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const fetchUsersDetails = async (id) => {
  try {
    const user = await (await axios.get(`http://localhost:3000/user-detail/${id}`));
    return user.data;
  } catch (error) {
    console.log(error);
  }
};

function UserDetails() {
  const { id } = useParams();
  const { data:user,isLoading,error } = useQuery(["user-details", id], ()=> fetchUsersDetails(id));

  if(isLoading) {
    return <h1 className="text-center">Loading..</h1>
  }

  if(error){
    return <h1 className="text-center">{error.message}</h1>
  }

  return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-start-1">
                    <h1 className="text-3xl font-extrabold">{ user._id }</h1>
                </div>
                <div className="col-start-2 col-span-2 text-center">
                    <h1 className="text-2xl font-extrabold">{ user.nickname}</h1>
                    <p className="text-xl text-gray-500">{ user.email}</p>
                </div>
            </div>
        </div>
    );
}
export default UserDetails;
