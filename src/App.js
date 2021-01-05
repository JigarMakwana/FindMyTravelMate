import React from 'react';
import './stylesheets/App.css';
import './stylesheets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header/Header';
import {FooterCus} from "./components/Footer/Footer";
import {Registration} from './components/Registration/Registration'
import {Login} from './components/Login/Login';
import {ForgotPassword} from "./components/ForgotPasword/ForgotPassword";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {Home} from "./components/Home/Home";
import {Notifications} from "./components/Notifications/Notifications";
import {PageNotFound} from './components/PageNotFound/PageNotFound'
import {UnderImp} from "./components/UnderImp/UderImp";
import {Feedback} from "./components/Feedback/Feeback";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="container d-flex align-items-center flex-column">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route  exact path="/user/register" component={Registration}></Route>
                        <Route exact path="/user/login" component={Login}></Route>
                        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
                        <Route exact path="/resetpassword" component={ResetPassword}></Route>
                        <Route exact path="/user/notifications" component={Notifications}></Route>
                        <Route  exact path="/home" component={Home}></Route>
                        <Route  exact path="/feedback" component={Feedback}></Route>
                        <Route  exact path="/underimplementation" component={UnderImp}></Route>
                        <Route exact path="*" component={PageNotFound}></Route>
                    </Switch>
                </div>
                <FooterCus />
            </div>
        </BrowserRouter>
    );
}

export default App;