// Importa Firebase desde el CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

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

async function enviarContacto(formData) {
  try {
    // Referencia a la colección "contactos"
    const contactosRef = ref(database, 'contactos');
    // Crea una nueva entrada con push
    const nuevoContactoRef = push(contactosRef);
    // Sube los datos con set
    await set(nuevoContactoRef, formData);
    return true;
  } catch (error) {
    console.error('Error al enviar el formulario de contacto:', error);
    return false;
  }
}

async function cargarVideos() {
  console.log('Cargando videos desde Firebase...');

  try {
    const videosRef = ref(database, 'videos');
    const snapshot = await get(videosRef);
    if (snapshot.exists()) {
      const videos = snapshot.val();            
      console.log('Videos cargados correctamente:', videos);
      return videos;
    } 
    else {
      console.log('No hay videos en la base de datos.');
      return null;
    }
  } catch (error) {
    console.error('Error al cargar los videos:', error);
    return null;
  }
}

// Exporta la función junto con lo demás
export { enviarFormulario, enviarContacto, cargarVideos };