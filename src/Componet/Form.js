import React from 'react';

 function Form() {
  return(
    <div className='container'>
    <form>
    <div className="form-group mt-5 ">

    <label htmlFor="exampleInputEmail1">Enter Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
    </div>

    <div className="form-group mt-3">
    <label htmlFor="exampleInputPassword1">Enter Email</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email" />
    </div>

    <div className="form-group mt-3">
    <label htmlFor="exampleInputPassword1">Enter Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
 
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>

    </div>
  )
}

export default Form
