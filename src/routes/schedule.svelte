<script lang="ts">
  import drunk from '../images/drunk.gif';
  import dance from '../images/dancing.gif'
  import speeches from '../images/speeches.gif'
  import dinner from '../images/dinner.gif'
  import canapes from '../images/canapes.jpeg'
  import arrival from '../images/arrival.gif'
  import wedding from '../images/wedding.gif'

</script>

<div class="flex flex-col divide-y-2 p-8 ">
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex">
      <h1 class="font-alice text-4xl w-60">17:00 - 17:30</h1>
    </div>
    <div class="flex flex-col grow h-28 justify-center">
      <p class="text-2xl text-dark">
        Arrival & drink
      </p>
      <p class="text-2xl text-gray-500">
        Llegada y copa
      </p>
    </div>  
    <div class="">
        <img src="{arrival}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="arrival">
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex">
      <h1 class="font-alice text-4xl w-60">17:30 - 18:00</h1>
    </div>
    <div class="flex flex-col flex-grow h-28 justify-center">
      <p class="text-2xl text-dark">Rafice Ceremony    </p>
      <p class="text-2xl text-gray-500">Rafice Ceremonia</p>
    </div>
    <div class="">
        <img src="{wedding}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="wedding">
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex space-x-4 items-center justify-start ">
      <h2 class="font-alice text-4xl w-60">18:00 - 20:00</h2>
    </div>
    <div class="flex flex-col flex-grow h-28 justify-center">
      <p class="text-2xl text-dark">Canapés & drinks</p>
      <p class="text-2xl text-gray-500">Canapés y bebidas</p>
    </div>
    <div class="">
        <img src="{canapes}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="canapes">
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex space-x-4 items-center justify-start ">
      <h2 class="font-alice text-4xl w-60">20:00 - 21:00</h2>
    </div>
    <div class="flex flex-col flex-grow h-28 justify-center">
      <p class="text-2xl text-dark">
        Dinner <span class="text-xs md:text-xl">(1 main course & desert)</span>
      </p>
      <p class="text-2xl text-gray-500">
        Cena <span class="text-xs md:text-xl">(1 principal y postre)</span>
      </p>
    </div>
    <div class="">
        <img src="{dinner}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="dinner">
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex space-x-4 items-center justify-start ">
      <h2 class="font-alice text-4xl w-60">21:00 - 21:30</h2>
    </div>
    <div class="flex flex-col flex-grow h-28 justify-center">
      <p class="text-2xl text-dark">
        Speeches & toasts
      </p>
      <p class="text-2xl text-gray-500">
        Discursos y brindis
      </p>
    </div>
    <div class="">
        <img src="{speeches}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="speeches">
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex flex-col items-center justify-start space-y-4">
      <h2 class="font-alice text-4xl w-60">21:30 - 00:30</h2>
    </div>
    <div class="flex flex-col flex-grow h-28 justify-center">
        <p class="text-2xl text-dark">
            Dancing & open bar
        </p>
        <p class="text-2xl text-gray-500">
            Bailoteos y barra libre
        </p>
    </div>
    <div class="">
        <img src="{dance}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="dance">
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-start md:space-x-4 py-4">
    <div class="flex flex-col items-center justify-start space-y-4">
      <h2 class="font-alice text-4xl w-60">00:30 - ?</h2>
    </div>
    <div class="flex flex-col flex-grow h-28 justify-center">
      <p class="text-2xl text-dark">
        Survivors only
      </p>
      <p class="text-2xl text-gray-500">
        Supervivientes
    </p>
    </div>
    <div class="">
        <img src="{drunk}" class="w-20 h-20 md:w-36 md:h-36 rounded-full shadow-primary shadow-lg" alt="drunk">
    </div>
  </div>
</div>
