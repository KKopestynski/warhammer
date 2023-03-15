import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, userAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB95nfqhMCKG0BxUHWrDPeG-_cNsU6y6AM",
    authDomain: "warhammer-shop.firebaseapp.com",
    projectId: "warhammer-shop",
    storageBucket: "warhammer-shop.appspot.com",
    messagingSenderId: "909404899865",
    appId: "1:909404899865:web:b53f9d23cd4d59a99f3888",
    measurementId: "G-N53DSYB4LD"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


const googleProvider = new GoogleAuthProvider();
// const faceProvider = new FacebookAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect= () => signInWithRedirect(auth, googleProvider);

//allows / creates a DB
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshop = await getDoc(userDocRef);
    console.log(userSnapshop);
    console.log(userSnapshop.exists());

    if(!userSnapshop.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
        }catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;

    //if check if user data exists
    //if check if user data don't exists

    //return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}