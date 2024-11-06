<style>

.footer {
    position: relative;
    padding: 20px; /* Ajusta el padding según tus necesidades */
    margin: 0; /* Elimina margen adicional */
    text-align: center; /* Centra el texto en el footer */
    background: white;
   
    
}

.footer nav {
    margin: 10px 0; /* Espaciado entre secciones de navegación */
    margin-left: 150px;
   
    

}

.footer-title {
    font-weight: bold; /* Resalta los títulos de las secciones */
    color:  #3abe02;
   
    
    
}




/* Estilos para los íconos sociales */

@media (max-width: 768px) {
    
  .footer nav {
    display:flex-box;
    margin: 0 auto;
    
}
  .footer-title{
    display:flex-box;
    margin: 0 auto;
  }
  a{
    display:flex-box;
    margin: 0 auto;
  }
}
</style>
<footer class="footer bg-base-300 text-base-content p-10" id="contacto">
    <nav>
      <h6 class="footer-title">Servicios</h6>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Monitoreo de Cultivos</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Tecnologia Iot</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Analisis de datos</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Inteligencia artificial</a>
    </nav>
    <nav>
      <h6 class="footer-title">Compañia</h6>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Acerca de nosotros</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Quienes Somos</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Vision</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a >Mision</a>
    </nav>
    <nav>
      <h6 class="footer-title">Derechos de autor</h6>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a > © 2024 Harvestly. Todos los derechos reservados.</a>
    </nav>
    
  </footer>