<template>
  <v-container>

    <v-card :elevation="0">
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

          <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <div v-html="item.subtitle"></div>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

    <br />
    <v-textarea
      label="Comment"
      auto-grow
      outlined
      rows="3"
      row-height="25"
      shaped
      style="padding-bottom:0px"
      v-model="comment"
    ></v-textarea>
    <v-btn class="ma-2" outlined color="indigo" @click="addComment">Add Comment</v-btn>
    <br />
    <br />
  </v-container>
</template>

<script>
export default {
  name: "AddComment",
  props: ['itemId'],
  data() {
    return {
      comment: "",
      items: [
        { header: "Comment" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhoo I'll be l be in your neighborhoo I'll be l be in your neighborhoo I'll be in your neighborhoo I'll be in your neighborhoo I'll be in your neighborhoo I'll be in your neighborhoo I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of towcould come, but I'm out of towcould come, but I'm out of towcould come, but I'm out of towcould come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do yol be in your neighborhoo I'll be l be in your neighborhoo I'll be l be in your neighborhoo I'll be l be in your neighborhoo I'll be l be in your neighborhoo I'll be l be in your neighborhoo I'll be l be in your neighborhoo I'll be you have Paris recommendations? Have you eyou have Paris recommendations? Have you eyou have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should we should we should we should we should we should we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: <br>Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squaseat this: Grate, Squash, Corn, anhould eat this: <br>Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squaseat this: Grate, Squash, Corn, anhould eat this: <br>Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squaseat this: Grate, Squash, Corn, anhould eat this: <br>Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squaseat this: Grate, Squash, Corn, anhould eat this: <br>Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, anhould eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ],
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      links: ["Home", "About Us", "Team", "Contact Us"]
    };
  },
  methods: {
    isBlank(str) {
      return (!str || str.length === 0 || !str.trim());
    },
    addComment() {
      console.log(this.comment);
      if(this.isBlank(this.comment)){
        return
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
    console.log(
      "addcomentaddcomentaddcomentaddcoment",
      this.$route.params
    );
  }
};
</script>
