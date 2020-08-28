import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux'
import { initializeApp } from '../src/redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import {withSuspanse} from "./hoc/withSuspanse";
import Redirect from "react-router-dom/es/Redirect";

// import LoginPage from './Login/Login';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer'
const DialogsContainer =React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer =React.lazy(() => import ('./components/Profile/ProfileContainer'))
const LoginPage =React.lazy(() => import ('./Login/Login'))

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {

}
  componentDidMount() {
    this.props.initializeApp()
      window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
      window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

    render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
              <Switch>
                  <Route path='/' exact>
                      <Redirect to='/profile'/></Route>
                  <Route path='/dialogs'
                   render={withSuspanse(DialogsContainer)}/>
            <Route path='/profile/:userId?'
                render={withSuspanse(ProfileContainer)}/>
            <Route path='/users'
              render={() => <UsersContainer />} />
            <Route path='/news'
              render={() => <News />} />
            <Route path='/music'
              render={() => <Music />} />
            <Route path='/settings'
              render={() => <Settings />} />
            <Route path='/login'
                   render={withSuspanse(LoginPage)}/>


              <Route path='*'
                     render={() => <div>404 NOT FOUND</div>}/>
              </Switch>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps,{initializeApp}))(App);

const SamuraiJSApp = (props) =>{
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp
