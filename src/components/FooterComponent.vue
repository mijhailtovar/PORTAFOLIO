<template>
    <footer class="bg-gray-900 text-brand-dark py-12">
      <div class="container mx-auto px-4">
        
        <div class="text-center mb-8">
          <h2 class="text-4xl font-extrabold text-brand tracking-tight">
            Contáctame
          </h2>
          <p class="text-gray-400 mt-2 text-lg">
            Puedes encontrarme en las siguientes plataformas:
          </p>
        </div>
  
        <div class="flex justify-center space-x-8">
          
          <a 
            :href="socials.linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-indigo-500 transition duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg class="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.33-4 0v5.604h-3v-11h3v1.765c1.398-2.54 7-2.715 7 2.376v6.859z"/></svg>
          </a>
  
          <a 
            :href="socials.github" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-indigo-500 transition duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg class="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.865 8.169 6.837 9.48.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.341-3.37-1.341-.454-1.155-1.11-1.464-1.11-1.464-.908-.619.068-.606.068-.606 1.002.07 1.53.84 1.53.84.89 1.53 2.341 1.085 2.91.83.091-.645.351-1.085.637-1.336-2.224-.251-4.555-1.112-4.555-4.945 0-1.09.39-1.986 1.03-2.685-.104-.251-.447-1.272.097-2.648 0 0 .84-.27 2.75 1.025.798-.222 1.635-.333 2.47-.337.835.004 1.672.115 2.47.337 1.91-1.295 2.75-1.025 2.75-1.025.544 1.376.202 2.397.097 2.648.64.699 1.03 1.595 1.03 2.685 0 3.844-2.333 4.69-4.566 4.943.359.309.678.92.678 1.855 0 1.341-.012 2.417-.012 2.747 0 .267.18.577.688.481C21.135 20.169 24 16.417 24 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/></svg>
          </a>
          
          <a 
            :href="socials.instagram" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-indigo-500 transition duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <svg class="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm4.5-11.5c0 .276-.224.5-.5.5h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5zm0 3c0 .276-.224.5-.5.5h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5zm-4.5 3c0 .276-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5z"/></svg>
          </a>
  
          <a 
            :href="socials.facebook" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-indigo-500 transition duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <svg class="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm3.5 6h-2.5v2.5h2.5V12h-2.5v7h-3v-7h-2v-2.5h2V8.5c0-1.657 1.343-3 3-3h3v2.5z"/></svg>
          </a>
        </div>
  
        <div class="text-center mt-10 border-t border-gray-700 pt-6">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} Mijhail A. Tovar. Todos los derechos reservados.
          </p>
        </div>
  
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        // 🚨 IMPORTANTE: Reemplaza estas URLs con tus enlaces reales 🚨
        socials: {
          linkedin: 'https://www.linkedin.com/in/mijhail-tovar-877110378?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbK0iGZJxR7ShrUmpKL7WZw%3D%3D',
          github: 'https://github.com/mijhailtovar',
          instagram: 'https://www.instagram.com/locktovar?igsh=MTh3cGV0eWpnc24wYQ==',
          facebook: 'https://www.facebook.com/mijhail.tovar/',
        },
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si fueran necesarios, pero Tailwind debería manejarlo */
  </style>