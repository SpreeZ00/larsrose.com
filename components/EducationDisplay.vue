<template>
  <div class="grid grid-cols-1 gap-8 md:gap-8 lg:gap-0 w-3/4 mx-auto tablet:grid-cols-2 place-items-center">
    <div>
      <h3 class="text-2xl md:text-3xl lg:text-4xl">Schulische Laufbahn</h3>
      <div class="min-w-fit w-72 mx-auto mt-4 md:mt-7 lg:mt-10">
        <div class="bg-surface-variant rounded-md md:py-1 lg:py-2 my-1 md:my-2 lg:my-3">
          <h4 class="text-xl md:text-2xl lg:text-3xl">Realschule</h4>
          <p>Mittlere Reife</p>
          <p>2016</p>
        </div>
        <ArrowDown class="mx-auto text-xl md:text-2xl lg:text-3xl" />
        <div class="bg-surface-variant rounded-md md:py-1 lg:py-2 my-3">
          <h4 class="text-xl md:text-2xl lg:text-3xl">Abitur</h4>
          <p>Datenverarbeitung</p>
          <p>2019</p>
        </div>
        <ArrowDown class="mx-auto text-xl md:text-2xl lg:text-3xl" />
        <div class="bg-surface-variant rounded-md md:py-1 lg:py-2 my-3">
          <h4 class="text-xl md:text-2xl lg:text-3xl">Studium</h4>
          <p>Wirtschaftsinformatik</p>
          <p>ab 2021</p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-2xl md:text-3xl lg:text-4xl">Praktische Erfahrung</h3>
      <div class="min-w-fit w-72 mx-auto mt-4 md:mt-7 lg:mt-10">
        <div class="bg-surface-variant rounded-md md:py-1 lg:py-2 my-1 md:my-2 lg:my-3">
          <h4 class="text-xl md:text-2xl lg:text-3xl">Praktikum</h4>
          <p>Sterntaler GmbH</p>
          <p>2014</p>
        </div>
        <ArrowDown class="mx-auto text-xl md:text-2xl lg:text-3xl" />
        <div class="bg-surface-variant rounded-md md:py-1 lg:py-2 my-3">
          <h4 class="text-xl md:text-2xl lg:text-3xl">Werkstudent</h4>
          <p>Edudip GmbH</p>
          <p>2020</p>
        </div>
        <ArrowDown class="mx-auto text-xl md:text-2xl lg:text-3xl" />
        <div class="bg-surface-variant rounded-md md:py-1 lg:py-2 my-3">
          <h4 class="text-xl md:text-2xl lg:text-3xl">Werkstudent</h4>
          <p>Sterntaler GmbH</p>
          <p>ab 2022</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from '~icons/bi/arrow-down'
</script>
