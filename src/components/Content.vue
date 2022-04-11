<template>
  <div class="main">
    <div class="d-sm-flex justify-content-between">
      <div class="page-heading">
        <h1>{{ title }}</h1>
        <h2 class="tagline">{{ tagline }}</h2>
      </div>

      <SubNavigation
        @getProject='getProject'
        @generateReport='generateReport'
        :projectsData='projects' 
        :gatewaysData='gateways' 
      />
    </div>

    <div class="content" :class="{report, 'mt-3' : 'my-auto'}">

      <div v-if="isReport" class="data-container">
        <DataToggle />
        <Accordion />
      </div>

      <div v-else class="no-data">
        <h4>No reports</h4>
        <p>Currently you have no data for the reports to be generated. Once you start generating traffic through the Balance application the reports will be shown.</p>

        <img src="/img/no-data.png" class="img-fluid" alt="No data to display">
      </div>

      <div v-if="isReport" class="total text-start">TOTAL: 14,065 USD</div>
    </div>
  </div>
</template>

<script>
import SubNavigation from './Ui/SubNavigation'
import DataToggle  from './Ui/DataToggle'
import Accordion from './Accordion/Accordion'

export default {
  name: 'Content',
  components: {
		SubNavigation,
    DataToggle,
    Accordion
	},
  props: {
    title: String,
    tagline: String,
  },

  emits: [
    'getProject',
    'generateReport',
  ],
  
  data() {
    return {
      isReport: false,
      projectId: '',
      gatewayId: '',
    }
  },

  methods: {
    generateReport() {
      this.isReport = true;
    },

    getProject(project) {
       this.projectId = project.projectId;
    },

    getGateway(gateway) {
      this.gatewayId = gateway.gatewayId;
      console.log(this.gatewayId);
    }
  }
}
</script>

<style scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  text-align: center;
}

.no-data {
  max-width: 480px;
  text-align: center;
  margin: 0 auto;
}

.no-data h4 {
  font-size: 24px;
  font-weight: bold;
}

.no-data p {
  color: #7E8299;
}

.data-container,
.total {
  background: #F1FAFE;
  border-radius: 10px;
  padding: 20px;
}

.total {
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #011F4B;
  font-weight: bold;
}
</style>
