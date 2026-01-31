<!--
<template>
    <div class="card bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-100 flex flex-col">
      
        <a :href="proyecto.link" target="_blank" rel="noopener noreferrer" class="block">
        <div class="w-full h-48 sm:h-56 lg:h-64 overflow-hidden"> 
            <img 
            :src="proyecto.imageUrl" 
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
  
  </script>
  
  <style scoped>
  /* No se necesitan estilos aquí si usas Tailwind */
  </style>
  
-->



  <template>
    <div class="card bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-100 flex flex-col h-full">
      
        <div class="w-full h-48 sm:h-56 lg:h-64 overflow-hidden relative bg-black">
            
            <template v-if="proyecto.tipo === 'video'">
                <video 
                    ref="videoPlayer"
                    @mouseenter="playPreview" 
                    @mouseleave="stopPreview"
                    :poster="proyecto.thumbnail"
                    muted 
                    loop
                    class="w-full h-full object-cover cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                >
                    <source :src="proyecto.videoPreview" type="video/mp4">
                    Tu navegador no soporta videos.
                </video>
                <div class="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                    Video Edit
                </div>
            </template>

            <template v-else>
                <img 
                    :src="proyecto.imageUrl" 
                    :alt="proyecto.imageAlt" 
                    class="w-full h-full object-cover object-center"
                />
                <div class="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                    Full Stack
                </div>
            </template>
        </div>
        
        <div class="p-4 flex-grow flex flex-col">
            <h3 class="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">{{ proyecto.nombre }}</h3>
            
            <p class="text-sm lg:text-base text-gray-600 mb-4 flex-grow leading-relaxed">
                {{ proyecto.descripcion }}
            </p>

            <div v-if="proyecto.metrica" class="mb-4 flex items-center p-2 bg-green-50 rounded-lg border border-green-100">
                <div class="flex-shrink-0 bg-green-500 rounded-full p-1">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                </div>
                <span class="ml-2 text-xs font-bold text-green-700 uppercase tracking-tighter">
                    {{ proyecto.metrica }}
                </span>
            </div>

            <div class="mt-auto">
                <a :href="proyecto.link" target="_blank" rel="noopener noreferrer" 
                   class="block text-center font-bold py-2 px-4 rounded-lg shadow-md transition duration-150"
                   :class="proyecto.tipo === 'video' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
                   {{ proyecto.tipo === 'video' ? 'Ver Edición' : 'Ver Proyecto' }}
                </a>
            </div>

            <div v-if="proyecto.tipo === 'video'" class="mt-4 mb-6">
                <p class="text-[10px] text-gray-400 uppercase font-bold mb-2">Curva de Retención Promedio</p>
                <div class="h-16 w-full bg-gray-50 rounded flex items-end px-1 pb-1">
                    <svg viewBox="0 0 100 40" class="w-full h-full text-green-500 drop-shadow-sm">
                    <path 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="3" 
                        stroke-linecap="round"
                        d="M0 5 Q 10 5, 20 15 T 40 20 T 60 22 T 80 25 T 100 25" 
                    />
                    </svg>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { defineProps, ref } from 'vue';
  
const props = defineProps({
    proyecto: {
        type: Object, 
        required: true
    }
});

// Referencia al elemento de video para controlar el Play/Pause
const videoPlayer = ref(null);

const playPreview = () => {
    if (videoPlayer.value) {
        videoPlayer.value.play().catch(error => {
            console.log("Auto-play prevenido por el navegador:", error);
        });
    }
};

const stopPreview = () => {
    if (videoPlayer.value) {
        videoPlayer.value.pause();
        videoPlayer.value.currentTime = 0; // Reinicia el video al salir
    }
};
</script>