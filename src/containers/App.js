import React, {PropTypes} from 'react';

//import components
import Header from './../components/Header';
import Footer from './../components/Footer';


const App = (props) => {
    return (
        <div>
            <Header />
            
            <div className="container">
                {props.children}
            </div>
      
            <Footer />
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
