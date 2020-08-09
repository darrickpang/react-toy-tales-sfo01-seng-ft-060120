import React from 'react';
import ToyCard from './ToyCard'
//import { render } from '@testing-library/react';

class ToyContainer extends React.Component {
  generateToys = () => {
    return this.props.toys.map((toy, index) => {
      return <ToyCard key={index} toy={toy}/>
    })
  }
  render(){
    return(
      <div id="toy-collection">
        {this.generateToys()}
      </div>
    );
  }
  
}

export default ToyContainer;