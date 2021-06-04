import React from "react";
import Profile from "../../Components/Profile/Profile";
import { useSelector } from "react-redux";



const ProfilePage = () => {
    const user = useSelector(state => state.user);
    return(
        <div>
            <Profile user={user}/>
        </div>
           
    )
}

export default ProfilePage;