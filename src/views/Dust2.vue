<template>
  <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 from-5% to-neutral-950">
    <div class="h-full w-full flex flex-col lg:flex-row items-center gap-8">

      <div class="hidden xl:flex items-center justify-start h-full">
        <ul class="min-w-40 font-mono font-bold rounded-r-xl bg-neutral-900 text-neutral-200 space-y-4 p-4">
          <router-link
            to="/Mirage"
            class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800"
          >
            <div class="pl-2">
              <img src="@/assets/icons/Mirage.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
            </div>
            Mirage
          </router-link>
          <router-link
            to="/Dust2"
            class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out bg-neutral-600"
          >
            <div class="pl-2">
              <img src="@/assets/icons/Dust2.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
            </div>
            Dust 2
          </router-link>
          <router-link
            to="/Nuke"
            class="min-h-10 flex items-center justify-left gap-2 rounded-lg transition-colors duration-300 ease-out hover:bg-neutral-800"
          >
            <div class="pl-2">
              <img src="@/assets/icons/Nuke.webp" alt="icon" class="w-6 h-6 inline-block mr-2" />
            </div>
            Nuke
          </router-link>
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

      <div class="flex-col lg:flex-row flex gap-15 md:gap-0 justify-center md:justify-left items-center">
        <div class="relative max-w-[90%] md:max-w-[45%]">
          <img 
            src="@/assets/Maps/Dust2.webp" 
            alt="Map Image" 
            :class="['rounded-lg shadow-lg border-2 border-blue-950']" 
          />

          <div class="absolute top-[37.5%] left-[45.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(1)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">1</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[45%] left-[81.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(2)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">2</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[30.5%] left-[86%] w-[5%] h-[3%]">
            <button @click="changeSmoke(3)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">3</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[22%] left-[78%] w-[5%] h-[3%]">
            <button @click="changeSmoke(4)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">4</span>
              </div>
            </button>
          </div>

          
          <div class="absolute top-[22%] left-[45.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(5)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">5</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[14.5%] left-[77.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(6)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">6</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[25.5%] left-[12.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(7)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">7</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[10.5%] left-[23.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(8)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">8</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[18.5%] left-[8.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(9)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">9</span>
              </div>
            </button>
          </div>

          <div class="absolute top-[21.5%] left-[21.5%] w-[5%] h-[3%]">
            <button @click="changeSmoke(10)">
              <div class="relative w-full h-full rounded-full flex justify-center items-center transition-opacity opacity-50 hover:opacity-100">
                <img src="@/assets/icons/Smoke.svg" class="w-full h-full object-contain rounded-full" />
                <span class="absolute text-black font-bold text-[1vw]">10</span>
              </div>
            </button>
          </div>

        </div>

        <div class="relative max-w-[100%] md:max-w-[90%]">
          <img 
            :src="`/src/assets/Maps/Smokes/Dust2/${ActiveSmoke}.PNG`" 
            alt="Smoke View" 
            class="rounded-xl shadow-lg border-4 border-yellow-900" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ActiveSmoke: 1,
      AutoSmoke: 1,
    };
  },
  methods: {
    changeSmoke(smokeNumber) {
      this.ActiveSmoke = smokeNumber;
    }
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
  font: inherit;
}

button {
  all: unset;
}
</style>
