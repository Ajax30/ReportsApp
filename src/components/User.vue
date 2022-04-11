<template>
<ul v-if="usersData.length" class="user list-unstyled d-flex ms-auto">
	<li class="avatar">
		{{ usersData[0].firstName.match(/./)[0] }} {{ usersData[0].lastName.match(/./)[0] }}
	</li>
	<li class="name">
		{{ usersData[0].firstName }} {{ usersData[0].lastName }}
	</li>
</ul>
</template>

<script>
export default {
  name: 'User',
	props: {
		usersData: Object
	}
}
</script>

<style scoped>
	.user {
		height: 43px;
		align-items: center;
		margin: 0;
	}

	.avatar {
		background: #F6CA65;
		border-radius: 5px;
		margin-right: 10px;
		width: 43px;
		height: 43px;
		line-height: 43px;
		text-align: center;
		color: #fff;
	}

	.name {
		color: #005B96;
		font-weight: 600;
	}
</style>