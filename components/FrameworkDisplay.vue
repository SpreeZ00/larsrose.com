<template>
  <div class="my-10">
    <h2 class="text-xl text-center mt-3">Diese Frameworks benutze ich häufig:</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-3 gap-4 place-items-center mt-10 pb-10 text-black">
      <div class="text-center w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-xl bg-[#949494] rounded-md">
        <h3 class="tablet:mt-3">Vue 3</h3>
        <VueIcon class="mt-3 tablet:mt-6 tablet:text-7xl text-6xl mx-auto" />
      </div>
      <div class="text-center w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-xl bg-[#949494] rounded-md">
        <h3 class="tablet:mt-3">Nuxt 3</h3>
        <NuxtIcon class="mt-3 tablet:mt-6 tablet:text-7xl text-6xl mx-auto" />
      </div>
      <div class="text-center w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-xl bg-[#949494] rounded-md tablet:col-span-1">
        <h3 class="tablet:mt-3">Tailwindcss</h3>
        <TailwindIcon class="mt-3 tablet:mt-6 tablet:text-7xl text-6xl mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import VueIcon from '~icons/vscode-icons/file-type-vue'
import NuxtIcon from '~icons/logos/nuxt-icon'
import TailwindIcon from '~icons/vscode-icons/file-type-tailwind'
</script>
