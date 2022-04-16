<template>
  <datepicker 
		v-model="picked" 
		:upper-limit="picked_to"
    :lower-limit="picked_from"
		class="datepicker text-center" />
</template>

<script setup>
		import Datepicker from 'vue3-datepicker'
		import { ref } from 'vue'
		const picked = ref(new Date())
</script>

<style>
	.v3dp__datepicker {	
		margin-right: 5px;
		font-size: 14px;
		border: 0;
	}

	.v3dp__datepicker .datepicker {
		color: #fff;
		background-color: #1BC5BD;
		border: 1px solid #1BC5BD;
		border-radius: 0.2rem;
		padding: 0.25rem 0.5rem;
		width: 110px;
	}

	.v3dp__datepicker .datepicker:focus {
		box-shadow: none;
		outline: none;
	}

	@media only screen and (max-width: 767px) {
		.v3dp__datepicker {
			margin-right: 0;
			margin-bottom: 5px;
			width: 100%;
		}
		
		.v3dp__datepicker .datepicker {
			width: 100%;
		}
	}
</style>