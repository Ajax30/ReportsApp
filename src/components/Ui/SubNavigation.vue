<template>
	<div class="sub-navigation">
		<ProjectsDropdown
			@getProject="getProject"
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

	emits: [
		'getProject',
		'generateReport'
	],

	data() {
    return {
      projects: [],
			gateways: []
    }
  },
	methods: {
    getProject(project) {
      this.$emit('getProject', project);
    },
  },
  async mounted() {
    // Projects
    await this.axios.get(`${this.$apiBaseUrl}/projects`).then((response) => {
      if (response.data.code == 200) {
        this.projects = response.data.data;
      }
    }).catch((errors) => {
      console.log(errors);
    });

		// Gateways
    await this.axios.get(`${this.$apiBaseUrl}/gateways`).then((response) => {
      if (response.data.code == 200) {
        this.gateways = response.data.data;
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