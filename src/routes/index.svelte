<script lang="ts">
  import bike from '../images/bike.png';
  import map from '../images/map.svg';
  import calendar from '../images/calendar.svg';
  import { base } from '$app/paths';

</script>

<svelte:head>
  <title>Welcome to Rafice </title>
  <meta name="description" content="Rafice Wedding Page" />
</svelte:head>

<div class="flex flex-col">
	<div class="flex  flex-wrap shadow-lg">
		<div class="w-full md:w-1/3">
		  <div class="flex flex-col justify-center items-center pt-4 h-full">
			<h1 class="text-6xl font-alice font-extrabold mb-8">
			  Alice <span class="text-primary">&</span> Rafa
			</h1>
			<h2 class="text-2xl text-dark">Get hitched! </h2>
			<hr class="w-1/2 border-b my-4">
			<h2 class="text-2xl text-gray-600">Nos casamos!</h2>
		  </div>
		</div>
		<div class="w-full md:w-2/3 h-full px-8">
		  <img class="w-full h-full" src={bike} alt="" />
		</div>
	</div>
	<div class=" flex flex-col justify-center items-center p-16 text-center">
		<p class="text-2xl ">We can't wait to celebrate this special day with all of you, it's going to be fun!</p>
		<hr class="w-1/2 border-b my-4 self-center">
		<p class="text-2xl">Con muchas ganas de celebrar este día con todos vosotros, será divertido!</p>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-4 shadow-lg divide-x-2  pb-8 md:pb-0">
		<div class="flex flex-col col-span-3 divide-y-2 p-8 ">
			<div class="flex flex-wrap items-center justify-start space-x-4 py-4"> 
				<div class="flex space-x-4 items-center justify-start ">
					<img src="{map}" class="h-16" alt="Can palleta">
					<h2 class="text-center font-alice text-4xl">Where / Dónde?</h2>  
				</div>
				<a href="https://goo.gl/maps/gCK5VwoqJWJPg2rb9" target="_blank" class="hover:underline">
					<h1 class="text-2xl text-dark">Can Palleta, S'Horta, Mallorca</h1>
				</a>
			</div>
			<div class="flex flex-wrap items-center justify-start space-x-4 py-4"> 
				<div class="flex space-x-4 items-center justify-start ">
					<img src="{calendar}" class="h-16" alt="Can palleta">
					<h2 class="text-center font-alice text-4xl">When / Cuándo?</h2>  
				</div>
				<h1 class="text-2xl text-dark">3 Jun. 2023</h1>
			</div>
		</div>
		<div class="  flex flex-col items-center justify-center p-4">
		  <a href="https://forms.gle/fgrFn7zUzhh9mC15A" target="_blank" class="btn-primary">RSVP / Confirma Asistencia</a>
		</div>
	</div>
	
	
	
	
	
</div>


