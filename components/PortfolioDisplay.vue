<template>
  <div class="mt-10">
    <div class="grid grid-cols-1 gap-1 place-items-center">
      <div class="flex gap-4 bg-surface-portfoliocard text-black p-3 rounded-md w-10/12" v-for="data in githubData" :key="githubData">
        <a class="self-center" :href="data.html_url" target="_blank" rel="noopener noreferrer" aria-label="Schau dir das Projekt auf GitHub an">
          <GitHubIcon class="text-4xl" />
        </a>
        <div class="mx-auto">
          <h3 class="text-2xl md:text-3xl lg:text-4xl">{{ data.name }}</h3>
          <p>{{ data.description }}</p>
        </div>
        <div class="self-center">
          <p v-if="data.language === 'Vue'"><VueIcon class="text-4xl" /></p>
          <p class="text-4xl" v-else>{{ data.language }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import GitHubIcon from '~icons/logos/github-icon'
import VueIcon from '~icons/vscode-icons/file-type-vue'

const githubData = ref([]);
onMounted(() => {
  fetch('https://api.github.com/users/spreez00/repos')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.name === 'SpreeZ00') {
          data.splice(data.indexOf(element), 1);
        }
      });
      githubData.value = data;
    })
})
</script>
