import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }
    return <div>
        <b>status</b>: {!editMode
            ?<span onDoubleClick={activateEditMode}>{props.status || '--------'}</span>
            :<input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        }

    </div>
}

export default ProfileStatus;