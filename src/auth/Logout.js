import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
       <main id="main" class="main">
        <div class="pagetitle">
          <h1>Logout</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active">Logout</li>
            </ol>
          </nav>
        </div>
        </main>
    </div>
  );
};

export default Logout;
