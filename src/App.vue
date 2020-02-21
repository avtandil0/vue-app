<template>
  <v-app style="padding-left:10%;padding-right:10%">
    <div class="header">
      <v-app-bar color="white" :elevation="0">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-row >


        </v-row>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>


        <v-btn icon @click.stop="drawer = !drawer">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-btn>
      </v-app-bar>
    </div>
    <br>
    <br>
    <br>

    <div id="navbar" style="z-index: 1000;">
      <v-tabs fixed-tabs v-model="tabs" @change="changeTab">
        <v-tab>#Article</v-tab>
        <v-tab>#Quora</v-tab>
        <v-tab>#Items</v-tab>
        <v-tab>#Another Screen</v-tab>
      </v-tabs>
    </div>

    <div class="content">
      <!-- <div v-if="tab0" style="z-index: -1;">
      <Article />
    </div>
    <div v-if="tab1">
        <Quora/>
    </div>
    <div v-if="tab2">

      </div>-->
      <div style="z-index: -1;">
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
// import Article from './components/Article';
// import Quora from './components/Quora';

export default {
  name: "App",

  // components: {
  //   Article,
  //   Quora
  // },

  data() {
    return {
       password: 'Password',
    show: false,
    message: 'Hey!',
    marker: true,
    iconIndex: 0,
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue',
    ],
      direction: "bottom",
      fab: false,
      fling: false,
      hover: true,
      top: true,
      right: true,
      bottom: false,
      left: false,
      transition: "slide-y-reverse-transition",
      drawer: null,
      itemsNav: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      tabs: null,
      tab0: false,
      tab1: false,
      tab2: false
    };
  },
  created() {},
   computed: {
    icon () {
      return this.icons[this.iconIndex]
    },
  },
  methods: {
    toggleMarker () {
      this.marker = !this.marker
    },
    sendMessage () {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage () {
      this.message = ''
    },
    resetIcon () {
      this.iconIndex = 0
    },
    changeIcon () {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    },
    changeTab(num) {
      console.log("num", num);
      if (num == 0) {
        console.log("/Article");
        this.tab0 = true;
        this.tab1 = false;
        this.tab2 = false;
        const path = `/Article`;
        if (this.$route.path !== path) this.$router.push({ path: path });
        return;
      }
      console.log("ddd");
      if (num == 1) {
        console.log("/Quora");
        this.tab0 = false;
        this.tab1 = true;
        this.tab2 = false;
        const path = `/Quora`;
        if (this.$route.path !== path) this.$router.push({ path: "/Quora" });
        return;
      }
      if (num == 2) {
        this.tab0 = false;
        this.tab1 = false;
        this.tab2 = true;
        return;
      }
    }
  }
};
</script>
<style scoped>
body {
  margin: 0;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  text-align: center;
}

#navbar {
  overflow: hidden;
  background-color: #333;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}

#navbar a.active {
  background-color: #4caf50;
  color: white;
}

.content {
  padding: 16px;
  padding-left: 100px;
  padding-right: 100px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 80%;
}

.sticky + .content {
  padding-top: 60px;
}
</style>