<template>
  <label htmlFor='voice-input'>
    <button
      class="sc-user-input--file-icon-wrapper"
      type='button'
    >
      
      <svg v-if="mircrophoneStatus.isCallSessionOngoing" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 24h-8v-1h3.5v-3.018c-3.63-.256-6.5-3.287-6.5-6.982v-2h1v2.01c.005 3.307 2.692 5.99 6 5.99 3.311 0 6-2.689 6-6v-2h1v2c0 3.695-2.87 6.726-6.5 6.982v3.018h3.5v1zm-9-19c0-2.76 2.24-5 5-5s5 2.24 5 5v8c0 2.76-2.24 5-5 5s-5-2.24-5-5v-8zm9 0c0-2.208-1.792-4-4-4s-4 1.792-4 4v8c0 2.208 1.792 4 4 4s4-1.792 4-4v-8z"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" v-else width="20" height="20" viewBox="0 0 24 24"><path d="M2 2h20v20h-20z"/></svg>

    </button>
    <input id='voice-input' />
  </label>
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function,
      required: true
    },
    mircrophoneStatus: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.sc-user-input--file-icon-wrapper {
  background: none;
  border: none;
  padding: 0px;
  margin: 0px;
  outline: none;
}

.sc-user-input--file-icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
  align-self: center;
  outline: none;
}

.sc-user-input--file-icon path {
  fill: rgba(86, 88, 103, 1);
}

.sc-user-input--file-icon:hover path {
  fill: rgba(86, 88, 103, 0.3);
}


</style>
