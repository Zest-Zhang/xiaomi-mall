
<template>
  <div class="markdown-body">
    <vue-markdown :source="mdData"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../README.md';
export default {
  name:'Markdown',
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdData: markdownData // mdData 的值是要解析的 markdown 数据
    }
  },
}
</script>

<style scoped>
@import "../assets/github-markdown.css";
.markdown-body {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 40px;
}
</style>