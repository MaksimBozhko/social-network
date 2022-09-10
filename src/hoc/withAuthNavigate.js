import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthNavigate = (Component) => {
    let NavigateComponent = (props) => {
        if(!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props} />
    }

    return connect(mapStateToProps, {})(NavigateComponent)
}