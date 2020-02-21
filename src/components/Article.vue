<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="8">
        <div outlined v-for="i in 30" :key="i">
          <v-card style="max-width: 892px;">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title
                  class="headline mb-1"
                  style="cursor: pointer;color:#000;
                  font-size: 24px;
    line-height: 1.4;
    font-weight: 700;"
                  @click="clickCard(i)"
                >Headline {{i}}line {{i}}line {{i}}line{{i}}line {{i}}</v-list-item-title>
                <v-list-item-subtitle
                  style="color:rgba(0,0,0,.66);
                font-size: 16px;
    line-height: 26px;
    font-family: Times, Times New Roman, serif;"
                >
                  Greyhound divisely hello coldly fonwderely hello coldly d divisely hello coldly f
                  onwderely hello coldly d divisely hello coldly fonwderely hello coldly fonwderely hello
                  d divisely hello coldly fonwderely hello coldly d divisely hello coldly fonwderely hello coldly d divisely hello coldly fonwderely hello coldly
                  d divisely hello coldly fonwderely hello coldly
                  y
                  d divisely hello coldly fonwderely hello coldly
                  d divisely hello coldly fonwderely hello coldly
                  d divisely hello coldly fonwderely hello coldly
                  coldly fonwderfully
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar style="border-radius: 10px;" tile size="160" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions style="background:rgba(0,0,0,.03)">
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=Red&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light'"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    style="font-size: 14px;
    font-weight: 700;
    color: #000;
    margin-right: 8px;"
                  >Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">{{Math.floor(Math.random() * 100)}}</span>
                  <v-icon class="mr-1">mdi-comment-outline</v-icon>
                  <span class="subheading mr-2">{{Math.floor(Math.random() * 100)}}</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">{{Math.floor(Math.random() * 100)}}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <br />
        </div>
      </v-col>
      <v-col cols="12" sm="4" style="padding-left:15px;">
        <v-card class="mx-auto" max-width="100%">
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">be•nev•o•lent</p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.
              his dgave cthoasus nd kindng and kindly.
              <br />welhis dgave cthoasus nd kindindly.
              <br />well meaning and kindly.
              <br />well mehis dgave cthoasus nd kindndly.
              <br />wthis dgave cthoasus nd kindly.
              <br />well meaning and kindly.
              well meahis dgave cthoasus nd kind.
              well meaning and kindly.
              <br />"a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Learn More</v-btn>
          </v-card-actions>
        </v-card>
        <br />
        <v-card class="mx-auto" max-width="100%">
          <v-card-title>
            <span class="title font-weight-light">
              Top Users this week in
              <br />#ShowHashnode
            </span>
          </v-card-title>
          <v-card-subtitle>
            <v-row no-gutters>
              <v-col v-for="n in 6" :key="n" cols="12" sm="2">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=Red&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light'"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col v-for="n in 4" :key="n" cols="12" sm="2">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=Red&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light'"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card-subtitle>
        </v-card>
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Article",
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
      this.$router.push({ name: "ArticleDetails", params: { id } });
    }
  },
  created() {
    window.scrollTo(0, 130);
    console.log("tab00000");
  }
};
</script>
