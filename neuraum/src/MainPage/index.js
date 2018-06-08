import React, { Component } from "react";
// import PropTypes from "prop-types";

import VendorTable from "./components/VendorTable"
import styles from "./mainPage.css";

class MainPage extends Component {
  state = {
    houses: {},
    error: false,
    success: false,
    sortBy: 'internal_id'
  }
  componentDidMount = () => {
    fetch("https://www.fertighaus.de/-/houses.json?vendor__in=28,10")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          houses: this.formatHouses(result.results),
          success: true,
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }
  formatHouses = (houses) => {
    // arrange houses by vendor category
    let formattedHouses = {}
    houses.forEach((house) => {
      let houseId = house.vendor_verbose.id
      if (!formattedHouses.hasOwnProperty(houseId)) {
        // add the vendor and create a directory for its houses
        house.vendor_verbose['houses'] = []
        formattedHouses[houseId] = house.vendor_verbose
      }
      // add the house to the correct vendor
      formattedHouses[houseId].houses.push(house)
    })
    console.log(formattedHouses)
    return formattedHouses
  }
  changeGlobalSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }
  render() {
    const { houses, success, sortBy} = this.state
    return (
      <div className={styles.container}>
        <div className={styles.globalSort}>
          <div className={styles.sortText}>Sort By: </div>
          <select id="sortSelector" onChange={(e) => this.changeGlobalSort(e)} value={this.state.sortBy}>
            <option value="internal_id">House ID</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="living_area_total">Size</option>
          </select>
        </div>
        {success ?
          <div className={styles.vendorTablesContainer}>
            {Object.entries(houses).map(([vendorId, vendor]) => {
              return(<VendorTable vendor={vendor} sortBy={sortBy}/>
            )})}
          </div>
          :
          <div>Loading</div>
        }
      </div>
    )
  }
}

export default MainPage;
