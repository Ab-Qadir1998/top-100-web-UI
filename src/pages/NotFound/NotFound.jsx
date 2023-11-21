import React from "react";
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <div class="px-3">
        <div class="error-container">
          <h1 class="error-code level-1">404</h1>
          <p class="error-message level-5">Oops! Page not found.</p>
          <p class="error-description text">The requested page does not exist. Please check the URL or go back to the homepage.</p><Link class="nav-link  primary-btn w-fit   m-auto" to="/tpr/"><span class="btn-txt">Go to Homepage</span></Link>
        </div>
      </div>
    </>
  )
};

export default NotFound;
