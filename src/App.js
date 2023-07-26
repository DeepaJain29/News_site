// CLASS BASED COMPONENT


// import './App.css';
// import LoadingBar from 'react-top-loading-bar'

// import React, { Component } from 'react'
// import Navbar from './Components/Navbar';
// import News from './Components/News';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// export default class App extends Component {
//   pageSize = 15;
//   apikey = "6dc97f3571a94b528c6b63cd0065570a";

//   // for top loading bar
//   state = {progress:0}
//   setProgress = (progress) =>{
//     setState({progress: progress});
//   } 

//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar/>
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={state.progress}

//           />
//           <Routes>
//             <Route exact path= "/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category='general' />} />
//             <Route exact path= "/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category='business' />} />
//             <Route exact path= "/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category='entertainment' />} />
//             <Route exact path= "/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category='health' />} />
//             <Route exact path= "/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category='science' />} />
//             <Route exact path= "/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category='sports' />} />
//             <Route exact path= "/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category='technology' />} />

//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }




// FUNCTION BASED COMPONENT



import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = (props) => {
  const pageSize = 15;
  const apikey = "6dc97f3571a94b528c6b63cd0065570a";
  // const apiKey = process.env.REACT_APP_NEWS_API

  // for top loading bar

  const [progress, setProgress] = useState(0)



  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category='entertainment' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category='health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category='science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category='technology' />} />

        </Routes>
      </Router>
    </div>
  )

}

export default App;