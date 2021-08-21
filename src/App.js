import React from 'react'
import Header from './components/header.component';
import Footer from './components/footer.componet';
import Homepage from './components/homepage.component';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Homepage/>
        <Footer />
      </div>
    );
  }
}

export default App;
