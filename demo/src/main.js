import Vue from 'vue'
import App from './App.vue'
import Chat from 'plugin'

Vue.use(Chat, {})

var chatboxVueDiv = document.createElement('div')
chatboxVueDiv.id = 'chatbot-vue-chat-data'
document.body.appendChild(chatboxVueDiv)

// eslint-disable-next-line
var chatbotVue = new Vue({
  el: '#chatbot-vue-chat-data',
  render: h => h(App)
})

window.chatbotVue = chatbotVue
