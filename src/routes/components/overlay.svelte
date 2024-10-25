<script>
  import Overlay from '../Images/Overlay-transformed.png'
</script>

<style>
  .hero {
    position: relative; /* Asegura que el contenedor hero tenga posición relativa */
    min-height: 100vh; /* Asegura que ocupe al menos el tamaño de la ventana */
    width: 100%; /* Asegura que ocupe todo el ancho */
    overflow: hidden; /* Evita que el contenido exceda los bordes */
  }

  .hero-background {
    position: absolute; /* Coloca la imagen de fondo en posición absoluta */
    top: 0; /* Alinea la imagen en la parte superior */
    left: 0; /* Alinea la imagen a la izquierda */
    right: 0; /* Alinea la imagen a la derecha */
    bottom: 0; /* Alinea la imagen en la parte inferior */
    background-image: url('../Images/Overlay-transformed.png'); /* Usa la imagen directamente en el CSS */
    background-size: cover; /* Ajusta la imagen para cubrir el área */
    background-position: center; /* Centra la imagen */
    background-repeat: no-repeat; /* Evita la repetición de la imagen */
    z-index: 0; /* Asegura que la imagen esté detrás del contenido */
  }

  .hero-overlay {
    background-color: rgba(0, 0, 0, 0.514); /* Superposición oscura para mejorar el contraste */
    position: absolute; /* Asegura que la superposición también esté en posición absoluta */
    top: 0; /* Alinea la superposición en la parte superior */
    left: 0; /* Alinea la superposición a la izquierda */
    right: 0; /* Alinea la superposición a la derecha */
    bottom: 0; /* Alinea la superposición en la parte inferior */
    z-index: 1; /* Asegura que la superposición esté por encima de la imagen */
  }

  .hero-content {
    position: relative; /* Posicionamiento relativo para el contenido */
    z-index: 2; /* Asegura que el contenido esté por encima de la superposición */
  }
</style>

<div
  class="hero min-h-screen"
  style="background-image: url({Overlay});">
  <div class="hero-background"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold text-white">Bienvenido</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-ghost">Get Started</button>
    </div>
  </div>
</div>
