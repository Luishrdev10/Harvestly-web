<script>

</script>

<style>

.father-container {
    display: flex;
    flex-direction: column; /* Alinear columnas */
    align-items: center; /* Centrar horizontalmente */
    padding: 0 10px; /* Relleno adicional alrededor */
    margin: 0 auto;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 120px 0; /* Margen vertical entre los contenedores */
    padding: 20px; /* Reduce el padding para evitar que se quede sin espacio */
    background-color: #ffffff; 
    border: none; /* Sin borde */
    border-radius: 16px; /* Bordes más redondeados */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Efecto de hover */
    position: relative;
}

.hero {
    border-radius: 16px; /* Bordes redondeados */
    padding: 5%; /* Reduce el padding interno */
    margin: 20px auto; /* Margen superior e inferior para espacio adicional */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    display: flex; /* Usa flexbox para el contenedor */
    flex-direction: column; /* Alineación en columnas */
    align-items: center; /* Centra los elementos en el eje horizontal */
    width: 90%; /* Ancho del contenedor al 90% de su contenedor padre */
    max-width: 1200px; /* Ancho máximo para evitar que sea demasiado ancho */
    box-sizing: border-box; /* Incluye padding en el cálculo del ancho */
}

.hero-content {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
    justify-content: center;
    padding: 0; /* Espaciado vertical */
    width: 100%;
    min-height: 400px; /* Cambiado a min-height para evitar perder espacio */
    position: relative;
}

.hero img {
    width: 100%; 
    max-width: 300px; 
    height: auto;
    border-radius: 16px; 
    order: 2;
    flex-shrink: 0;
    position: relative;
    object-fit: cover;
}

h1 {
    font-size: 2.5rem; 
    color: #000000; 
    margin: 3rem 0 10px; /* Ajuste de márgenes */
    text-align: center; /* Asegúrate de que el texto esté centrado */
    position: relative;
}

h1::after {
    content: ''; 
    position: absolute; 
    left: -70px; /* Ajuste para alineación correcta */
    bottom: -5px; 
    width: 90%; 
    height: 4px; 
    background-color: #09ac31; 
    animation: moveLine 5s linear infinite; 
    opacity: 0;
}

@keyframes moveLine {
    0% {
        transform: translateX(0); 
        opacity: 0;
    }
    50% {
        transform: translateX(50%); 
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
    
}

.py-6 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem; 
    color: #666; 
    margin: 0; 
    text-align: center; /* Asegúrate de que el texto esté centrado */
    line-height: 1.6; 
    max-width: 90%; /* Permite que el párrafo ocupe más espacio en pantallas pequeñas */
    margin: 0 auto; /* Centrando el texto */
}

.text-align {
    display: flex;
    flex-direction: column;
    white-space: normal; 
    word-wrap: break-word; 
    margin: 0 auto; /* Centrando el texto */
}

@media (max-width: 768px) {
    h1 {
        font-size: 2rem; /* Ajusta el tamaño del texto en pantallas más pequeñas */
        margin: 0 auto;
    }

    .hero img {
        max-width: 60%; /* Ajusta la imagen para que se adapte al contenedor */
       
    }

    .py-6 {
        max-width: 90%; /* Permite que el párrafo ocupe más espacio en pantallas pequeñas */
        margin: 0 auto;
        text-align: left;
    }
    
}

</style>
    
   

<div class="father-container">
    <div class="container">
        <div class="hero">
            <div class="hero-content" id="quienes-somos">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img 
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    class="max-w-sm rounded-lg shadow-2xl" />
                
                <h1 class="text-5xl font-bold" >Quienes Somos</h1>
                <p class="py-6">
                    <span class="text-align">
                        Provident cupiditate voluptatem et in. 
                        Quaerat fugiat ut assumenda excepturi exercitationemquasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. 
                        Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. 
                        Quaerat fugiat ut assumenda excepturi exercitationemquasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. 
                        Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </span>
                </p>
            </div>
             
        </div>
        
        <div class="hero">
            <div class="hero-content" id="historia">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    class="max-w-sm rounded-lg shadow-2xl" />
                <h1 class="text-5xl font-bold">Historia</h1>
                <p class="py-6">
                    <span class="text-align">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </span>
                </p>
            </div>
        </div>
        
        <div class="hero">
            <div class="hero-content" id="mision">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    class="max-w-sm rounded-lg shadow-2xl" />
                <h1 class="text-5xl font-bold">Mision</h1>
                <p class="py-6">
                    <span class="text-align">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </span>
                </p>
            </div>
        </div>

        <div class="hero">
            <div class="hero-content" id="vision">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    class="max-w-sm rounded-lg shadow-2xl" />
                <h1 class="text-5xl font-bold">Vision</h1>
                <p class="py-6">
                    <span class="text-align">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>
