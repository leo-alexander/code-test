import React, { Component } from "react";
// import PropTypes from "prop-types";
import ReactTable from "react-table";

import { isMobile } from "../../../screenSize"
import styles from "./vendorTable.css";

class VendorTable extends Component {
  render() {
    const {
      display_name,
      logo,
    } = this.props.vendor
    const houses = this.props.vendor.houses;
    const columnWidth = () => {
      if (isMobile()) {
        return 120
      } else return 300
    }
    const columns = [{
      Header: 'House ID',
      accessor: 'internal_id',
      Cell: props => <span className={styles.text}>{props.value}</span>
    },
    {
      Header: 'Image',
      accessor: 'exterior_images[0].fill-320x240',
      minWidth: columnWidth(),
      Cell: props => <img className={styles.cellImage} src={props.value} alt="house pic" />
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: props => <span className={styles.text}>{props.value}</span>
    },
    {
      Header: 'Price',
      accessor: 'price',
      Cell: props => <span className={styles.text}>{props.value.toLocaleString('de-DE', { style: "currency", currency: "EUR", })}</span>
    },
    {
      Header: 'Size',
      accessor: 'living_area_total',
      Cell: props => <span className={styles.text}>{props.value}m&sup2;</span>
    }
  ]
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoContainer}>
            <img src={logo.original} className={styles.logo} alt="vendor logo" />
          </div>
          <div className={styles.vendorName}>{display_name}</div>
        </div>
         <ReactTable
           data={houses}
           columns={columns}
           sortable={true}
           className="-striped -highlight"
           showPagination={houses.length > 20 ? true : false}
           defaultPageSize={houses.length > 20 ? 20 : houses.length}
           sorted={[{
              id: this.props.sortBy,
            }]}
         />
      </div>
    )
  }
}

export default VendorTable;
