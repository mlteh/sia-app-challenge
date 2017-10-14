// imports
import React, { Component } from 'react';

class Airplane extends Component {
  constructor(props) {
    super(props);
    this.rows = 30;

  } 

  buildAircraftRows() {
    let aircraftRows = []
    for (let i=0; i<30; i++) {
      aircraftRows.push(
        <li key={i}className={`row row--${i}`}>
          <ol className="seats" type="A">
            <li className="seat">
              <input type="checkbox" id={`${i}A`} />
              <label htmlFor={`${i}A`}>{`${i}A`}</label>
            </li>
            <li className="seat">
              <input type="checkbox" id={`${i}B`} />
              <label htmlFor={`${i}B`}>{`${i}B`}</label>
            </li>
            <li className="seat">
              <input type="checkbox" id={`${i}C`} />
              <label htmlFor={`${i}C`}>{`${i}C`}</label>
            </li>
            <li className="seat">
              <input type="checkbox" disabled id={`${i}D`} />
              <label htmlFor={`${i}D`}>{`${i}D`}</label>
            </li>
            <li className="seat">
              <input type="checkbox" id={`${i}E`} />
              <label htmlFor={`${i}E`}>{`${i}E`}</label>
            </li>
            <li className="seat">
              <input type="checkbox" id={`${i}F`} />
              <label htmlFor={`${i}F`}>{`${i}F`}</label>
            </li>
          </ol>
        </li>
      )
    }
    return aircraftRows;
    console.log("AIR", aircraftRows)
  }
  
  render() {
    return (
      <div className="plane">
        <div className="cockpit">
          <h1>Please select a seat</h1>
        </div>
        <div className="exit exit--front fuselage">
        </div>
        <ol className="cabin fuselage">
          { this.buildAircraftRows() }
        </ol>
        <div className="exit exit--back fuselage">
        </div>
      </div>
    );
  }
}

export default Airplane;
