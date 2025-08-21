import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '6732lphn',
    dataset: 'production',
  },
  
  autoUpdates: true,
})
