// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDocs,
  query,
  where,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { cupcakes, cakes } from "./src/database/AllProducts";
import { addressBook, cartItems } from "./src/database/CartData";
import { Orders } from "./src/database/ProfileData";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHOOi7q4VcOm_UJ1-Zy9tYHl18LaMVI4E",
  authDomain: "cake-shop-2022.firebaseapp.com",
  projectId: "cake-shop-2022",
  storageBucket: "cake-shop-2022.appspot.com",
  messagingSenderId: "860337102509",
  appId: "1:860337102509:web:a5dc270bbc77a683ee3024",
};

console.log("Firebase file loaded!");
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

export const addCakes = () => {
  try {
    cakes.forEach((_doc) => {
      _doc = { ..._doc, createdAt: serverTimestamp() };
      console.log("Add cake :: ", _doc, _doc.id);
      // addDoc(collection(db, "products", doc.id), doc);
      setDoc(doc(db, "products", _doc.id), _doc);
    });
  } catch (e) {
    console.error("Error adding cake : ", e);
  }
};

export const getProductById = (id) => {
  return new Promise(async (resolve, reject) => {
    console.log("getProductById called! ", id);
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

    console.log("getProductById Data : ", dataArray[0]);
    resolve(dataArray[0]);
  });
};

export const getAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    console.log("getAllProducts called !!!!");
    const querySnapshot = await getDocs(collection(db, "products"));
    let dataArray = [];
    let promiseArr = [];

    processData(querySnapshot, dataArray, promiseArr);

    await Promise.all(promiseArr).catch((e) => reject(e));

    console.log("getAllProducts Data : ", dataArray);
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

export const getProductsWithFlavour = () => {};

export const getProductsWithType = () => {};

export const getProductsWithOccassion = () => {};

const processData = (querySnapshot, dataArray, promiseArr) => {
  querySnapshot.forEach(async (doc) => {
    let promise = new Promise(async (resolve, reject) => {
      const data = doc.data();
      let imageArr = await Promise.all(
        data.images.map(async (image) => {
          const spaceRef = ref(storage, image);
          const url = await getDownloadURL(spaceRef);
          return url;
        })
      ).catch((e) => resolve());
      data.images = imageArr;
      dataArray.push(data);
      resolve();
    });
    promiseArr.push(promise);
  });
};

export const uploadReviewImages = (url, filename) => {
  return new Promise((resolve, reject) => {
    console.log("uploadReviewImages called : ", url, filename);
    const imageRef = ref(storage, `reviews/${filename}`);
    uploadString(imageRef, url, "data_url")
      .then((snapshot) => {
        console.log("Uploaded a data_url string!");
        resolve();
      })
      .catch((err) => reject(err));
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
  return new Promise((resolve, reject) => {
    let index = addressBook.findIndex((item) => item.id === address.id);
    addressBook[index] = address;
    resolve(addressBook);
  });
};

export const addAddress = (address) => {
  return new Promise((resolve, reject) => {
    addressBook.push(address);
    resolve(addressBook);
  });
};

export const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    resolve(Orders);
  });
};

export const fetchAddressBook = () => {
  return new Promise((resolve, reject) => {
    resolve(addressBook);
  });
};
