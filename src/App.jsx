import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux'
import { initializeApp } from '../src/redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'
import Switch from "react-router-dom/es/Switch";
import {withSuspanse} from "./hoc/withSuspanse";

// import LoginPage from './Login/Login';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer'
const DialogsContainer =React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer =React.lazy(() => import ('./components/Profile/ProfileContainer'))
const LoginPage =React.lazy(() => import ('./Login/Login'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <React.Suspense fallback={<Preloader />}>
          <Switch>
              <Route exact path='/dialogs' component={DialogsContainer} />
              <Route exact path='/profile/:userId?' component={ProfileContainer} />
              <Route exact path='/users' component={UsersContainer} />
              <Route exact path='/login' component={LoginPage} />
          </Switch>
        </React.Suspense>
    } 
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
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
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer =  compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const SamuraiJSApp = (props) =>{
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp
