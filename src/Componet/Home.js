import React from 'react';

 function Home({datas,DeleteFn}) {
  return(
    <div className='container mt-5'>
      <table className="table table-dark">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Edit\Delete</th>
    </tr>
    </thead>
    <tbody>
        {/* {JSON.stringify(datas)} */}

        {datas.map((el,ind)=>{
            return(
          <tr key={ind}>
        <th scope="row">{ind+1}</th>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.password}</td>
        <td><button className="btn btn-success mright">Edit</button><button onClick={()=>DeleteFn(ind)} className="btn btn-danger" >Delete</button></td>
      </tr>
            )

        })}
      
      
    </tbody>
</table>

    </div>
    
  )
}

export default Home
