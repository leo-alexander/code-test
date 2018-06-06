import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import PropTypes from "prop-types";

import Header from "../Header";
import { actions } from "./actions/mainPageActions"
// import styles from "./mainPage.css";

class MainPage extends Component {
  componentDidMount = () => {
    this.props.fetchHouses()
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  fetchHouses: bindActionCreators(actions.fetchHouses, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
