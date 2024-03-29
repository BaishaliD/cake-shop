import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collectionGroup,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { processData } from "./firebase";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHOOi7q4VcOm_UJ1-Zy9tYHl18LaMVI4E",
  authDomain: "cake-shop-2022.firebaseapp.com",
  projectId: "cake-shop-2022",
  storageBucket: "cake-shop-2022.appspot.com",
  messagingSenderId: "860337102509",
  appId: "1:860337102509:web:a5dc270bbc77a683ee3024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const errorCodes = {
  "auth/user-not-found": "Email id is not registered",
  "auth/user-disabled": "User account has been disabled by an administrator",
  "auth/timeout": "Session timed out. Please try again.",
  "auth/weak-password": "Password should be at least 6 characters",
  "auth/wrong-password": "Incorrect password",
  "auth/cancelled-popup-request": "",
  "auth/popup-closed-by-user": "",
};

//Sign up new users
export const handleSignUpWithEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Create a new document in the "users" collection with the user's unique ID
        const userId = userCredential.user.uid;

        //Add displayName, mobile and birthday fields to the user
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
          mobile: "",
          birthday: "",
        });
        console.log("createUserWithEmailAndPassword : ", user);
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = errorCodes[errorCode] || error.message;
        reject(errorMessage);
      });
  });
};

//Sign in existing users
export const handleSignInWithEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
        // ...
      })
      .catch((error) => {
        console.log("Sign in existing users error : ", error);
        const errorCode = error.code;
        const errorMessage = errorCodes[errorCode] || error.message;
        reject(errorMessage);
      });
  });
};

//Sign in with Google (Pop up)
export const handleSignInWithGooglePopup = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        await updateProfile(user, {
          displayName: user.displayName,
        });
        console.log("signInWithGooglePopup user ", user);
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(
          "signInWithGooglePopup error : ",
          errorCode,
          errorMessage,
          credential
        );
        reject(errorMessage);
      });
  });
};

//Sign in with Google (Redirect)
export const signInWithGoogleRedirect = () => {
  //TODO
};

//Sign in with Facebook Pop up
export const signInWithFacebookPopup = () => {
  //TODO
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
        console.log(
          "signInWithFacebookPopup error : ",
          errorCode,
          errorMessage,
          email,
          credential
        );
        reject(errorMessage);
      });
  });
};

export const logOut = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        resolve();
      })
      .catch((error) => {
        console.log("Sign-out unsuccessful.");
        reject(error);
      });
  });
};

// Get current signed in user
export const getSignedInUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Signed In
        console.log("User Signed In!!");
        resolve(user);
      } else {
        // User is signed out
        console.log("User Signed out!!");
        resolve(null);
      }
    });
  });
};
