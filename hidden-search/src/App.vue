<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HiddenSearch from './components/HiddenSearch.vue';
</script>

<template>
	<h3 class="heading">Hidden Search</h3>
	<HiddenSearch
		type="text"
		placeholder="search away..."
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
	font-family: 'Righteous', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	padding-top: 1.5rem;
	min-height: 100vh;
	background-color: #475d5b;
}

.btn {
	border-radius: 6px;
	background-color: #faae2b;
	transition: background-color 0.77s ease-in;
	font-size: 16px;
	padding: 0.5rem 1rem;
	border: none;
	outline: none;
	cursor: pointer;
}

.btn:hover {
	background-color: #faae2b9f;
}
</style>
