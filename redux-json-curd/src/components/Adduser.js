import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {postUserData} from '../redux/actionUser'
const Adduser = () => {
    const [state, setState] = useState({
        name:"",
        email:"",
        contact:"",
        address:""
    })
    const [error, setError] = useState('')

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
            dispatch(postUserData(state));
            history.push('/');
            setError('data not post')
        }
    }
    const {name, email, contact, address} = state
    const history = useHistory()
    const dispatch = useDispatch()
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
                           <input type="text" name="name" value={name} onChange={handleInputChange} /><br/><br/>
                           <input type="email" name="email" value={email} onChange={handleInputChange} /><br/><br/>
                           <input type="text" name="contact" value={contact} onChange={handleInputChange} /><br/><br/>
                           <input type="text" name="address" value={address} onChange={handleInputChange} /><br/><br/>
                           <input type="submit" value="Submit" />
                       </form>
                   </div>
                   <div className="col-lg-2"></div>
               </div>
           </div>
        </div>
    )
}

export default Adduser
