import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPageComponent extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapShop = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={
                        props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)
                    } 
                />
                <Route 
                    exact 
                    path={`${match.path}/:collectionId`} 
                    render={
                        props => (
                        <CollectionPageWithSpinner isLoading={loading} otherProps={ props } />
                        )
                    } 
                />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
   
export default connect(null, mapDispatchToProps) (ShopPageComponent);