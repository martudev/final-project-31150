import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxKmWEsDTpUiDKeluNp7ZtskBWVIX3Mwg",
  authDomain: "my-ecomerce-tutorial.firebaseapp.com",
  projectId: "my-ecomerce-tutorial",
  storageBucket: "my-ecomerce-tutorial.appspot.com",
  messagingSenderId: "429406242223",
  appId: "1:429406242223:web:c319043a0a720e6bdcdb5a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCities = async () => {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
};

export const getProducts = (categoryId) => {
  const itemCollection = collection(db, "items");

  const q = query(itemCollection);

  return getDocs(q);
};

export const sendOrder = (order) => {
  const ordersCollection = collection(db, "orders");

  return addDoc(ordersCollection, order);
};
