import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_OPSIvWzsD6WeKc4szjKk1Wbagsf2fBY",
  authDomain: "coderhouse-31150.firebaseapp.com",
  projectId: "coderhouse-31150",
  storageBucket: "coderhouse-31150.appspot.com",
  messagingSenderId: "285434171526",
  appId: "1:285434171526:web:cf4b04af40b83d6c49c107",
  measurementId: "G-L1CJ2JPPR9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = (categoryId) => {
  if (typeof categoryId === "string") {
    return getProductsByCategoryId(categoryId);
  } else {
    return getAllProducts();
  }
};

export const getProductById = async (productId) => {
  if (typeof productId !== "string")
    throw new Error("productId must be a string");

  return (await getDoc(doc(db, "items", productId))).data();
};

export const getProductsByCategoryId = (categoryId) => {
  if (typeof categoryId !== "string")
    throw new Error("categoryId must be a string");

  const itemCollection = collection(db, "items");
  const q = query(itemCollection, where("category", "==", categoryId));
  return getDocs(q);
};

export const getAllProducts = () => {
  const itemCollection = collection(db, "items");
  const q = query(itemCollection);
  return getDocs(q);
};

export const sendOrder = (order) => {
  const ordersCollection = collection(db, "orders");
  return addDoc(ordersCollection, order);
};
