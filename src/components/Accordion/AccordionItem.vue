<template>
	<div class="accordion-item">
		<div class="accordion-header" id="flush-headingOne">
			<div class="accordion-button collapsed justify-content-between" 
			data-bs-toggle="collapse" 
			data-bs-target="#flush-collapseOne" 
			aria-expanded="false" 
			aria-controls="flush-collapseOne">
				<h5 class="my-0 me-4">Project 1</h5>
				<p class="m-0">TOTAL: 10,065 USD</p>
			</div>
		</div>
		<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
				<div class="accordion-body">
					<DataTable />
				</div>
		</div>
	</div>
</template>

<script>
import DataTable from './DataTable'

export default {
  name: 'AccordionItem',

	components: {
		DataTable
	},
}
</script>

<style scoped>

	.accordion-item {
		margin-bottom: 10px;
		border-bottom: 0;
	}

	.accordion-item:last-of-type {
		margin-bottom: 0;
	}

	.accordion-item,
	.accordion-body {
		background: transparent;
	}

	.accordion-body {
		padding-bottom: 0;
	}

	.accordion-button {
		border-radius: 10px !important;
		background: #fff;
		box-shadow: none;
	}

	.accordion-button::after {
		display: none;
	}

	.accordion-button > * {
		font-size: 16px;
		font-weight: bold;
		color: #011F4B;
	}
</style>