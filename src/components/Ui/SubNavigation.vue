<template>
	<div class="sub-navigation">
		<ProjectsDropdown
			label="All projects" 
			:projectsData='projects'
			/>

		<GatewaysDropdown 
			label="All gateways" 
			:gatewaysData='gateways'
		/>

		<MyButton 
			label="Generate report" 
		/>
	</div>
</template>

<script>
import ProjectsDropdown from './ProjectsDropdown'
import GatewaysDropdown from './GatewaysDropdown'
import MyButton from './MyButton'

export default {

  name: 'SubNavigation',

  components: {
		ProjectsDropdown,
		GatewaysDropdown,
    MyButton
	},

	props: {
		projectsData: Object
	},

	data() {
    return {
      url: 'http://178.63.13.157:8090/mock-api/api',
      projects: [],
			gateways: []
    }
  },
  async mounted() {
    // Projects
    await this.axios.get(`${this.url}/projects`).then((response) => {
      if (response.data.code == 200) {
        this.projects = response.data.data;
        console.log(this.projects);
      }
    }).catch((errors) => {
      console.log(errors);
    });

		// Gateways
    await this.axios.get(`${this.url}/gateways`).then((response) => {
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