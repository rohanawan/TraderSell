import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const Home = lazy(() => import('./views/pages/home'));
const Login = lazy(() => import('./views/pages/login'));
const Registration = lazy(() => import('./views/pages/registration'));
const Contactus = lazy(() => import('./views/pages/contactus'));
const TradeYourCar = lazy(() => import('./views/pages/tradeYourCar'));
const SellYourCar = lazy(() => import('./views/pages/sellYourCar'));
class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/contactus" component={Contactus} />
                    <Route exact path="/trade-your-car" component={TradeYourCar} />
                    <Route exact path="/Sell-your-car" component={Home} />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // vouched: state.app.user.isVoucehdVerified,
    };
};
export default connect(mapStateToProps)(AppRouter);