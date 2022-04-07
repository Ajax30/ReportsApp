<template>
	<ul class="data-toggle list-inline">
		<li class="list-inline-item">
			<a href="#">All projects</a>
		</li>
		<li class="list-inline-item">|</li>
		<li class="list-inline-item">
			<a href="#">All gateways</a>
		</li>
	</ul>
</template>

<script>

export default {
  name: 'DataToggle',

	components: {
	
	},
}
</script>

<style scoped>
	.data-toggle {
		text-align: left;
	}

	.data-toggle * {
		color: #011F4B;
		text-decoration: none;
		font-weight: bold;
		font-size: 16px;
	}
</style>