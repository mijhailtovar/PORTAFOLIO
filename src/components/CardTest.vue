<template>
    <div class="card bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-100 flex flex-col">
      
        <a :href="proyecto.link" target="_blank" rel="noopener noreferrer" class="block">
        <div class="w-full h-48 sm:h-56 lg:h-64 overflow-hidden"> 
            <img 
            :src="getImagePath(proyecto.imageUrl)" 
            :alt="proyecto.imageAlt" 
            class="w-full h-full object-cover object-center"
            />
        </div>
        
        <div class="p-4 flex-grow flex flex-col justify-between">
            <h3 class="text-xl lg:text-2xl font-semibold text-gray-800 mb-1">{{ proyecto.nombre }}</h3>
            
            <p class="text-sm lg:text-xl font-semibold text-gray-700 mb-4 flex-grow">
            {{ proyecto.descripcion }}
            </p>
    
            <div class="mt-auto">
                <span class="block text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-150">
                    Ver Proyecto
                </span>
            </div>

        </div>
        </a>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
      proyecto: {
          type: Object, 
          required: true
      }
  });
  
  const getImagePath = (imageName) => {
    // Asegúrate de que esta ruta sea correcta para tus imágenes
    // Si tus imágenes están en 'src/assets/images/', usa '/src/assets/images/'
    // Si están en 'public/images/', usa '/images/'
    return `/src/assets/${imageName}`; 
  };
  </script>
  
  <style scoped>
  /* No se necesitan estilos aquí si usas Tailwind */
  </style>
  