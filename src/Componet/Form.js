
import React, { useState } from 'react';

 function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
      }

     
    
      const saveData = (e) => {
        e.preventDefault();
       props.fetch({name,email,password});
       setName('');
       setEmail(''); 
       setPassword('');
    }
  return(
    <div className='container'>
    <form action="" onSubmit={saveData}>

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
 
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>

    </div>
  )
}

export default Form
