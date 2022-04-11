<template>
  <div class="dropdown">
    <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
       {{ label }}
    </button>
    <ul v-if="gatewaysData?.length" class="dropdown-menu">
			<li v-for="gateway in gatewaysData" :key="gateway.gatewayId">
        <a class="dropdown-item">{{ gateway.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GatewaysDropdown',
  props: {
    label: String,
    gatewaysData: Object
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