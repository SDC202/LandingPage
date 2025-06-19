import { enviarContacto } from './firebase.js';

function habilitarContacto() {
  console.log('Habilitando formulario de contacto...');

  const form = document.getElementById('formulario_contacto');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      name: form.elements['name'].value,
      email: form.elements['email'].value,
      message: form.elements['message'].value
    };

    console.log(formData);
    
    // Enviar el formulario a Firebase
    if( enviarContacto(formData) ){
      console.log('Formulario de contacto enviado correctamente!');
      form.reset(); // Limpiar el formulario después de enviar
      document.getElementById('contact_response_success').classList.remove('hidden');
      document.getElementById('contact_response_failure').classList.add('hidden');
    }
    else {
      console.error('Error al enviar el formulario de contacto');
      document.getElementById('contact_response_failure').classList.remove('hidden');
      document.getElementById('contact_response_success').classList.add('hidden');
    }
    
  });
  console.log('Formulario de contacto habilitado!');
}



(function() {
  habilitarContacto();
})();