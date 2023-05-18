// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc } from "firebase/firestore";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
  limit,
  serverTimestamp,
  orderBy,
  arrayUnion,
  runTransaction,
  increment,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  cupcakes,
  cakes,
  fondantCakes,
  cakeRolls,
} from "./src/database/AllProducts";
import { addressBook, cartItems } from "./src/database/CartData";
import { Orders } from "./src/database/ProfileData";
import { getSignedInUser } from "./firebaseAuth";

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

export const addCakes = () => {
  try {
    cakeRolls.forEach((_doc) => {
      _doc = { ..._doc, createdAt: serverTimestamp() };
      // addDoc(collection(db, "products", doc.id), doc);
      setDoc(doc(db, "products", _doc.id), _doc);
    });
  } catch (e) {
    console.error("Error adding cake : ", e);
  }
};

export const getProductById = (id) => {
  return new Promise(async (resolve, reject) => {
    const q = query(
      collection(db, "products"),
      where("id", "==", id),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    let dataArray = [];
    let promiseArr = [];

    processData(querySnapshot, dataArray, promiseArr);

    await Promise.all(promiseArr).catch((e) => reject(e));

    resolve(dataArray[0]);
  });
};

export const getAllProducts = (n = null) => {
  return new Promise(async (resolve, reject) => {
    let querySnapshot;
    if (n !== null) {
      querySnapshot = await getDocs(
        query(collection(db, "products"), limit(3))
      );
    } else {
      querySnapshot = await getDocs(collection(db, "products"));
    }
    let dataArray = [];
    let promiseArr = [];

    processData(querySnapshot, dataArray, promiseArr);

    await Promise.all(promiseArr).catch((e) => reject(e));
    resolve(dataArray);
  });
};

export const getReviewsOfProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    const querySnapshot = await getDocs(
      collection(db, `products/${id}/reviews`)
    );
    let dataArray = [];
    let promiseArr = [];

    processData(querySnapshot, dataArray, promiseArr);

    await Promise.all(promiseArr).catch((e) => reject(e));
    resolve(dataArray);
  });
};

export const getBestSellers = () => {
  return new Promise(async (resolve, reject) => {
    const q = query(
      collection(db, "products"),
      orderBy("ratingNo", "desc"),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
    let dataArray = [];
    let promiseArr = [];

    processData(querySnapshot, dataArray, promiseArr);

    await Promise.all(promiseArr).catch((e) => reject(e));

    resolve(dataArray);
  });
};

export const getRandomProducts = (n = null) => {
  return new Promise(async (resolve, reject) => {
    // get the number of documents in your collection

    let _allDocuments = await getDocs(collection(db, "products"));

    const docCount = _allDocuments.size;

    // generate n random numbers
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
      randomNumbers.push(Math.floor(Math.random() * docCount));
    }

    let _docArray = [];
    _allDocuments.forEach((doc) => {
      _docArray.push(doc);
    });

    const _randomArray = randomNumbers.map((randomNum) => _docArray[randomNum]);
    let dataArray = [];
    let promiseArr = [];

    processData(_randomArray, dataArray, promiseArr);

    await Promise.all(promiseArr).catch((e) => reject(e));

    resolve(dataArray);
  });
};

export const getProducts = async (key, value = "none", n = null) => {
  return new Promise(async (resolve, reject) => {
    let q1, q2;
    if (n === null) {
      q1 = query(collection(db, "products"), where(key, "==", value));
      q2 = query(
        collection(db, "products"),
        where(key, "array-contains", value)
      );
    } else {
      q1 = query(collection(db, "products"), where(key, "==", value), limit(n));
      q2 = query(
        collection(db, "products"),
        where(key, "array-contains", value),
        limit(n)
      );
    }
    const _querySnapshot1 = await getDocs(q1);
    const _querySnapshot2 = await getDocs(q2);

    const querySnapshot1 = _querySnapshot1.docs;
    const querySnapshot2 = _querySnapshot2.docs;

    let dataArray = [];
    let promiseArr = [];

    let array = [...querySnapshot1, ...querySnapshot2];
    if (n !== null) {
      array = array.slice(0, n);
    }
    processData(array, dataArray, promiseArr);
    await Promise.all(promiseArr).catch((e) => reject(e));
    resolve(dataArray);
  });
};

export const processData = (querySnapshot, dataArray, promiseArr) => {
  querySnapshot.forEach(async (doc) => {
    let promise = new Promise(async (resolve, reject) => {
      const data = doc.data();
      let imageArr = await Promise.all(
        data.images && data.images.length > 0
          ? data.images.map(async (image) => {
              const spaceRef = ref(storage, image);
              const url = await getDownloadURL(spaceRef);
              return url;
            })
          : []
      );
      data.images = imageArr;
      dataArray.push(data);
      resolve();
    });
    promiseArr.push(promise);
  });
};

export const uploadReviewImages = (url, filename) => {
  return new Promise((resolve, reject) => {
    const imageRef = ref(storage, `reviews/${filename}`);
    uploadString(imageRef, url, "data_url")
      .then((snapshot) => {
        console.log("Uploaded a data_url string!");
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export const uploadReview = async (id, review) => {
  return new Promise(async (resolve, reject) => {
    const user = await getSignedInUser();
    const currentDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const reviewDoc = {
      rating: review.rating,
      title: review.title,
      text: review.text,
      uploadedImages: review.images,
      author: {
        id: user && user.uid ? user.uid : null,
        name: review.name,
        email: review.email,
      },
      date: currentDate,
    };
    addDoc(collection(db, `products/${id}/reviews`), reviewDoc);

    console.log("uploadReview function :: ", id, review);

    try {
      const docRef = doc(db, "products", id);
      await runTransaction(db, async (transaction) => {
        const _doc = await transaction.get(docRef);
        if (!_doc.exists()) {
          throw "Document does not exist!";
        }
        const oldRating = _doc.data().rating ? _doc.data().rating : 0;
        const oldRatingNo = _doc.data().ratingNo ? _doc.data().ratingNo : 0;
        const newRating = (
          (oldRating * oldRatingNo + review.rating) /
          (oldRatingNo + 1)
        ).toFixed(1);

        console.log(
          "RATINGS : oldRating : ",
          oldRating,
          " oldRatingNo : ",
          oldRatingNo,
          " newRating : ",
          newRating
        );
        let ratings = _doc.data().ratings ? _doc.data().ratings : {};

        ratings[review.rating] = ratings[review.rating]
          ? ratings[review.rating] + 1
          : 1;

        console.log("_doc.data().reviews -> ", _doc.data().reviews);

        if (review.text || review.title || review.images) {
          transaction.update(docRef, {
            rating: newRating,
            ratings: ratings,
            ratingNo: increment(1),
          });
        } else {
          transaction.update(docRef, {
            rating: newRating,
            ratings: ratings,
            ratingNo: increment(1),
          });
        }
      });
      console.log("Transaction successfully committed!");
      getProductById(id).then((res) => {
        resolve(res);
      });
    } catch (e) {
      console.log("Transaction failed: ", e);
      reject(e);
    }
  });
};

/** ********* FETCH FROM LOCAL DATABASE *************** */

export const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    let data = [...cupcakes, ...cakes].find((item) => item.id === id);
    resolve(data);
  });
};

export const fetchAllProducts = () => {
  return new Promise((resolve, reject) => {
    resolve([...cakes, ...cupcakes]);
  });
};

export const fetchRandomList = (n, excludeId) => {
  //Filter array to exclude current product
  let filteredList = cakes.filter((item) => item.id !== excludeId);
  // Shuffle array
  const shuffled = filteredList.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffle
  let selected = shuffled.slice(0, n);

  return new Promise((resolve, reject) => resolve(selected));
};

export const fetchCartData = () => {
  return new Promise((resolve, reject) => {
    resolve({ cartItems: cartItems, addressBook: addressBook });
  });
};

export const removeAddress = (id) => {
  return new Promise((resolve, reject) => {
    addressBook.splice(
      addressBook.findIndex((a) => a.id === id),
      1
    );
    //TODO Update addressBook on Firebase
    resolve(addressBook);
  });
};

export const updateAddress = (address) => {
  return new Promise(async (resolve, reject) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const userRef = doc(db, "users", userId);
      console.log("addressss ", typeof address, address);
      await updateDoc(userRef, {
        addresses: arrayUnion(address),
      });
      const userDoc = await getDoc(userRef);
      const updatedAddresses = userDoc.data()?.addresses;
      if (updatedAddresses) {
        resolve(updatedAddresses);
      } else {
        reject("ADDRESS_NOT_ADDED");
      }
    } else {
      reject("NO_LOGGED_IN_USER");
    }
  });
};

export const addAddress = (address) => {
  return new Promise(async (resolve, reject) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const userRef = doc(db, "users", userId);
      console.log("addressss ", typeof address, address);
      // await updateDoc(userRef, {
      //   addresses: arrayUnion(address),
      // });
      await updateDoc(userRef, {
        addresses: { [address.id]: address },
      });
      const userDoc = await getDoc(userRef);
      const updatedAddresses = userDoc.data()?.addresses;
      if (updatedAddresses) {
        resolve(updatedAddresses);
      } else {
        reject("ADDRESS_NOT_ADDED");
      }
    } else {
      reject("NO_LOGGED_IN_USER");
    }
  });
};

export const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    resolve(Orders);
  });
};

export const fetchAddressBook = () => {
  return new Promise(async (resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      console.log("fetchAddressBook called ", user);
      // const userId = auth.currentUser?.uid;
      const userId = user?.uid;
      if (userId) {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);
        console.log("USER DOC : ", userDoc.data());
        const addresses = userDoc.data()?.addresses;
        if (addresses) {
          resolve(addresses);
        } else {
          resolve([]);
        }
      } else {
        reject("NO_LOGGED_IN_USER");
      }
    });
  });
};
