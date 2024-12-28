<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4 mt-6">
      <div 
        v-for="panda in pandas" 
        :key="panda.id" 
        class="border p-4 w-44 bg-green-700 rounded-lg shadow-md">
        <h3 class="font-bold text-xl mb-2">{{ panda.name }}</h3>
        <p class="text-sm text-black">Nem: {{ panda.sex }}</p>
        <p class="text-sm text-black">Kor: {{ panda.age }} év</p>
        <p class="text-sm text-black">Születési dátum: {{ panda.birth }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PandaList',
  data() {
    return {
      pandas: [], // Az adatok tárolása
    };
  },
  methods: {
    // Az adatok lekérése az API-ból
    async fetchPandas() {
      try {
        const response = await fetch(`http://backend.vm1.test/api/pandas`);
        const data = await response.json();
        this.pandas = data.data; // Az API válaszából a pandas tömbbe mentjük az adatokat
      } catch (error) {
        console.error('Hiba az adatok lekérésekor:', error);
      }
    },
  },
  mounted() {
    this.fetchPandas(); // Adatok lekérése, amikor a komponens betöltődik
  },
};
</script>
