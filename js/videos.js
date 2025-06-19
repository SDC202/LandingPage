import { cargarVideos } from './firebase.js';

async function insertarVideos(){
    const videos = await cargarVideos();

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
        videoIframe.src = "https://www.youtube.com/embed/" + video.youtube_id;
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
        aDescription.href = "https://www.youtube.com/watch?v=" + video.youtube_id;
        aDescription.textContent = "Ver en YouTube";
        aDescription.target = "_blank"; // Abrir en nueva pestaña
        aDescription.rel = "noopener noreferrer"; // Seguridad al abrir en nueva pestaña

        divDescription.appendChild(h3Description);
        divDescription.appendChild(pDescription);
        divDescription.appendChild(aDescription);

        divMain.appendChild(divVideo);
        divMain.appendChild(divDescription);

        //Añadir el contenedor princpal al contenedor de videos
        videoContainer.appendChild(divMain);
    });
}

(function() {
    insertarVideos();
})();