import React, { Component } from 'react';
import './App.css';
// var FylFdrVap = require('fs')
// var FylTxtVar = FylFdrVap.readFile("data.json").toJson();

//     console.log(FylTxtVar)
import data from './data.json';

class App extends Component {
  render() {
    console.log(data);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Offer price</th>
              <th>Start At</th>
              <th>End At</th>
              <th>Create At</th>
              <th>Update At</th>
            </tr>
          </thead>
          <tbody>

            {data.employees.map((val, i) => <tr key={i}>
               <td>{val.product_name}</td>
               <td>{val.product_description}</td>
                 <td>{val.price}</td>
               <td>{val.offer_price}</td>
               <td>{val.offer_start_at}</td>
               <td>{val.offer_end_at}</td>
               <td>{val.created_at}</td>
               <td>{val.updated_at}</td>
              </tr>
  )}
          </tbody>
        </table>
          )
      </div>
    );
  }
}


export default App;
