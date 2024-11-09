<script>
    import logo from '../Images/Logo proyecto.png';
    
    function handleDetailsClose() { // este es para el menu horizontal en la opcion de acerca de nosotros 
      const details = document.querySelector('details'); // Selecciona el primer <details>
      if (details) {
          details.removeAttribute('open'); // Cierra el <details>
      }
  }
    
  

    // @ts-ignore
    function scrollToSection(sectionId, event) {
        event.preventDefault(); 
        event.stopPropagation(); 

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            console.log(`Desplazando a la sección: ${sectionId}`); // Debugging
        } else {
            console.warn(`Sección no encontrada: ${sectionId}`);
        }
    }

    // @ts-ignore
    function reloadpage(event) {
        event.stopPropagation();
        window.location.reload(); 
    }
  
  </script>
  <style>
  
     .navbar.bg-base-100 { 
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 14px;
    width: 100%; 
    margin: 0 auto;
    background-clip: padding-box; 
    position: relative;
    box-sizing: border-box; 
}

.navbar-start {
    position: relative;
}

.text-xl {
    position: relative;
    left: 3%;
}

.mask {
    position: relative;
    width: 50px;
    height: 50px; /* Asegúrate de que tenga un tamaño */
    background: linear-gradient(to right, #286d0a, #7ab317);
    border-radius: 50%; /* Asegúrate de que sea circular */
}

.p-2 {
    position: absolute;
    width: 98%;
    border-radius: 5%;
    transition: opacity 0.3s ease, transform 0.3s ease;
    height:auto;
    z-index: 2;
}

.navbar-center {
    display: flex;
    justify-content: center; /* Centra el contenido */
    align-items: center; /* Alinea verticalmente */
}


@media (max-width: 768px){
   .navbar-center {
    display: none;
}
}
  
   
  </style>
  
  <div class="navbar bg-base-100">
      <div class="navbar-start">
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={logo} alt="Logo del proyecto" class="mask mask-circle" />
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="text-xl">Harvestly</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-invalid-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <li><a on:click={reloadpage}>Inicio</a></li>
          <li>
            <details>
              <summary >Acerca de nosotros</summary>
              <ul class="p-2">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <li><a on:click={(event) => { scrollToSection('mision', event); handleDetailsClose(); }}>Mision</a></li>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <li><a on:click={(event) => { scrollToSection('vision', event); handleDetailsClose(); }}>Vision</a></li>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <li><a on:click={(event) => { scrollToSection('historia', event); handleDetailsClose(); }}>Historia</a></li>
                  
              </ul>
            </details>
          </li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <li><a on:click={(event) => { scrollToSection('quienes-somos', event)}}>Quienes Somos</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <li><a on:click={(event) => { scrollToSection('contacto', event)}}>Contacto</a></li>
        </ul>
      </div>
      <div class="navbar-end">
       
      </div>
      
    </div>