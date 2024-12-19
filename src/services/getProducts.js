import { collection, getDocs } from "firebase/firestore";  // Importa las funciones necesarias de Firestore
import { db } from "../firebase/firebaseConfig";  // Asegúrate de que la ruta sea correcta

const getProducts = async () => {
  try {
    // Obtiene los documentos de la colección "productos" en Firestore
    const querySnapshot = await getDocs(collection(db, "productos"));
    
    // Mapea los documentos a un array de objetos de productos
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};

export default getProducts;

