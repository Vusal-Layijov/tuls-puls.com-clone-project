import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserBusinesses } from '../../store/business';
import MyDashboard from '../MyDashboard';
import './index.css';
import MyBookings from '../MyBookings';


function UserProfilePage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
  
    }, [dispatch, userId]);

    // useEffect(() => {
    //         // dispatch(getReviews());
    // }, [dispatch])


    const currentUser = useSelector(state => state.session.user)
     const userInfo = useSelector(state => state.session.user)
    // const businesses = useSelector((state) => Object.values(state.business.all_businesses))

    // const isOwner = currentUser?.id === userInfo.id

    if (!currentUser) {
        history.push('/')
    }
    return (
        <div className='maindiv'>

            <div>
                <h1>Welcome to {userInfo.username}'s Page</h1>
                <div class="profile-page-user-banner">
                    <div class="profile-page-user-icon-background" >
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <div class="profile-page-user-info">
                        <p>Username: {userInfo.username}</p>
                        <p>Email: {userInfo.email}</p>
                    </div>

                </div>
            </div>
            <div style={{display:'flex'}} >
                <div>
                    <h2>View {userInfo.username}'s Services</h2>
                    <MyDashboard services={userInfo.services} /> 
                </div>
                <div>
                    <MyBookings user={userInfo} />
                </div>
            </div>
        </div>
    )

}

export default UserProfilePage