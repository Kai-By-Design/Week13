import React from 'react';
import Navigation from './navigation';
import Login from './login';
// import CompanyLogo from './companyLogo';

export default class Homepage extends React.Component {
  render() {
    return (
      <div class="bg-success bg-opacity-10 vh-100">
        <div>
          <Navigation />
        </div>
        <div class="  p-4 d-flex justify-content-center align-items-center text-center align-middle">
          <Login />
        </div>
      </div>
    );
  }
}