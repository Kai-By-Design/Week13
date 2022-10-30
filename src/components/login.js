import React from 'react';

export default class Login extends React.Component {
  render() {
    return(
      <form>
        {/* Username and password input fields, an h3 that says Log In, with a border. */}
            <h3 className='p-3 bg-light bg-opacity-10 border border-primary border-start-3 rounded text-center'>Log In</h3>
                <br></br>

                <div class="form-group mb-3">
              <label for="exampleInputEmail1">Username</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
            </div>

            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <div className="mb-3 form-check">

                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>

                <label className="form-check-label" for="exampleCheck1">Clock Me In</label>

            </div>
            <div className="mb-3 form-check">

                <input type="checkbox" className="form-check-input" id="exampleCheck2"></input>

                <label className="form-check-label" for="exampleCheck2">Clock Me Out</label>

            </div><br></br><hr></hr><br></br>
        </form>
    );
  }
}