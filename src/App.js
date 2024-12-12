import React from 'react';
import Footer from './components/Footer/index.js';  // Corrected import path
import Container from './components/Container'; 
import ContainerFilter from './components/ContainerFilter';
import ContainerHidden from './components/ContainerHidden';  // Corrected import path

const App = () => {
  return (
    <div>
      {/* Add the container with heading */}
      <Footer /> 
      <Container /> 
      <ContainerFilter  /> 
      <ContainerHidden />   {/* Add the footer */}
    </div>
  );
};

export default App;
