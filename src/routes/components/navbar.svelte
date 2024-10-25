<script>
    import logo from '../Images/Logo proyecto.png';
    
    function handleDetailsClose() {
      const details = document.querySelector('details'); // Selecciona el primer <details>
      if (details) {
          details.removeAttribute('open'); // Cierra el <details>
      }
  }
    
  let menuOpen = false;

// @ts-ignore
function handleMenuToggle(event) {
   event.stopPropagation(); // evita que se cierre el menu
    menuOpen = !menuOpen; 
    console.log(menuOpen ? 'open' : 'close'); // imprime si esta cerrado o abierto el menu 
    const checkbox = document.getElementById('menu-toggle'); // checkbox del menu 

    // @ts-ignore
    checkbox.checked = menuOpen;

    if (menuOpen) {
        document.body.addEventListener('click', handleMenuClose); 
    } else {
        document.body.removeEventListener('click', handleMenuClose);
    }
}

function handleMenuClose() {
  menuOpen = false;
  const checkbox = document.getElementById('menu-toggle');
    if (checkbox) {
      // @ts-ignore
      checkbox.checked = false;
    }
    document.body.removeEventListener('click', handleMenuClose);
  }


  
  
  // @ts-ignore
  function scrollToSection(sectionId, event) {
  event.preventDefault();
    event.stopPropagation(); 
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // Primero hacemos scroll
     setTimeout(() => {
            section.classList.add('visible'); // Agregar clase 'visible' para la transición
            handleMenuClose(); // Cerrar el menú después de un pequeño delay
        }, 300);
     
  } else {
    console.warn(`Section not found: ${sectionId}`);
  }
}

// Recargar página y cerrar menú con delay
// @ts-ignore
function reloadpage(event) {
  event.preventDefault();
  setTimeout(() => {
    window.location.reload(); // Recargamos la página con delay
    handleMenuClose(); // Cerramos el menú
  }, 300); // Delay ajustable si es necesario
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
.dropdown{
  display:none;
}


@media (max-width: 768px){
  .dropdown{
  display:block;
}
  .navbar-center {
    display: none;
}
.hamburger {
    position: relative;
    pointer-events: auto; 
}

.hamburger input {
    display: none;
}

.hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
    stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
    transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
}

.dropdown-content {
    width: 200px;
}

.dropdown-content .p-2 {
    position: relative;
    z-index: 2;
}

.btn-ghost {
    width: 100%;
    position: relative;
}

.hidden {
    pointer-events: auto;
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
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <div tabindex="0" class="btn btn-ghost lg:hidden"on:click|stopPropagation={handleMenuToggle}>
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <label class="hamburger"  for="menu-toggle" style="pointer-events: none;">
              <input type="checkbox" id="menu-toggle" class="hidden" />
              <svg viewBox="0 0 32 32" class="w-6 h-6">
                <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
          {#if menuOpen}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <ul class="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-48">
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a on:click={(event) => { event.stopPropagation(); reloadpage(); }}>Inicio</a></li>
            
            <li>
              <details on:click|stopPropagation >
                <summary>Acerca de nosotros</summary>
                <ul class="p-2">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <li><a on:click={(event) => { scrollToSection('mision', event); handleDetailsClose(); }}>Misión</a></li>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <li><a on:click={(event) => { scrollToSection('mision', event); handleDetailsClose(); }}>Visión</a></li>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <li><a on:click={(event) => { scrollToSection('mision', event); handleDetailsClose(); }}>Historia</a></li>
                </ul>
              </details>
            </li>
            
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a on:click={(event) => { scrollToSection('contacto', event); handleDetailsClose(); }}>Contacto</a></li>
          </ul>
          {/if}
        </div>
     
      </div>
      
    </div>