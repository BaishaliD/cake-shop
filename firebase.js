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
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

const category = {
  NONE: "None",
  CAKE: "Cake",
  CUPCAKE: "Cupcake",
  JAR: "Jar Cake",
};

const flavour = {
  NONE: "None",
  CHOCOLATE: "Chocolate",
  VANILLA: "Vanilla",
  STRAWBERRY: "Strawberry",
  REDVELVET: "Red Velvet",
  FRUIT: "Fruit",
  BLACKFOREST: "Black Forest",
};

const type = {
  NONE: "None",
  FONDANT: "Fondant",
  PULLUP: "Pull-Up",
  BENTO: "Bento",
  MOUSSE: "Mousse",
};

const occasion = {
  NONE: "None",
  BIRTHDAY: "Birthday",
  WEDDING: "Wedding",
  ANNIVERSARY: "Anniversary",
  CHRISTMAS: "Christmas",
  VALENTINES: "Valentine's Day",
};

const dummyData = {
  id: "cupcake_christmas_confetti",
  name: "Christmas Confetti",
  desc: "Chocolate Cupcake with Confetti",
  minPrice: "Rs. 200",
  discountedPrice: "Rs. 150",
  discount: "20%",
  rating: 4.5,
  ratingNo: 13,
  images: [
    "/cupcakes/christmas.webp",
    "/cupcakes/christmas-2.webp",
    "/cupcakes/christmas-3.webp",
  ],
  flavour: [flavour.CHOCOLATE, flavour.VANILLA, flavour.STRAWBERRY],
  occasion: occasion.CHRISTMAS,
  category: category.CUPCAKE,
  type: type.NONE,
  sameDayDelivery: true,
  bestSeller: false,
  new: true,
  eggless: true,
  weight: ["500 gm", "1 kg"],
  priceList: [
    {
      weight: "500 gm",
      flavour: flavour.CHOCOLATE,
      price: "Rs. 400",
      discountedPrice: "Rs. 320",
      discount: "20%",
    },
    {
      weight: "1 kg",
      flavour: flavour.CHOCOLATE,
      price: "Rs. 450",
    },
    {
      weight: "500 gm",
      flavour: flavour.VANILLA,
      price: "Rs. 200",
    },
    {
      weight: "1 kg",
      flavour: flavour.VANILLA,
      price: "Rs. 250",
      discountedPrice: "Rs. 150",
      discount: "10%",
    },
    {
      weight: "500 gm",
      flavour: flavour.STRAWBERRY,
      price: "Rs. 300",
    },
    {
      weight: "1 kg",
      flavour: flavour.STRAWBERRY,
      price: "Rs. 350",
    },
  ],
  info: [
    "Our Christmas Confetti cake is the perfect dessert for your Christmas spread.",
    "This chocolate cupcake has a moist and soft base, topped with a dollop with confetti-filled buttercream.",
    "Since our cakes are baked and decorated by hand once you place your order, the actual product might differ slightly from the photos provided here.",
    "Note: Please consume within 24 hours of receiving",
  ],
};

export const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "products"), dummyData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getDataById = async (id) => {
  console.log("getGataById CALLED!", id);
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("id", "==", id), limit(1));
  const querySnapshot = await getDocs(q);
  console.log("hgdfuhefuwjefgi ", querySnapshot);
  let dataArray = [];

  let promise = new Promise((resolve) => {
    querySnapshot.forEach(async (doc) => {
      const data = doc.data();
      let imageArr = await Promise.all(
        data.images.map(async (image) => {
          const spaceRef = ref(storage, image);
          const url = await getDownloadURL(spaceRef);
          return url;
        })
      );
      data.images = imageArr;
      dataArray.push(data);
      resolve(dataArray);
    });
  });

  return new Promise((resolve) => {
    promise.then((dataArray) => {
      console.log("DATA ARRAY PROD : ", dataArray);
      resolve(dataArray[0]);
    });
  });
};

export const getData = async (field, value) => {
  console.log("GET DATA CALLED!", field, value);
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where(field, "==", value));
  const querySnapshot = await getDocs(q);
  let dataArray = [];

  let promise = new Promise((resolve) => {
    querySnapshot.forEach(async (doc) => {
      const data = doc.data();
      let imageArr = await Promise.all(
        data.images.map(async (image) => {
          const spaceRef = ref(storage, image);
          const url = await getDownloadURL(spaceRef);
          return url;
        })
      );
      data.images = imageArr;
      dataArray.push(data);
      resolve(dataArray);
    });
  });

  return new Promise((resolve) => {
    promise.then((dataArray) => {
      console.log("DATA ARRAY : ", dataArray);
      resolve(dataArray);
    });
  });
};
