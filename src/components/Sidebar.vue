
<template>
	<div class="sidebar" id="navbarSupportedContent">
		<ul class="list-unstyled">
			<li>
				<a href="#">
					<i class="fa fa-sign-in" aria-hidden="true"></i> <span class="text">Link</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class="fa fa-pie-chart" aria-hidden="true"></i> <span class="text">Link</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class="fa fa-address-book" aria-hidden="true"></i> <span class="text">Link</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class="fa fa-television" aria-hidden="true"></i> <span class="text">Link</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
	.sidebar {
		display: block !important;
		width: 80px;
		overflow-x: hidden;
		transition: .25s ease-in-out;
	}

	.sidebar > ul {
		margin-top: -10px;
	}

	.sidebar li a {
		height: 50px;
		display: flex;
		padding: 0 15px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: #bababa;
	}

	.sidebar li a:hover {
		color: #2DAEE5;
	}

	.sidebar li .fa {
		font-size: 125%;
	}

	.sidebar .text {
		display: none;
		padding-left: 10px;
	}

/* Expand the sidebar, but not for mobile */
@media only screen and (min-width: 576px) {
	.sidebar.show {
		width: 150px;
	}

	.sidebar.show li a {
		justify-content: flex-start;
	}

	.sidebar.show .text {
		display: inline;
	}
}
</style>