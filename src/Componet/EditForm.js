
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditForm(props) {
    let {id}=useParams();
    let history=useNavigate();
    console.log(id,'iddd',props.datas)
     const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");


 useEffect(()=>{
    let element=props.datas[id];
    setName(element.name);
    setEmail(element.email); 
    setPassword(element.password);

 },[])

 const handleNameChange = (e) => {
   setName(e.target.value)
 }

 const handleEmailChange = (e) => {
   setEmail(e.target.value)
   }

   const handlePasswordChange = (e) => {
     setPassword(e.target.value)
     }

    
   
     const editData = (e) => {
       e.preventDefault();
      props.UpdateData({id,name,email,password});
      setName('');
      setEmail(''); 
      setPassword('');
      history('/')
   }
 return(
   <div className='container'>
   <form  onSubmit={editData}>

   <div className="form-group mt-5 ">
   <label htmlFor="">Enter Name</label>
   <input onChange={handleNameChange} value={name} name="firstname" type="text" className="form-control" id="" placeholder="Name" />
   </div>

   <div className="form-group mt-3">
   <label htmlFor="">Enter Email</label>
   <input onChange={handleEmailChange} value={email} type="email" className="form-control" id="" placeholder="Email" />
   </div>

   <div className="form-group mt-3">
   <label htmlFor="">Enter Password</label>
   <input onChange={handlePasswordChange} value={password} type="password" className="form-control" id="" placeholder="Password" />
   </div>

   <button type="submit" className="btn btn-primary mt-3">Update</button>
   </form>

   </div>
 )
}

export default EditForm
