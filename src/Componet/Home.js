import React from 'react';

 function Home() {
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button type="button" class="btn btn-success">Edit</button> <button type="button" class="btn btn-danger">Delete</button></td>
  
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button type="button" class="btn btn-success">Edit</button> <button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button type="button" class="btn btn-success">Edit</button> <button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>

    </div>
    
  )
}

export default Home
