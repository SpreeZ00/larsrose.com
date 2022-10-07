<template>
  <div class="bg-surface text-surface-text" id="top">
    <NavigationBar />
    <Sidebar />
    <div class="p-3">
      <div class="h-screen">
        <div class="grid grid-cols-2 gap-4 place-items-center w-11/12 md:w-9/12 lg:8/12 mx-auto rounded-md p-3 bg-surface-variant text-surface-text-variant">
          <img class="rounded-full row-span-2 max-w-[10rem] md:max-w-[14rem] lg:max-w-[18rem]" src="/img/me.webp" alt="Bild von mir">
          <div class="col-span-1 row-span-2">
            <h1 class="text-xl">Hi, mein Name ist Lars.</h1>
            <p>Ich bin leidenschaftlicher Web-Entwickler.</p>
          </div>
        </div>
        <FrameworkDisplay />
      </div>
      <div id="about" class="min-h-fit pt-16 text-center">
        <h2 id="about-title" class="text-6xl md:text-9xl lg:text-9xl pb-3">Über mich.</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div class="col-span-1 mx-auto mb-3">
            <h3 class="text-2xl md:text-3xl lg:text-4xl">Lerne mich kennen</h3>
            <p class="mt-4 md:mt-7 lg:mt-10">
              Ich bin 22 Jahre alt und wohne in der Nähe von Frankfurt am Main. Ich bin ein leidenschaftlicher Web-Entwickler.
              Ich arbeite mit Vue.js, TailwindCSS und JavaScript.
              Ich habe bereits an mehreren Projekten gearbeitet und freue mich auf neue Herausforderungen.
            </p>
            <h3 class="text-2xl md:text-3xl lg:text-4xl my-4 md:my-7 lg:my-10">Meine Kenntnisse</h3>
            <div class="flex flex-wrap gap-2 max-w-[75%] mx-auto">
              <p class="bg-surface-variant rounded-md px-1 py-1">HTML</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">CSS</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">JavaScript</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">Vue</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">GitHub</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">Responsive Design</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">SQL</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">WordPress</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">Node</p>
              <p class="bg-surface-variant rounded-md px-1 py-1">Express</p>
            </div>
          </div>
          <div class="col-span-2">
            <EducationDisplay />
          </div>
        </div>
      </div>
      <div id="portfolio" class="min-h-screen pt-16 text-center">
        <h2 id="portfolio-title" class="text-6xl md:text-9xl lg:text-9xl mt-10 md:mt-5 lg:mt-0">Meine Projekte.</h2>
        <PortfolioDisplay />
      </div>
    </div>
  </div>
</template>

<script setup>
import EducationDisplay from "../components/EducationDisplay";
import Sidebar from "../components/Sidebar";

useHead({
  htmlAttrs: {
    lang: 'de',
  },
  title: 'Larsrose.com',
  meta: [
    {
      name: 'description',
      content: 'Dies ist meine persönliche Portfolio Website. Hier findet ihr alle Infos zu meiner Person und meinen Projekten. Schaut doch mal rein!'
    },
  ],
  script: [
    {
      src: '/scripts/main.js',
      defer: true,
    },
  ],
})
</script>
