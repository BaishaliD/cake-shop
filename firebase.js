// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { cupcakes } from "./src/database/AllProducts";

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

export const addCupcakes = () => {
  try {
    cupcakes.forEach((doc) => {
      doc = { ...doc, createdAt: serverTimestamp() };
      console.log("Add cupcake :: ", doc);
      addDoc(collection(db, "products"), doc);
    });
  } catch (e) {
    console.error("Error adding cupcake : ", e);
  } finally {
    console.log("Cupcakes added", cupcakes);
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

export const getAllProducts = new Promise(async (resolve, reject) => {
  console.log("getAllProducts called !!!!");
  // const querySnapshot = await getDocs(collection(db, "products"));
  // let dataArray = [];
  // let promiseArr = [];

  // processData(querySnapshot, dataArray, promiseArr);

  // await Promise.all(promiseArr).catch((e) => reject(e));

  // console.log("getAllProducts Data : ", dataArray);
  // resolve(dataArray);
});

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
      ).catch((e) => reject(e));
      data.images = imageArr;
      dataArray.push(data);
      resolve();
    });
    promiseArr.push(promise);
  });
};

export const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    let data = cupcakes.find((item) => item.id === id);
    resolve(data);
  });
};

export const fetchAllProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(cupcakes);
  });
};

export const fetchRandomList = (n, excludeId) => {
  //Filter array to exclude current product
  let filteredList = cupcakes.filter((item) => item.id !== excludeId);
  // Shuffle array
  const shuffled = filteredList.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffle
  let selected = shuffled.slice(0, n);

  return new Promise((resolve, reject) => resolve(selected));
};
