<template>
  <v-container>

    <br />
    <div v-for="i in 30" :key="i">
      <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1" style="cursor: pointer;" @click="clickCard(i)">Headline {{Math.floor(Math.random() * 100)}}?</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="overline mb-4" style="padding-left:15px;cursor:pointer;"  @click="clickCard(i)">{{Math.floor(Math.random() * 100)}} Answers</div>
      <v-card-actions>
        <v-btn text  @click="clickCard(i)"><v-icon class="mr-1">mdi-playlist-edit</v-icon>Answer</v-btn>
        <v-btn text><v-icon class="mr-1">mdi-pencil-off-outline</v-icon>Pass</v-btn>
        <v-btn text><v-icon class="mr-1">mdi-rss</v-icon>Follow</v-btn>
      </v-card-actions>
    </v-card>
      <!-- <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title
              class="headline mb-1"
              style="cursor: pointer;"
              @click="clickCard(i)"
            >Headline {{Math.floor(Math.random() * 100)}}?</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1">mdi-heart</v-icon>
              <span class="subheading mr-2">{{Math.floor(Math.random() * 100)}}</span>
              <v-icon class="mr-1">mdi-comment-outline</v-icon>
              <span class="subheading mr-2">{{Math.floor(Math.random() * 100)}}</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card> -->
      <br />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Quora",

  data() {
    return {
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
    clickCard(id) {
      console.log(id, this.$router);
      // this.$router.push('/ArticleDetails')

      // this.$router.push({ path: `Article/ArticleDetails/${id}` })
      this.$router.push({ name: "QuoraDetails", params: { id } });
    }
  },
  created() {
    window.scrollTo(0, 130);
    console.log("tab11111");
  }
};
</script>
