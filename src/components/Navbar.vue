<template>
  <nav class="navbar navbar-expand-xs navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
					<img src="/img/logo.png" class="logo" alt="">
				</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="top"></span>
					<span class="middle"></span>
					<span class="bottom"></span>
        </button>

				<User />
    </div>
	</nav>
</template>

<script>
import User from './User.vue'

export default {
  name: 'Navbar',
	components: {
		User
	}
}
</script>

<style scoped>
	.navbar-light {
		background: #fff;
		border-bottom: 2px solid #F6F6F6;
		margin-bottom: 25px;
	}

	.navbar-brand {
		margin-right: 40px;
	}

	.logo {
		height: 40px;
		height: auto;
	}

	.navbar-toggler {
    border: none;
		padding: 0;
		position: relative;
		width: 30px;
		height: 27px;
		box-shadow: none !important;
	}

	.navbar-toggler span {
		position: absolute;
		left: 0;
		display: inline-block;
		height: 3px;
		width: 30px;
		background: #005B96;
		transition: .5s ease-in-out;
	}

	.navbar-toggler .top {
		top: 0;
	}

	.navbar-toggler .middle {
		top: 50%;
		transform: translateY(-50%);
		width: 65%
	}

	.navbar-toggler .bottom {
		bottom: 0;
	}

	.navbar-toggler[aria-expanded="true"] .top {
		transform: rotate(135deg);
		top: 12px;
	}

	.navbar-toggler[aria-expanded="true"] .middle {
		opacity: 0;
    left: -60px;
	}

	.navbar-toggler[aria-expanded="true"] .bottom {
		transform: rotate(-135deg);
		bottom: 12px;
	}

</style>