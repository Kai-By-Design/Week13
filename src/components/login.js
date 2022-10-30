import React from 'react';

export default class Login extends React.Component {
  render() {
    return(
      <form class="bg-warning border border-5 border-dark rounded p-4 align-middle mt-4">
            <h3 className='border-1 p-3 bg-light bg-opacity-50 border border-info text-center'>Log In</h3>
                <br></br>

                <div class="form-group mb-3 ">
              <label forhtml="exampleInputEmail1">Username</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
            </div>

            <div class="form-group mb-3">
              <label forhtml="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-dark">Submit</button>

        </form>
    );
  }
}