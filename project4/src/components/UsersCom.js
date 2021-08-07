import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {fetchUserData} from '../redux/action/dataAction'

function UsersCom({userDataGet, fetchUserData}) {

    useEffect(() => {
        fetchUserData()
    },[])

    return userDataGet.isLoading ?
     (<h2>Loading</h2>) : userDataGet.error ? 
     (<h2>{userDataGet.error}</h2>): 
     (<div>
         <h2>User List</h2>
         <div>
             {
                userDataGet && userDataGet.user && userDataGet.user.map(usera =>
                    <p>{usera.title}</p>
                ) 
             }
         </div>
     </div>)
   
}

const mapStateToProps = (state) => {
    return{
        userDataGet: state.user
    }
}
 
const mapDispatchToProps = (dispatch) => {
     return{
         dataDispatch: () => dispatch(fetchUserData())
     }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersCom) 
