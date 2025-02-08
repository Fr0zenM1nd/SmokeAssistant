<template>
  <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 from-5% to-neutral-950">
    <div class="h-full flex flex-col lg:flex-row items-center lg:justify-between px-8">

      <div class="w-30 flex items-center justify-start h-full">
        <ul class="font-mono font-bold rounded-xl bg-neutral-900 text-neutral-200 space-y-4 p-4">
          <li 
            v-for="item in items" 
            :key="item.id" 
            @click="selectItem(item.id)"
            :class="[ 
              'p-4 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out',
              selectedItem === item.id ? 'bg-neutral-600' : 'hover:bg-neutral-800'
            ]"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>

      <div class="flex justify-center items-center">
        <img 
          src="@/assets/FrozenMind.png" 
          alt="Right Side Image" 
          :class="['rounded-lg shadow-lg transition-opacity duration-1000 ease-in', ImageClass]" 
        />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: "Mirage" },
        { id: 2, title: "Nuke" },
        { id: 3, title: "Inferno" }
      ],
      selectedItem: null,
      ImageClass: 'opacity-0'
    };
  },
  mounted() {
    setTimeout(() => {
      this.ImageClass = 'opacity-100';
    }, 100);
  },
  methods: {
    selectItem(id) {
      this.selectedItem = this.selectedItem === id ? null : id;
    }
  }
};
</script>

