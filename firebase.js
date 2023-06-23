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
  deleteDoc,
  query,
  where,
  limit,
  serverTimestamp,
  orderBy,
  arrayUnion,
  runTransaction,
  increment,
  collectionGroup,
  or,
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

/************** PRODUCT *************** */

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

/************** PRODUCT *************** */

/************** IMAGE PROCESSING *************** */

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

export const processUploadedReviewImages = (
  querySnapshot,
  dataArray,
  promiseArr
) => {
  querySnapshot.forEach(async (doc) => {
    let promise = new Promise(async (resolve, reject) => {
      const product = await getDoc(doc.ref.parent.parent);
      const productData = product.data();
      console.log("productData ", productData);
      const data = doc.data();
      let uploadedImagesArr = await Promise.all(
        data.uploadedImages && data.uploadedImages.length > 0
          ? data.uploadedImages.map(async (image) => {
              const spaceRef = ref(storage, image);
              const url = await getDownloadURL(spaceRef);
              return url;
            })
          : []
      );
      data.uploadedImages = uploadedImagesArr;

      let productImageArr = await Promise.all(
        productData.images && productData.images.length > 0
          ? productData.images.map(async (image) => {
              const spaceRef = ref(storage, image);
              const url = await getDownloadURL(spaceRef);
              return url;
            })
          : []
      );

      dataArray.push({
        id: doc.id,
        product: {
          id: product.id,
          name: productData.name,
          image:
            productImageArr && productImageArr.length > 0
              ? productImageArr[0]
              : null,
        },
        ...data,
      });
      resolve();
    });
    promiseArr.push(promise);
  });
};

/************** IMAGE PROCESSING *************** */

/************** REVIEWS *************** */

export const uploadReview = async (id, review) => {
  return new Promise(async (resolve, reject) => {
    const user = await getSignedInUser();

    if (
      review.title ||
      review.text ||
      (review.images && review.images.length > 0)
    ) {
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
    }

    console.log("uploadReview function :: ", id, review);

    try {
      const productDocRef = doc(db, "products", id);
      await runTransaction(db, async (transaction) => {
        const _doc = await transaction.get(productDocRef);
        if (!_doc.exists()) {
          throw "Document does not exist!";
        }
        const oldRating = _doc.data().rating ? _doc.data().rating : 0;
        const oldRatingNo = _doc.data().ratingNo ? _doc.data().ratingNo : 0;
        const newRating = (
          (oldRating * oldRatingNo + review.rating) /
          (oldRatingNo + 1)
        ).toFixed(1);

        let ratings = _doc.data().ratings ? _doc.data().ratings : {};

        ratings[review.rating] = ratings[review.rating]
          ? ratings[review.rating] + 1
          : 1;

        transaction.update(productDocRef, {
          rating: newRating,
          ratings: ratings,
          ratingNo: increment(1),
        });

        const wishlistedProduct = query(
          collectionGroup(db, "wishlist"),
          where("id", "==", id)
        );
        console.log("wishlistedProducts ", wishlistedProduct);
        const querySnapshot = await getDocs(wishlistedProduct);
        querySnapshot.forEach(async (wishlistDoc) => {
          console.log("wishlistDocRef ", wishlistDoc.data());
          await updateDoc(wishlistDoc.ref, {
            rating: newRating,
          });
        });
      });

      console.log("Transaction successfully committed!");
      getReviewsOfProduct(id).then((res) => {
        resolve(res);
      });
    } catch (e) {
      console.log("Transaction failed: ", e);
      reject(e);
    }
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

export const getReviewsByUser = () => {
  return new Promise(async (resolve, reject) => {
    const user = await getSignedInUser();
    if (user && user.uid) {
      const reviewsByUser = query(
        collectionGroup(db, "reviews"),
        where("author.id", "==", user.uid)
      );
      const querySnapshot = await getDocs(reviewsByUser);
      let dataArray = [];
      let promiseArr = [];

      processUploadedReviewImages(querySnapshot, dataArray, promiseArr);

      await Promise.all(promiseArr).catch((e) => reject(e));
      console.log("GetReviewsByUser promise : ", dataArray);
      resolve(dataArray);
    } else {
      reject("NO_LOGGED_IN_USER");
    }
  });
};

/************** REVIEWS *************** */

/************** ADDRESS *************** */

export const addAddress = async (address) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        addDoc(collection(db, `users/${user.uid}/addresses`), address);

        const querySnapshot = await getDocs(
          collection(db, `users/${user.uid}/addresses`)
        );
        let addressBook = [];
        querySnapshot.forEach((doc) => {
          addressBook.push(doc.data());
        });
        if (addressBook.length > 0) {
          resolve(addressBook);
        } else {
          reject("NO_ADDRESS_ADDED");
        }
      } else {
        reject("NO_LOGGED_IN_USER");
      }
    } catch {
      reject();
    }
  });
};

export const fetchAddressBook = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        const querySnapshot = await getDocs(
          collection(db, `users/${user.uid}/addresses`)
        );
        let addressBook = [];
        console.log("fetchAddressBook querySnapshot ", querySnapshot);
        querySnapshot.forEach((doc) => {
          addressBook.push(doc.data());
        });

        resolve(addressBook);
      } else {
        reject("NO_LOGGED_IN_USER");
      }
    } catch (err) {
      console.log("fetchAddressBook catch block ", err);
      reject();
    }
  });
};

/************** ADDRESS *************** */

/************** WISHLIST *************** */

export const addToWishlist = async (product) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        try {
          await setDoc(
            doc(db, `users/${user.uid}/wishlist`, product.id),
            product
          );
          resolve();
        } catch (err) {
          console.log("addToWishlist error : ", err);
          reject();
        }
      } else {
        reject("NO_LOGGED_IN_USER");
      }
    } catch {
      reject();
    }
  });
};

export const fetchWishlist = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        const querySnapshot = await getDocs(
          collection(db, `users/${user.uid}/wishlist`)
        );
        let dataArray = [];
        querySnapshot.forEach((doc) => dataArray.push(doc.data()));
        resolve(dataArray);
      } else {
        reject("NO_LOGGED_IN_USER");
      }
    } catch (err) {
      console.log("fetchWishlist catch block ", err);
      reject();
    }
  });
};

export const removeFromWishlist = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        try {
          await deleteDoc(doc(db, `users/${user.uid}/wishlist`, id));
          fetchWishlist()
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        } catch (err) {
          reject();
        }
      } else {
        reject("NO_LOGGED_IN_USER");
      }
    } catch {
      reject();
    }
  });
};

/************** WISHLIST *************** */

/**************** CART ***************** */
export const addToCart = ({ id, weight, flavour, qty }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cartItem = {
        orderId: id + "_" + Date.now(),
        id,
        weight,
        flavour,
        qty,
      };
      const user = await getSignedInUser();
      if (user && user.uid) {
        // Add to Firebase
        await addDoc(collection(db, `users/${user.uid}/cart`), cartItem);
        resolve("added to cart");
      } else {
        //Save in local storage
        let cartArray = [];
        const cart = localStorage.getItem("cart");
        if (cart) {
          cartArray = JSON.parse(cart);
        }
        console.log("cartItem ", cartItem);
        cartArray.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cartArray));
        resolve();
      }
    } catch (err) {
      reject(err);
    }
  });
};

export const getCartData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        //Fetch from Firebase
        const querySnapshot = await getDocs(
          collection(db, `users/${user.uid}/cart`)
        );

        let promiseArr = [];
        querySnapshot.forEach(async (doc) => {
          const info = doc.data();
          let promise = new Promise((resolve) => {
            getProductById(info.id).then((product) => {
              console.log("nnn PRODUCT ", product);
              resolve({
                product: { ...product },
                info: { ...info },
              });
            });
          });
          promiseArr.push(promise);
        });
        console.log("nnn getCartData promiseArr ", promiseArr);
        await Promise.all(promiseArr).then((cartData) => {
          console.log("nnn Promise.all ", cartData);
          resolve(cartData);
        });
      } else {
        //fetch from local storage
        let cartArray = [];
        const cart = localStorage.getItem("cart");
        if (cart) {
          cartArray = JSON.parse(cart);
        }

        if (cartArray.length > 0) {
          const cartDataPromise = cartArray.map((item) =>
            getProductById(item.id).then((product) => {
              console.log("product ", product, item);
              return { product: { ...product }, info: { ...item } };
            })
          );
          await Promise.all(cartDataPromise).then((cartData) => {
            resolve(cartData);
          });
        } else {
          resolve(cartArray);
        }
      }
    } catch {
      reject();
    }
  });
};

export const removeFromCart = (orderId) => {
  console.log("removeFromCart orderId ", orderId);
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getSignedInUser();
      if (user && user.uid) {
        //TODO Add to Firebase
        console.log("if block");
        const q = query(
          collection(db, `users/${user.uid}/cart`),
          where("orderId", "==", orderId)
        );
        const querySnapshot = await getDocs(q);
        let promiseArr = [];

        querySnapshot.forEach((_doc) => {
          const promise = new Promise(async (resolve) => {
            await deleteDoc(doc(db, `users/${user.uid}/cart`, _doc.id));
            resolve();
          });
          promiseArr.push(promise);
        });
        await Promise.all(promiseArr).then(() => {
          getCartData().then((res) => {
            resolve(res);
          });
        });
      } else {
        console.log("else block");
        //TODO Save in local storage
        const cart = localStorage.getItem("cart");

        const cartArray = cart ? JSON.parse(cart) : [];

        const ind = cartArray.findIndex((el) => el.orderId === orderId);
        console.log("cartArray remove index ", ind);
        cartArray.splice(ind, 1);
        console.log("cartArray after splice ", cartArray);
        localStorage.setItem("cart", JSON.stringify(cartArray));
        getCartData().then((res) => {
          resolve(res);
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};
/**************** CART ***************** */

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

export const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    resolve(Orders);
  });
};

export const _fetchAddressBook = () => {
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

export const filter = async () => {
  const q1 = query(
    collection(db, "products"),
    or(where("category", "==", "cupcake"), where("category", "==", "jarcake"))
  );

  const q2 = query(
    collection(db, "products"),
    or(
      where("flavour", "==", "chocolate"),
      where("flavour", "==", "strawberry")
    )
  );

  const q3 = query(
    collection(db, "products"),
    or(where("occasion", "==", "christmas"), where("occasion", "==", "wedding"))
  );

  const finalQuery = query(collection(db, "products"), q1, q2, q3);

  const querySnapshot = await getDocs(finalQuery);
  querySnapshot.forEach((doc) => {
    console.log("product filtered => ", doc.data());
  });
};
