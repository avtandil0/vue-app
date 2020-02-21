<template>
  <v-container>

     <v-card :elevation="0" :max-width=500>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <v-avatar size="62">
              <v-img
                      class="elevation-6"
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=Red&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light'"
                    ></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="8">
            WRITTEN BY
            <br />
            <span style="font-weight: inherit;color: black;font-weight: 500;">Evan You
</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "WrittenBy",
  props: ['itemId'],
  data() {
    return {
      comment: "",

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
