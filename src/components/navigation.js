import React from 'react';


export default class Navigation extends React.Component {
  render () {
    return (


      // <nav className="navbar bg-light">
      //           <div className="container-fluid">
      //               <a className="navbar-brand" href="https://www.google.com/">
      //                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kawaii_paper_coffee_cup_clip_art.svg/1480px-Kawaii_paper_coffee_cup_clip_art.svg.png"
      //                   alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img>
      //                   &nbsp;Barry's Coffee Corner
      //               </a>

      //               <ul class="nav justify-content-end">

      //                   <li class="nav-item">
      //                       <a class="nav-link active" aria-current="page" href="https://www.google.com/">Employee Login</a>
      //                   </li>

      //                   <li class="nav-item">
      //                       <a class="nav-link" href="https://www.google.com/" >Main Site</a>
      //                   </li>

      //               </ul>
      //           </div>
      //       </nav>


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand m-3" href="https://www.google.com/">Typical Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="https://www.google.com/">Home <span class="sr-only">current</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.google.com/">Link</a>
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
      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <a class="navbar-brand" href="#">Navbar</a>
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul class="navbar-nav mr-auto">
      //       <li class="nav-item active">
      //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">Link</a>
      //       </li>
      //       <li class="nav-item dropdown">
      //         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //           Dropdown
      //         </a>
      //         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <a class="dropdown-item" href="#">Action</a>
      //           <a class="dropdown-item" href="#">Another action</a>
      //           <div class="dropdown-divider"></div>
      //           <a class="dropdown-item" href="#">Something else here</a>
      //         </div>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      //       </li>
      //     </ul>
      //     <form class="form-inline my-2 my-lg-0">
      //       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      //       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      //     </form>
      //   </div>
      // </nav>