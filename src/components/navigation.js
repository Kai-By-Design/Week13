import React from 'react';


export default class Navigation extends React.Component {
  render () {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
        <a class="navbar-brand m-3" href="https://www.google.com/">Typical Navbar</a>
        <button class="navbar-toggler mr-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://www.google.com/">Accounting</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.google.com/">Billing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="https://www.google.com/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://www.google.com/">Action</a>
                <a class="dropdown-item" href="https://www.google.com/">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="https://www.google.com/">Something else here</a>
              </div>
            </li>

          </ul>

        </div>

      </nav>


    );
  }
}
