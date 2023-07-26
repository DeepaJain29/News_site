// // API key - 6dc97f3571a94b528c6b63cd0065570a


// CLASS BASED COMPONENT

// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// // import { BrowserRouter as Router, 
// //     Routes, 
// //     Route,
// //     Link 

// //   } from 'react-router-dom';

// export default class NewsItem extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         let { title, description, imageUrl, newsUrl, author, date, source } = this.props
//         return (
//             <div className="my-3">
//                 <div className="card" >
//                     {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>{source}</span> */}

//                     <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
//                         <span className="badge rounded-pill bg-danger" >{source}</span>

//                         </div>
//                             <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/05/08/1600x900/shabana_1683564869977_1683564870299.jpg"} className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">{title}</h5>
//                                 <p className="card-text">{description}...</p>
//                                 <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
//                                 <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">somewhere</a>
//                             </div>
                        
//                         </div>
//                     </div>
                
//         )
//     }
// }




// FUNCTION BASED COMPONENT


// API key - 6dc97f3571a94b528c6b63cd0065570a
import React from 'react';
// import PropTypes from 'prop-types';
// import { BrowserRouter as Router, 
//     Routes, 
//     Route,
//     Link 

//   } from 'react-router-dom';

export const NewsItem = (props) => {
   
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className="my-3">
                <div className="card" >
                    {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>{source}</span> */}

                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span className="badge rounded-pill bg-danger" >{source}</span>

                        </div>
                            <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/05/08/1600x900/shabana_1683564869977_1683564870299.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}...</p>
                                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">somewhere</a>
                            </div>
                        
                        </div>
                    </div>
                
        )
    
}

export default NewsItem;