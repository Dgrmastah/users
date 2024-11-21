// script.js


async function obtenerUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await response.json();
      
    
      mostrarUsuarios(usuarios);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }
  
  
  function mostrarUsuarios(usuarios) {
    const listaUsuarios = document.getElementById('listaUsuarios');
    
    usuarios.forEach(usuario => {
     
      const li = document.createElement('li');
      li.classList.add('usuario');
      
      
      const edad = generarEdadAleatoria();
      
      
      li.innerHTML = `
        <img src="assets/img/${usuario.id}.jpeg" alt="Imagen de ${usuario.name}">
        <div>
          <h3>${usuario.name}</h3>
          <p>Edad: ${edad} años</p>
          <div class="info">
            <p><strong>Username:</strong> ${usuario.username}</p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
          </div>
          <div class="info">
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Compañía:</strong> ${usuario.company.name}</p>
          </div>
          <p class="address"><strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</p>
        </div>
      `;
      
      
      listaUsuarios.appendChild(li);
    });
  }
  
  
  function generarEdadAleatoria() {
    return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
  }
  
  
  obtenerUsuarios();
  