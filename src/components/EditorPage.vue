<template>
    <div class="bg-gray-900 min-h-screen text-white">
      <nav class="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 class="text-xl font-bold tracking-tighter">Mijhail A. <span class="text-red-500">Editor</span></h1>
        <router-link to="/" class="text-sm text-gray-400 hover:text-white">Ver Portafolio Programador →</router-link>
      </nav>
  
      <div class="max-w-6xl mx-auto px-8 py-12">
        <header class="mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4">Edición con Enfoque en <span class="text-red-500">Retención</span></h2>
          <p class="text-gray-400 max-w-2xl text-lg">
            No solo edito videos, optimizo contenido para los algoritmos de YouTube y TikTok. 
            Especialista en nichos de desarrollo personal y psicología.
          </p>
        </header>
  
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card v-for="proyecto in videosSolo" :key="proyecto.id" :proyecto="proyecto" />
        </div>
      </div>
    </div>


    <div class="bg-white py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-4">Servicios de Ingeniería de Contenido</h2>
        <p class="text-center text-gray-600 mb-12">Soluciones de alto rendimiento para creadores que buscan escala y retención.</p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="border rounded-2xl p-8 hover:shadow-2xl transition shadow-lg">
            <h3 class="text-xl font-bold mb-2">Viral Retention</h3>
            <p class="text-4xl font-extrabold mb-6">$250<span class="text-base font-normal text-gray-500">/mes</span></p>
            <ul class="text-sm space-y-3 mb-8 text-gray-600">
              <li>• 10 Videos cortos (1-2 min)</li>
              <li>• B-roll de Anime/Stock incluido</li>
              <li>• Subtítulos dinámicos optimizados</li>
              <li>• Limpieza de audio con Audacity</li>
            </ul>
          </div>

          <div class="border-2 border-brand rounded-2xl p-8 shadow-xl relative scale-105 bg-gray-50">
            <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Más Popular</span>
            <h3 class="text-xl font-bold mb-2">Ecosistema Digital</h3>
            <p class="text-4xl font-extrabold mb-6">$500<span class="text-base font-normal text-gray-500">/inicio</span></p>
            <ul class="text-sm space-y-3 mb-8 text-gray-700 font-medium">
              <li>• Landing Page en Vue.js (Frontend)</li>
              <li>• Hosting en Vercel incluido</li>
              <li>• 10 Videos del primer mes</li>
              <li>• Optimización de Retención (IA)</li>
            </ul>
          </div>

          <div class="border rounded-2xl p-8 hover:shadow-2xl transition shadow-lg">
            <h3 class="text-xl font-bold mb-2">Custom Frontend</h3>
            <p class="text-4xl font-extrabold mb-6">$350<span class="text-base font-normal text-gray-500">/proyecto</span></p>
            <ul class="text-sm space-y-3 mb-8 text-gray-600">
              <li>• SPA personalizada (Vue/React)</li>
              <li>• Diseño 100% Adaptativo</li>
              <li>• Integración de Media (YouTube/API)</li>
              <li>• Despliegue en producción</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import Card from './Card.vue';
  import { proyectosDestacados } from '@/data/proyectosDestacados';
  import { computed } from 'vue';
  
  // Filtramos solo los proyectos que marcamos como 'video'
  const videosSolo = computed(() => {
    return proyectosDestacados.filter(p => p.tipo === 'video');
  });
  </script>