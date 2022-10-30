import React from 'react';

export default class CompanyLogo extends React.Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img src="https://sillyamerica.com/blog/wp-content/uploads/2012/05/Giant-Solo-Paper-Cup-Springfield-Missouri-03.jpg" class="img-fluid"></img>
            {/* <span class="img-overlay"><h2>Super Cool!</h2></span> */}

          <h1 class="display-4 centered">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    );
  }
}