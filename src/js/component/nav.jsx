import React from "react";

const Nav = () => {
   return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary nav"data-bs-theme="dark">
  <div className="container-fluid">
    
        <div className="mx-5">
            <a className="navbar-brand mb-0 h1 text-white bg-dark" href="#">Start Bootstrap</a>
        </div>
        <div className="mx-5">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active mb-0 h2 text-white bg-dark" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mb-0 h2 text-white-50 bg-dark" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mb-0 h2 text-white-50 bg-dark" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mb-0 h2 text-white-50 bg-dark"  href="#">Contact</a>
                    </li>
                 </ul>
            </div>
        </div>
     </div>
</nav>
     );
}
export default Nav;