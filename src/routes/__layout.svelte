<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import bike from '../images/bike.png';
  import '../css/app.css';
</script>

<div class="bg-light min-h-screen">
  <div class="relative overflow-hidden">
    <Header />

    <main>
      <div
        class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <slot />
        </div>
      </div>
    </main>

   
  </div>
</div>
