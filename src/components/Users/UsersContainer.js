import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
                      followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

const mapStateToProps = (state) => ({
    users: getUsersSelector(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
})

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers})(UsersContainer)


/*
const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setUsersTotalCount: (totalCount) => {
        dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (totalCount) => {
        dispatch(toggleIsFetchingAC(totalCount))
    }
})*/
