import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
      return( 
        <Router>
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to='/home' className="navbar-brand"><p>Home</p></Link>
                        <Link to='/phils-thing' className="navbar-brand"><p>Phils Thing</p></Link>
                    </div>
                </div>
            </div>
        </Router>);
    }
}
  
export default Header;