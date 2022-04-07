<template>
	<div class="table-responsive"> 
		<table class="table mb-0">
			<thead>
				<tr>
					<th class="text-start">Date</th>
					<th>Gateway</th>
					<th>Transaction ID</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-start">01/21/2021</td>
					<td>Gateway 1</td>
					<td>a732a</td>
					<td>3964 USD</td>
				</tr>
				<tr>
					<td class="text-start">02/21/2021</td>
					<td>Gateway 2</td>
					<td>a732b</td>
					<td>2554 USD</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  name: 'DataTable',
}
</script>

<style scoped>
	.table > thead > tr > th,
	.table > tbody > tr:nth-of-type(even) > * {
		background: #fff;
	}

	.table td {
		border: none;
	}
</style>