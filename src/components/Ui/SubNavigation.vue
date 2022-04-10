<template>
	<div class="sub-navigation">
		<ProjectsDropdown
			:label='"All projects"' 
			:projectsData='projects'
			/>

		<GatewaysDropdown 
			:label='"All gateways"' 
			:gatewaysData='gateways'
		/>

		<MyButton 
			@generateReport="$emit('generateReport')" 
			:label='"Generate report"' 
			:isReport='"false"' 
		/>
	</div>
</template>

<script>
import ProjectsDropdown from './ProjectsDropdown'
import GatewaysDropdown from './GatewaysDropdown'
import MyButton from './MyButton'

export default {
	inject: ['$apiBaseUrl'],
  name: 'SubNavigation',
  components: {
		ProjectsDropdown,
		GatewaysDropdown,
    MyButton
	},

	props: {
		projectsData: Object
	},

	emits: ['generateReport'],

	data() {
    return {
      projects: [],
			gateways: []
    }
  },
  async mounted() {
    // Projects
    await this.axios.get(`${this.$apiBaseUrl}/projects`).then((response) => {
      if (response.data.code == 200) {
        this.projects = response.data.data;
        console.log(this.projects);
      }
    }).catch((errors) => {
      console.log(errors);
    });

		// Gateways
    await this.axios.get(`${this.$apiBaseUrl}/gateways`).then((response) => {
      if (response.data.code == 200) {
        this.gateways = response.data.data;
        console.log(this.gateways);
      }
    }).catch((errors) => {
      console.log(errors);
    });
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