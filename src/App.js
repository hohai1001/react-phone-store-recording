import {Switch, Route} from 'react-router-dom';
import './App.css';
import './bootstrap/css/bootstrap.min.css';
import * as React from 'react';
import ProductList from  './components/ProductList';
import Details from  './components/Details';
import Cart from  './components/Cart/Cart';
import Default from  './components/Default';
import Navbar from  './components/Navbar';
import Modal from './components/Modal';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal></Modal>
        {/* <ProductList></ProductList>
        <Details></Details>
        <Cart></Cart>
        <Default></Default> */}
      </React.Fragment>
    )
  }
}
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>

//     <div className="container">
//       <div className="row">
//         <div className="col-6">column number one</div>
//         <div className="col-6">
//           <span>
//             <i className="fas fa-home" />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
