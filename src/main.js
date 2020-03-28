import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import {router} from './router';

  Sentry.init({
    dsn: 'https://e88ac66c645941849e0e83a3121245c5@sentry.io/5178328',
    integrations: [
      new Integrations.Vue({
        Vue, attachProps: true
      }),
      new Integrations.CaptureConsole({
        levels: ['error']
      })
    ],
  });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
