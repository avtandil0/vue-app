<template>
  <v-container>
    <v-row justify="space-around">
      <v-sheet>
        1
        <br />2
        <br />ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetai<br>lsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails<br>
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails<br>
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetails<br>ArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleD<br>etails ArticleDetailsArticleD<br>etailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetails<br>ArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsA<br>rticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArt<br>icleDetailsArticleDetails
        ArticleDet<br>ailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetai<br>lsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDet<br>ailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleD<br>etailsArticleDetails ArticleDetailsArticleDetailsAr<br>ticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleD<br>etailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetail<br>sArticleDetails <br>ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsA<br>rticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDet<br>ailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDe<br>tailsArticleDetailsArti<br>cleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArt<br>icleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleD<br>etailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArt<br>icleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArtic<br>leDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArt<br>icleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetails<br>ArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticle<br>DetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDet<br>ailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticl<br>eDetailsArticleDetails ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails
        ArticleDetailsArtic<br>leDetailsArticleDetailsArticleDetailsArticleDetails
      </v-sheet>
    </v-row>
    <br />
    <v-divider></v-divider>
    <SocialActivity />

    <v-divider></v-divider>
    <br>
    <WrittenBy />
    <br />
    <v-divider></v-divider>
    <br />
    <AddComment :itemId="this.$route.params" />
  </v-container>
</template>

<script>
import AddComment from "../components/AddComment.vue";
import WrittenBy from "../components/WrittenBy.vue";
import SocialActivity from "../components/SocialActivity.vue";

export default {
  name: "ArticleDetails",
  components: {
    AddComment,
    WrittenBy,
    SocialActivity
  },
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
    clickCard(event) {
      console.log(event);
    }
  },
  created() {
    console.log(
      "ArticleDetailsArticleDetailsArticleDetailsArticleDetailsArticleDetails",
      this.$route.params
    );
  }
};
</script>
