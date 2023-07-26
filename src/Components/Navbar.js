// class based component

// import React, { Component } from 'react'
// // import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {
//   static propTypes = {

//   }

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning ">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">NewsMonkey</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>




//                 {/* <div className="dropdown">
//                       <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown link
//                       </Link>

//                       <ul className="dropdown-menu">
//                         <li><Link className="dropdown-item" to="#">Action</Link></li>
//                         <li><Link className="dropdown-item" to="#">Another action</Link></li>
//                         <li><Link className="dropdown-item" to="#">Something else here</Link></li>
//                       </ul>
//                     </div> */}

//               </ul>
//               <form className="d-flex">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//               </form>

//             </div>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }



// function based COMPONENT

import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-warning ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>




                {/* <div className="dropdown">
                      <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </Link>

                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                      </ul>
                    </div> */}

              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

            </div>
          </div>
        </nav>
      </div>
    )
  
}

export default Navbar;