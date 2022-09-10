import React, { Suspense } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import {initializedApp} from "./Redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const App = (props) => {
    useEffect(() => {
        props.initializedApp()
    })

    if(!props.initialized) {
        return <Preloader/>
    }

    return <BrowserRouter>
        <Suspense fallback={<Preloader/>}>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<ProfileContainer  />} />
                    <Route path='/profile/:userId' element={<ProfileContainer  />} />
                    <Route path='/profile/' element={<ProfileContainer  />} />
                    <Route path='/dialogs' element={<DialogsContainer  />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </div>
        </Suspense>
    </BrowserRouter>
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedApp})(App);
