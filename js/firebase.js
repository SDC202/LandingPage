// Importa Firebase desde el CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

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
    const solicitudesRef = ref(database, 'videos');
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

async function cargarVideos() {
  try {
    const videosRef = ref(database, 'videos');
    const snapshot = await get(videosRef);
    if (snapshot.exists()) {
      const videos = snapshot.val();

      //Conseguir referenecia al contenedor de videos
      const videoContainer = document.getElementById('video_container');
      // Recorrer e imprimir cada video
      Object.keys(videos).forEach(key => {
        const video = videos[key];

        //Contenedor principal del video
        let divMain = document.createElement('div');
        divMain.classList = "flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200";

        //Contenedor del video
        let divVideo = document.createElement('div');
        divVideo.classList = "relative w-full";
        divVideo.style = "padding-top: 56.25%"; // 16:9 aspect ratio

        let videoIframe = document.createElement('iframe');
        videoIframe.classList = "absolute inset-0 w-full h-full";
        videoIframe.src = "https://www.youtube.com/embed/" + video.youtubeId;
        videoIframe.frameBorder = "0";
        videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        videoIframe.allowFullscreen = true;

        divVideo.appendChild(videoIframe);
      
        //Contenedor de la descripción
        let divDescription = document.createElement('div');
        divDescription.classList = "p-4";

        let h3Description = document.createElement('h3');
        h3Description.classList = "font-display font-semibold text-lg text-gray-900 mb-2 leading-tight";
        h3Description.textContent = video.title;

        let pDescription = document.createElement('p');
        pDescription.classList = "text-gray-700 text-sm line-clamp-2";
        pDescription.textContent = video.description;

        let aDescription = document.createElement('a');
        aDescription.classList = "inline-block mt-4 text-sm font-heading uppercase tracking-wider text-yellow-800 hover:text-yellow-900 transition duration-150 ease-in-out";
        aDescription.href = "https://www.youtube.com/watch?v=" + video.youtubeId;
        aDescription.textContent = "Ver en YouTube";
        aDescription.target = "_blank"; // Abrir en nueva pestaña
        aDescription.rel = "noopener noreferrer"; // Seguridad al abrir en nueva pestaña

        divDescripcion.appendChild(h3Description);
        divDescripcion.appendChild(pDescription);
        divDescripcion.appendChild(aDescription);

        divMain.appendChild(divVideo);
        divMain.appendChild(divDescription);

        //Añadir el contenedor princpal al contenedor de videos
        videoContainer.appendChild(divMain);
      });
      return videos;
    } else {
      console.log('No hay videos en la base de datos.');
      return null;
    }
  } catch (error) {
    console.error('Error al cargar los videos:', error);
    return null;
  }
}

// Exporta la función junto con lo demás
export { enviarFormulario, cargarVideos };