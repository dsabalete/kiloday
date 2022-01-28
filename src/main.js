import { createPinia } from 'pinia'
import { createApp } from 'vue'

import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import App from '@/App.vue'
import '@/assets/tailwind.css'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia(app)

Sentry.init({
  app,
  dsn: 'https://455ae1d7facb4efbaeb9b595fbcf117c@o1129515.ingest.sentry.io/6173398',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', 'kiloday.netlify.com', /^\//]
    })
  ],
  tracesSampleRate: 1.0,
  logErrors: true
})

app.use(router)
app.use(pinia)
app.mount('#app')
