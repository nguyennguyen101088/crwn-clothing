import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCqWNNSSonQFGY7R_TPJhi60P9gXQdGfH8",
    authDomain: "crwn-clothing-c2ff8.firebaseapp.com",
    projectId: "crwn-clothing-c2ff8",
    storageBucket: "crwn-clothing-c2ff8.appspot.com",
    messagingSenderId: "914222703561",
    appId: "1:914222703561:web:e616fbe804ef321f4afe18",
    measurementId: "G-VVL43X7F59"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
