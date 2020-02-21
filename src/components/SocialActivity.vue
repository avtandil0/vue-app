<template>
  <v-container>
    <v-card :elevation="0" :max-width="500">
      <v-container>
        <v-row no-gutters>
          <v-col cols="6" sm="2">
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">{{Math.floor(Math.random() * 100)}}</span>
          </v-col>
          <v-col cols="6" sm="2">
            <v-icon class="mr-1">mdi-comment-outline</v-icon>
            <span class="subheading mr-2">{{Math.floor(Math.random() * 100)}}</span>
          </v-col>
          <v-col cols="6" sm="2">
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">{{Math.floor(Math.random() * 100)}}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SocialActivity",
  props: ["itemId"],
  data() {
    return {
      hover: false,
      comment: ""
    };
  },
  methods: {
    isBlank(str) {
      return !str || str.length === 0 || !str.trim();
    },
    addComment() {
      console.log(this.comment);
      if (this.isBlank(this.comment)) {
        return;
      }
      this.items.push({ divider: true, inset: true });
      this.items.push({
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        subtitle: this.comment
      });

      this.comment = "";
    },
    clickCard(event) {
      console.log(event);
    }
  },
  created() {
    window.scrollTo(0, 130);
    console.log("addcomentaddcomentaddcomentaddcoment", this.$route.params);
  }
};
</script>
