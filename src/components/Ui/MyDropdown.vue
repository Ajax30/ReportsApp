<template>
  <div class="dropdown">
    <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown">
       {{ label }}
    </button>
    <ul class="dropdown-menu">
			<li><a class="dropdown-item" href="#">Link 1</a></li>
      <li><a class="dropdown-item" href="#">Link 1</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyDropdown',
  props: {
    label: String
  }
}
</script>

<style scoped>
  .dropdown-toggle {
    background: #1BC5BD;
    font-size: 14px;
    color: #fff;
    box-shadow: none;
    margin-right: 5px;
  }

  .dropdown-menu {
    transform: translate3d(0, 32px, 0) !important;
  }

  .dropdown-item {
    font-size: 13px;
  }

  @media only screen and (max-width: 575px) {
		.dropdown {
			margin-right: 0;
			margin-bottom: 5px;
			width: 100%;
		}

    .dropdown-toggle {
      width: 100%;
    }
	}
</style>