import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {editUserData, updateUserData} from '../redux/actionUser'
const EditCom = () => {
    const [state, setState] = useState({
        name:"",
        email:"",
        contact:"",
        address:""
    })
    const {id} = useParams()
    const [error, setError] = useState('')
    const {user} = useSelector(state => state.usersData)
    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({
            ...state,
            [name] : value
        })
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if(!name || !email || !contact || !address){
            setError('please submite correct answer!!!')
        }
        else{
            dispatch(updateUserData(state, id));
            history.push('/');
            setError('data not post')
        }
    }
    const {name, email, contact, address} = state
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(editUserData(id))
    },[])
    useEffect(() =>{
      if(user){
        setState({...user})
      }
    }, [user]);
   
    return (
        <div>
           <div className="conatiner">
               <div className="row mt-4">
                   <div className="col-lg-2"></div>
                   <div className="col-lg-8">
                       <div className="mb-4">
                           <button className="btn-info"
                           onClick={()=>history.push('/')}>Go Back</button>
                       </div>
                       {
                           error && <h4 style={{color:"red"}}>{error}</h4>
                       }
                       <form onSubmit={handleSubmit}>
                           <input type="text" name="name" value={name || ""} onChange={handleInputChange} /><br/><br/>
                           <input type="email" name="email" value={email || ""} onChange={handleInputChange} /><br/><br/>
                           <input type="text" name="contact" value={contact || ""} onChange={handleInputChange} /><br/><br/>
                           <input type="text" name="address" value={address || ""} onChange={handleInputChange} /><br/><br/>
                           <input type="submit" value="Update" />
                       </form>
                   </div>
                   <div className="col-lg-2"></div>
               </div>
           </div>
        </div>
    )
}

export default EditCom
