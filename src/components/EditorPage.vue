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