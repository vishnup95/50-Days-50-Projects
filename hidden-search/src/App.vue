<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import HiddenSearch from './components/HiddenSearch.vue';
</script>

<template>
	<h3 class="heading">Hidden Search</h3>
	<!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
	<HiddenSearch
		type="text"
		placeholder="search away"
		iconType="fas"
		iconName="search"
	/>
</template>

<style>
html,
body {
	margin: 0;
}

.heading {
	margin-top: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	/* margin-top: 60px; */
	min-height: 100vh;
	background-color: rgb(16, 52, 166);
}
</style>
