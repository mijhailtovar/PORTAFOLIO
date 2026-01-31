<template>
  <div>
    <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img 
            className="h-16 w-16 rounded-full object-cover shadow-md" 
            src="/images/mijhail_avatar.png" 
            alt="Avatar de Mijhail A. Tovar" 
          />
          <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-96 sm:w-full sm:object-cover object-center lg:hidden"
            src="/images/imagen_mijhail.jpg" alt="Woman workcationing on the beach" />
          
          <h1 
            className="mt-6 text-2xl font-headline tracking-light font-semibold text-gray-900 
            sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            Mijhail A. Tovar
            <br className="hidden lg:inline" /> <span className="text-brand">Ingeniero de Sistemas & Full Stack</span>
          </h1>
          <router-link to="/editor" class="text-sm text-gray-800 hover:text-blue-500">Ver Portafolio de edicion de videos →</router-link>
          
          <div class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
    
              <p>Con una sólida base en arquitectura y desarrollo de software.</p>

              <p class="mt-3">
                  Mi versatilidad abarca el frontend con Vue, React y Angular, y el backend con Node.js, Python/Django y PHP, incluyendo experiencia en proyectos MVC y desarrollo nativo.
              </p>

              <p class="mt-3">
                  Domino bases de datos SQL y MongoDB, asegurando soluciones robustas, escalables y eficientes en cualquier entorno tecnológico.
              </p>
              <p class="mt-3">
                  Experiencia Full Stack 💻 y Diseño Adaptativo (Responsive Design). Te invito a reducir el ancho de esta ventana para ver cómo el diseño se ajusta perfectamente a dispositivos móviles y tablets.
              </p>

          </div>
          
          <div className="mt-8 lg:mt-20 xl:mt-24 flex justify-center lg:justify-start max-h-20">
             <button
                @click="scrollToProjects"
                className="
                  w-60 mx-auto flex items-center justify-center p-3 rounded-full 
                  bg-brand text-white shadow-xl 
                  hover:bg-brand-dark transition duration-300 ease-in-out
                  focus:outline-none focus:ring-4 focus:ring-brand focus:ring-opacity-50
                  animate-bounce 
                "
                aria-label="Ver Proyectos"
              >Explora mis proyectos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
          </div>
          </div>
      </div>
      
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/imagen_mijhail.jpg" alt="Woman workcationing on the beach" />
      </div>
    </div>

    <div id="proyectos" className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-2xl lg:text-3xl text-gray-900">Proyectos Destacados</h2>
      <p className="mt-2 sm:text-xl text-gray-600">Una muestra de mis proyectos más recientes y representativos, demostrando mi experiencia en desarrollo Full Stack.</p>
      <div className="mt-6 grid gap-6 grid-cols-1 xl:grid-cols-2">

        <Card v-for="proyecto in proyectosDestacados" :key="proyecto.id" :proyecto="proyecto" />

      </div>
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue';

import { proyectosDestacados } from '@/data/proyectosDestacados';

// FUNCIÓN DE JAVASCRIPT PARA EL SCROLL SUAVE
const scrollToProjects = () => {
  const projectsSection = document.getElementById('proyectos');
  if (projectsSection) {
    projectsSection.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
};
</script>