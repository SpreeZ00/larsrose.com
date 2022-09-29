<template>
  <div class="bg-[#111111] text-[#c4c4c4]" id="top">
    <NavigationBar />
    <div class="p-3">
      <div class="h-screen">
        <div class="grid grid-cols-2 gap-4 place-items-center w-11/12 md:w-9/12 lg:8/12 mx-auto rounded-md p-3 bg-[#2b2b2b] text-[#e0e0e0]">
          <img class="rounded-full row-span-2 max-w-[10rem] md:max-w-[14rem] lg:max-w-[18rem]" src="/img/me.webp" alt="Bild von mir">
          <div class="col-span-1 row-span-2">
            <h1 class="text-xl">Hi, mein Name ist Lars.</h1>
            <p>Ich bin leidenschaftlicher Web-Entwickler.</p>
          </div>
        </div>
        <FrameworkDisplay />
      </div>
      <div id="about" class="h-screen pt-16 text-center">
        <h2 id="about-title" class="text-6xl md:text-9xl lg:text-9xl pb-3">Über mich.</h2>
        <AboutMeDisplay />
      </div>
      <div id="portfolio" class="h-screen pt-16 text-center">
        <h2 id="portfolio-title" class="text-6xl md:text-9xl lg:text-9xl mt-10 md:mt-5 lg:mt-0">Meine Projekte.</h2>
        <PortfolioDisplay />
      </div>
    </div>
  </div>
</template>

<script setup>
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
