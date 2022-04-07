<template>
	<div class="accordion accordion-flush" id="accordionFlushExample">
		<AccordionItem />
	</div>
</template>

<script>
import AccordionItem from './AccordionItem'

export default {
  name: 'Accordion',

	components: {
		AccordionItem
	},
}
</script>

<style scoped>
	.accordion-footer {
		border-radius: 10px !important;
		padding: 15px;
	}
</style>