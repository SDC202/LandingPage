import { enviarFormulario } from './firebase.js';

function habilitarFormulario() {
  const form = document.getElementById('formulario_arreglo');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      name: form.elements['name'].value,
      email: form.elements['email'].value,
      songTitle: form.elements['song-title'].value,
      artist: form.elements['artist'].value,
      instrumentation: form.elements['instrumentation'].value,
      style: form.elements['style'].value,
      mood: form.elements['mood'].value,
      duration: form.elements['duration'].value,
      audioLink: form.elements['audio-link'].value,
      deadline: form.elements['deadline'].value,
      notes: form.elements['notes'].value
    };

    // Aquí puedes hacer lo que necesites con formData
    console.log(formData);
    
    // Enviar el formulario a Firebase
    if( enviarFormulario(formData) ){
      console.log('Formulario enviado correctamente');
      form.reset(); // Limpiar el formulario después de enviar
      document.getElementById('form_response_success').classList.remove('hidden');
      document.getElementById('form_response_failure').classList.add('hidden');
    }
    else {
      console.error('Error al enviar el formulario');
      document.getElementById('form_response_failure').classList.remove('hidden');
      document.getElementById('form_response_success').classList.add('hidden');
    }
    
  });
  console.log('Formulario habilitado correctamente!');
}

(function() {
    habilitarFormulario();
})();