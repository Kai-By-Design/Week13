import React from 'react';
import Navigation from './navigation';
import Login from './login';
// import CompanyLogo from './companyLogo';

export default class Homepage extends React.Component {
  render() {
    return (
      <div class=" h-100">
        <div>
          <Navigation />
        </div>
        <div class=" bg-warning m-4 m-4 border border-dark border-start-3 rounded align-middle d-flex p-2 justify-content-center align-items-center ">
          <Login />
        </div>
      </div>
    );
  }
}