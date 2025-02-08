<template>
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 from-5% to-neutral-950">
      <div class="h-full w-full flex flex-col lg:flex-row items-center px-8">
  
        <div class="flex items-center justify-start h-full">
          <ul class="min-w-40 font-mono font-bold rounded-xl bg-neutral-900 text-neutral-200 space-y-4 p-4">
  
            <li class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800">
              <div class="pl-2">
                <img src="@/assets/icons/Mirage.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
              </div>
               Mirage 
            </li>
  
            <li class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800">
              <div class="pl-2">
                <img src="@/assets/icons/Dust2.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
              </div>
               Dust2 
            </li>
  
            <li class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800">
              <div class="pl-2">
                <img src="@/assets/icons/Nuke.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
              </div> 
              Nuke 
            </li>
            
            <router-link
            to="/Inferno"
            class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800"
          >
            <div class="pl-2">
              <img src="@/assets/icons/Inferno.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
            </div>
            Inferno
          </router-link>
          </ul>
        </div>
  
        <div class="flex justify-center items-center px-4 lg:px-20">
          <img 
            src="@/assets/Maps/Inferno.webp" 
            alt="Right Side Image" 
            :class="['rounded-lg shadow-lg transition-opacity duration-1000 ease-in w-auto max-w-full sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%]', ImageClass]" 
          />

        </div>

  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ImageClass: 'opacity-0'
      };
    },
    mounted() {
      setTimeout(() => {
        this.ImageClass = 'opacity-100';
      }, 100);
    },
  };
  </script>
  
  <style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>