<template>
  <div class="demo">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="changeTab(tab)"
    >
      {{ tab }}
    </button>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import TabHome from "@/components/tabs/tab-home.vue";
import TabPost from "@/components/tabs/tab-posts.vue";
import TabArchive from "@/components/tabs/tab-archive.vue";
export default {
  components: {
    TabHome,
    TabPost,
    TabArchive
  },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Post", "Archive"],
    };
  },
  computed: {
    currentTabComponent: function () {
      return ("Tab" + this.currentTab)
    },
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  padding: 10px;
}
</style>