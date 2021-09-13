import { createApp } from 'vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import VueFeather from 'vue-feather'
import App from './App.vue'
import store from './store'
import router from './router'
import './main.css'

const app = createApp(App)

app.component(VueFeather.name, VueFeather)

Sentry.init({
  app,
  dsn: "https://852a573db36548bba993203567348120@o993490.ingest.sentry.io/5951532",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost:3000', /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
})

app.use(store)
app.use(router)
app.mount('#app')
