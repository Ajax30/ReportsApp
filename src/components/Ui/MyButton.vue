<template>
  <button class="btn btn-sm btn-generate">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: String
  }
}
</script>

<style scoped>
  .btn-generate {
    background: #005B96;
    color: #fff;
  }

  @media only screen and (max-width: 575px) {
		.btn-generate {
      width: 100%;
    }
	}
</style>