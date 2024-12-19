// firebaseConfig.js

// Importa las funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBtWtPJ4pelhpGY15QeN3CKJSI1vpTWGzI",
  authDomain: "proyecto-final-mananes.firebaseapp.com",
  projectId: "proyecto-final-mananes",
  storageBucket: "proyecto-final-mananes.firebasestorage.app",
  messagingSenderId: "112820418952",
  appId: "1:112820418952:web:451612ff99662f608f623d",
  measurementId: "G-4G8VRZH3F2",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la referencia a Firestore
export { db };
