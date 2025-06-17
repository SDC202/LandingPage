// Importa Firebase desde el CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
apiKey: "AIzaSyBCz1RlmB7qxNPjQ5VnSGNYTCeVcvpdT0E",
authDomain: "landing-1316d.firebaseapp.com",
databaseURL: "https://landing-1316d-default-rtdb.firebaseio.com",
projectId: "landing-1316d",
storageBucket: "landing-1316d.firebasestorage.app",
messagingSenderId: "477606477230",
appId: "1:477606477230:web:5d494387951929bbe51c3f"
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Obtén la referencia a la base de datos en tiempo real
const database = getDatabase(app);

// Función para enviar el formulario a Firebase
async function enviarFormulario(formData) {
  try {
    // Referencia a la colección "solicitudes"
    const solicitudesRef = ref(database, 'solicitudes');
    // Crea una nueva entrada con push
    const nuevaSolicitudRef = push(solicitudesRef);
    // Sube los datos con set
    await set(nuevaSolicitudRef, formData);
    return true;
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    return false;
  }
}

// Exporta la función junto con lo demás
export { enviarFormulario };

