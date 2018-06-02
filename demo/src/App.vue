<template>
  <div>
    <beautiful-chat
      ref="chatbotVueComponent"
      :agentProfile="agentProfile"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true" />
  </div>
</template>

<script>
import messageHistory from './messageHistory'
// import Header from './Header.vue'
// import Footer from './Footer.vue'
// import TestArea from './TestArea.vue'

export default {
  name: 'app',
  created: function() {
    this.handleTextField(console.log);
  },
  data() {
    return {
      agentProfile: {
        teamName: 'Support',
        imageUrl:
          'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
        userType: "agent"
      },
      messageList: messageHistory,
      newMessagesCount: 0,
      isChatOpen: false,
      handleMsgCallback: null
    }
  },
  methods: {
    setUserType: function(type){
      if(type)
        this.agentProfile.userType = type
    },
    setUserName(name) {
      if (name != undefined) {
        this.agentProfile.teamName = name
      }
    },
    handleMessageFromTextArea(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1
        this.messageList.push({ author: 'them', type: 'text', data: { text } })
      }
    },
    onMessageWasSent(msg) {
      this.messageList.push(msg)
      if(this.handleMsgCallback)
        this.handleMsgCallback(msg.data.text)
    },
    handleTextField(callback) {
      if(callback)
        this.handleMsgCallback = callback
    },
    receiveMessage(msg) {
      if (msg != undefined) {
        this.messageList.push({
          type: 'text',
          author: 'them',
          data: {
            text: msg,
            meta: null
          }
        })
      }
    },
    openChat() {
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat() {
      this.isChatOpen = false
    },
    initialiseValues() {
      window.customFunction = console.log
    }
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

* {
  font-family: Avenir Next, Helvetica Neue, Helvetica, sans-serif;
}

.demo-description {
  max-width: 500px;
}

.demo-description img {
  max-width: 500px;
}

.demo-test-area {
  width: 300px;
  box-sizing: border-box;
}

.demo-test-area--text {
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  padding: 0px;
  resize: none;
  font-family: Avenir Next, Helvetica Neue, Helvetica, sans-serif;
  background: #fafbfc;
  color: #8da2b5;
  border: 1px solid #dde5ed;
  font-size: 16px;
  padding: 16px 15px 14px;
  margin: 0;
  border-radius: 6px;
  outline: none;
  height: 150px;
  margin-bottom: 10px;
}

.demo-monster-img {
  width: 400px;
  display: block;
  margin: 60px auto;
}

.text-center {
  text-align: center;
}
</style>