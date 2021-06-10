import React from "react";
import Profile from "../../Components/Profile/Profile";
import { useSelector } from "react-redux";
import ValorationsBox from "../../Components/ValorationsBox/ValorationsBox";
import DivisionTitle from '../../Components/DivisionTitle/DivisionTitle.js';
const ProfilePage = () => {
    const user = useSelector(state => state.user);

    return(
        <div>
            <Profile user={user}/>
            <DivisionTitle text="My valuations"/>
            <ValorationsBox userId={user._id}/>
        </div>
           
    )
}

export default ProfilePage;