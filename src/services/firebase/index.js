// * I recomend to use the import specific packge import module @firebase/app
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  writeBatch,
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

// * Examples that we explained in class 13

export const exmpleSendOrder = (order) => {
  const ordersCollection = collection(db, "orders");
  return addDoc(ordersCollection, order);
};

export const exampleUpdateOrder = (orderId, updatedOrder) => {
  if (typeof orderId !== "string") throw new Error("orderId must be a string");
  // * Instead of validtion by updatedOrder is object or not, we can add schema json validation to our app
  // * For example we can use a library called 'Ajv' to validate our schemas: https://www.npmjs.com/package/ajv
  // * For example we can use a library called 'jsonschema' to validate our schemas: https://www.npmjs.com/package/jsonschema
  if (typeof updatedOrder !== "object")
    throw new Error("updatedOrder must be a valid object");

  const orderDoc = doc(db, "orders", orderId);
  return updateDoc(orderDoc, updatedOrder);
};

export const exampleBatchUpdateOrder = async () => {
  const batch = writeBatch(db);

  const docOrders = doc(db, "orders");

  batch.set(docOrders, { total: 150 });
  batch.update(docOrders, { total: 1000 });
  batch.delete(docOrders);

  // Runs all the batch operations
  await batch.commit();
};
