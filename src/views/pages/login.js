
import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoginHero from "../../components/login hero/loginHero";
import GetRegistered from '../../components/getRegistered';
import Footer from '../_partials/footer';
class Login extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    console.log(this.props.vouched)
    return (
      <React.Fragment>
        <LoginHero {...this.props} />
        <GetRegistered  {...this.props} />
        <Footer  {...this.props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);