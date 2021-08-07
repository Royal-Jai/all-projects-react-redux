import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {getUserData, deleteUserData} from '../redux/actionUser'
function HomeCom() {
    const {users} = useSelector(state =>state.usersData)
    const dispatch = useDispatch()
    const history = useHistory();
    useEffect(() => {
        dispatch(getUserData())
    })
    const handlerSubmit = (id) =>{
       if(window.confirm('Ary Sure you want delete!!')){
           dispatch(deleteUserData(id))
       }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-4">
                            <div className="text-center">
                                <button className="btn-primary" onClick={() =>history.push('./adduser')}>AddUser</button>
                            </div>
                                       <div className="table-responsive mt-4">
                                        <table className="table table-bordered">
                                        <thead className="thead-dark text-center">
                                            <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {
                         users && users.map(dataget =>{
                               const{name, address, email, contact, id} = dataget
                               return(
                                   <>
                                            <tr key={id}>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{contact}</td>
                                            <td>{address}</td>
                                            <td>
                                                <button className="btn-secondary" onClick={() => history.push(`/edituser/${id}`)} style={{marginRight:"5px"}}>Edit</button>
                                                <button className="btn-warning" onClick={() => handlerSubmit(id)}>Delete</button>
                                            </td>
                                            </tr>
                                            </>
                               )
                           }) 
                        }
                                        </tbody>
                                        </table>
                                    </div>
 

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCom
