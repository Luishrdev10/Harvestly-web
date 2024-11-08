<script>
    import Image from '../Images/Imagen.png'
    import Image2 from '../Images/resized_agricultural_field.png'
</script>
<style>
    .hero {
    display: flex; /* Asegura que sea un contenedor flexible */
    flex-direction: column; /* Por defecto, apila los elementos verticalmente */
    align-items: center; /* Centra los elementos horizontalmente */
    justify-content: center; /* Centra los elementos verticalmente */
    background-color: white; /* Color de fondo */
    min-height: 100vh; /* Asegura que ocupe al menos toda la altura de la ventana */
    padding: 20px; /* Espaciado interno */
    width: 100%;
   

}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: space-between;
    gap: 20px; /* Espacio entre el texto y la imagen */
    width: 100%;
}

.hero img {
    max-width: 100%; /* La imagen no excede el ancho del contenedor */
    height: auto; /* Mantiene la relación de aspecto */
    border-radius: 16px; /* Bordes redondeados */
    margin: 20px 0; /* Espaciado alrededor de la imagen */
    margin-left: 700px;
    margin-top:20px ;
}

h1 {
    font-size: 2.5rem;
    color: #000; 
    text-align: left; /* Alinea el texto a la izquierda */
    max-width: 50%; /* Ocupa la mitad del contenedor */
    margin-right: 100px; 
    margin-top: -350px;
}

p {
    font-size: 1.5rem;
    color: #000; 
    text-align: left; /* Alinea el texto a la izquierda */
    max-width: 50%; /* Ocupa la mitad del contenedor */
    margin-right: 100px; 
    margin-top: 0px;
}
img{
    max-width: 100%;
    height: 60px;
}


/* Estilos responsivos */
@media (max-width: 768px) {
    .hero {
        flex-direction: column; /* Cambia a columnas en pantallas pequeñas */
        align-items: center; /* Centra todo en dispositivos pequeños */
    }

    .hero img {
        max-width: 100%; /* Imagen ocupa el 100% del ancho en pantallas pequeñas */
        margin: 20px 0; /* Espaciado alrededor de la imagen */
    }

    h1 {
        font-size: 2rem; /* Ajusta el tamaño del texto en pantallas pequeñas */
        text-align: center; /* Centra el texto en pantallas pequeñas */
        margin: 0 auto; /* Centra horizontalmente */
    }
    p{
        font-size: 1rem;
        max-width: 90%; /* Permite que el párrafo ocupe más espacio en pantallas pequeñas */
        margin: 0 auto;
        text-align: left;
    }
}
</style>

<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src={Image}
        class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">Por que Haverstly</h1>
        <p class="py-6">
          
        Elegimos "Harvestly" porque fusiona la idea de cosecha con un enfoque moderno y tecnológico. Refleja nuestra misión de optimizar cultivos a través de IoT, inteligencia artificial y análisis de datos, ayudando a los agricultores a tomar decisiones informadas 
        y lograr cosechas más eficientes y sostenibles.
        </p>
       
      </div>
    </div>
    
  </div>

  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src={Image2}
        class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">Descripcion</h1>
        <p class="py-6">
          
        Harvestly Combina la tradicion de la cosecha con tecnologia avanzada para transformar la agricultura dirigido a agricultores 
        y productores nuestro sistema optimiza la produccion al integrar herramientas que analizan factores ambientales 
        permiten una toma de decisiones basada en datos con Harvestly los agricultores pueden minimizar perdidas y enfrentar 
        los desafios del campo de manera eficiente y segura
        </p>
       
      </div>
    </div>
    
  </div>

  