import React, {useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../assets/images/user.png'
import {useParams} from "react-router-dom";
import ProfileStatus from "./ProfileStatus";
import {useForm} from "react-hook-form";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    let {userId} = useParams()
    const id = userId
    if(!userId) { userId = props.authorizedUserId;}
    useEffect(() => {
        props.getUserStatus(userId)
        props.getProfile(userId)
    }, [userId])

    if(!props.profile) {
        return <Preloader/>
    }

    let onPhotoChange = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let onSubmit = (formData) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return <div className={s.description}>
        <div>
            <img src={props.profile.photos.large || userPhoto} className={s.photo}/>
            {!id && <input type={"file"} onChange={onPhotoChange}/>}
            <div>
                <ProfileStatus  updateStatus={props.updateStatus} status={props.status} />
            </div>
            {editMode
                ? <ProfileDataForm errorMessage={props.errorMessage}  onSubmit={onSubmit} profile={props.profile} saveProfile={props.saveProfile}
                                          goToData={() => {setEditMode(false)}}/>
                : <ProfileData profile={props.profile} userId={id} goToEditMode={() => {setEditMode(true)}}/>}

        </div>
    </div>
}
let Contact =({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>
}

let ProfileData = (props) => {
    return <div>
        {!props.userId && <button onClick={props.goToEditMode}>edit</button>}
        <div>
            <b>FullName</b>: {props.profile.fullName}
        </div>
        <div>
            <b>userId</b>: {props.profile.userId}
        </div>
        <div>
            <b>lookingForAJob</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>AboutMe</b>: {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            if (props.profile.contacts[key] !== '') return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}
        </div>
    </div>
}

let ProfileDataForm = (props) => {
    const {
        register,
        formState:{errors, isValid},
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            AboutMe: "dont touch this Field",
            "contacts.facebook": props.profile.contacts.facebook,
            "contacts.youtube": props.profile.contacts.youtube,
            "contacts.vk": props.profile.contacts.vk,
            "contacts.instagram": props.profile.contacts.instagram,
            "contacts.website": props.profile.contacts.website,
            "contacts.github": props.profile.contacts.github,

        }
    })

    return <div>
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <b>FullName</b>: <input {...register('fullName', {
                    required: 'required'
            })}/>
            </div>
            {errors.fullName && <div>{errors.fullName.message}</div>}
            <div>
                <b>lookingForAJob</b>: <input type={"checkbox"} {...register('lookingForAJob')}/>
            </div>
            <div>
                <b>AboutMe</b>: <textarea  {...register('lookingForAJobDescription')}  />
            </div>
            <div>
                <textarea  {...register('AboutMe')} disabled={true}/>
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div>
                    <b>{key}: <input {...register('contacts.' + key, {/*{
                        pattern: {
                            value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                            message: 'invalid url'
                        }
                    }*/})} placeholder={key}/> </b>

                </div>
            })}
            </div>
            <button type="submit">ok</button>
        </form>

    </div>
}

export default ProfileInfo;