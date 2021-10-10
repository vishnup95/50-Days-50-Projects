<script setup>
import { ref } from 'vue';

const root = ref(null)
const props = defineProps({
	type: String,
	placeholder: String,
	iconType: String,
	iconName: String,
});

function clickMethod() {
	console.log('clicked');
	root.value.classList.remove('no-width-show')
}
</script>

<template>
	<div class="search-container">
		<!-- <font-awesome-icon :icon="['fas', 'search']" /> -->
		<div class="search-bar">
			<input
				class="input-search no-width-show"
				:type="type"
				:placeholder="placeholder"
				ref="root"
			/>
			<div class="icon-search" @click="clickMethod">
				<font-awesome-icon :icon="[iconType, iconName]" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.search-bar {
	position: relative;
	display: inline-flex;
	width: auto;
}

.icon-search {
	position: absolute;
	right: 5px;
	top: 12px;
	cursor: pointer;
}

.icon-search svg {
	color: #333;
	font-size: 20px;
}
.input-search {
	padding: 12px 1rem;
	outline: none;
	cursor: pointer;
	font-size: 18px;
	border-radius: 6px;
	border-style: none;
	transition: width 0.77s cubic-bezier(1, 0, 0, 1);
	width: 180px;
}

.no-width-show {
	width: 0;
}

.no-width-show::placeholder {
	opacity: 0;
}
</style>
