
import React, { Component } from 'react'
import { connect } from 'react-redux';
import GetRegistered from '../../components/getRegistered';
import Footer from '../_partials/footer';
import Registrationhero from '../../components/Registration hero/Registrationhero';
class Registration extends Component {
  render() {
    console.log(this.props.vouched)
    return (
      <React.Fragment>
        <Registrationhero />
        <GetRegistered />
        <Footer />
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    vouched: state.app.vouched
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);