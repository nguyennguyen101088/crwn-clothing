import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.util';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPageComponent from './pages/shop/shop.component';
import CheckOutComponent from './pages/checkout/check-out.component';


import HeaderComponent from './components/header/header.component';
import SignInAndSignUpComponent from './pages/signin-and-signup/signin-and-signup.component';
import { setCurrentUser } from '../src/redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(null);
      //addCollectionAndDocuments('collections', collectionsArray);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props; 
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPageComponent} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpComponent />
              )
            }
          />
          {/* <Route
            exact path='/signin' component={SignInAndSignUpComponent} /> */}
          <Route exact path='/checkout' component={CheckOutComponent} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
