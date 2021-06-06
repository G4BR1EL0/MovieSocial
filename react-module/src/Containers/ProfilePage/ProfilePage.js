import React from "react";
import Profile from "../../Components/Profile/Profile";
import { useSelector } from "react-redux";
import ValorationsBox from "../../Components/ValorationsBox/ValorationsBox";

const ProfilePage = () => {
    const user = useSelector(state => state.user);

    return(
        <div>
            <Profile user={user}/>
            <ValorationsBox userId={user._id}/>
        </div>
           
    )
}

export default ProfilePage;