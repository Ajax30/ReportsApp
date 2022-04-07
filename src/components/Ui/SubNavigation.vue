<template>
	<div class="sub-navigation">
		<MyDropdown label="All projects" />
		<MyDropdown label="All gateways" />
		<MyButton label="Generate report" />
	</div>
</template>

<script>
import MyDropdown from './MyDropdown'
import MyButton from './MyButton'

export default {
  name: 'SubNavigation',

  components: {
		MyDropdown,
    MyButton
	}
}
</script>


<style scoped>
  .sub-navigation {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
</style>