import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {savePhoto, saveProfile} from "../../Redux/profileReducer";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} getProfile={props.getProfile} updateStatus={props.updateStatus}
                     status={props.status} getUserStatus={props.getUserStatus} authorizedUserId={props.authorizedUserId}
                     savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
        <MyPostsContainer addPostAC={props.addPostAC} />
    </div>
}

export default Profile;