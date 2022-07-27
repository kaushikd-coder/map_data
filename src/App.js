// React
import React, { Component } from 'react';


// svgMap
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';

//values for the map
import {values} from "./Data/data"

class App extends Component {

  componentDidMount() {
    if (!this.svgMap) {
      //initializing the map
      const mySvgMap = new svgMap({
        targetElementID: "svgMap",
        mouseWheelZoomEnabled : false , 
        data: {
          data: {
           id: {
             name: "ID",
             format: "{0}",
             thousandSeparator: ",",
           },
            region: {
              name: "Region",
              format: "{0}",
              thousandSeparator: ",",
          },
            data : {
              name: "Data",
              format: "{0}",
              thousandSeparator: ",",
      
            },
            
           
          },
          applyData: "data",
          values: values,
        },
      });

      this.svgMap = mySvgMap;
    }
  }

  render() {
    return (
      <div className='app'>
        <div id='svgMap'></div>
      </div>
    );
  }
}

export default App;