import React from "react";
import {useForm} from "react-hook-form";
import {login} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";

let Login = (props) => {
    const {
        register,
        formState: {errors, isValid},
        reset,
        handleSubmit
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        props.login(data.email, data.password)
        reset()
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register('email', {
                        required: 'Field is required',
                        minLength: {
                            value: 5,
                            message: 'min length 5 symbols'
                        }
                    })} placeholder={'Email'}/>
                <div style={{color: "red"}}>{errors?.email && <p>{errors?.email?.message}</p>} </div>
            </div>
            <div>
                <input {...register('password')} placeholder={'Password'}/>
            </div>
            <input type="submit" disabled={!isValid}/>
        </form>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)