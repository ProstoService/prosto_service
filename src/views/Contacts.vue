<template>
  <div class="content">
    <h1>Контакты</h1>
    <div><i class="phone icon" />Телефон: {{ phone }}</div>
    <div><i class="home icon" />Адрес: {{ address }}</div>
    <div>
      <i class="mail icon" />Электронный адрес:
      <a :href="`mailto:${email}`">{{ email }}</a>
    </div>

    <h2>Мы на карте</h2>
    <div class="ui embed"></div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import "semantic-ui-css/components/embed.min.js";

export default {
  name: "ContactsPage",
  data() {
    return {
      phone: "",
      address: "",
      email: ""
    };
  },
  computed: {
    map: {
      get() {
        return "";
      },
      set(value) {
        $(".ui.embed").embed({ url: value });
      }
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    axios
      .get("/static/content/contacts.json", { responseType: "json" })
      .then(response => {
        if (response.data == null) {
          next(new Error());
          return;
        }

        next(vm => vm.setData(response.data));
      })
      .catch(error => {
        next(error);
      });
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    axios
      .get("/static/content/contacts.json", { responseType: "json" })
      .then(response => {
        if (response.data == null) {
          next(new Error());
          return;
        }

        next(vm => vm.setData(response.data));
      })
      .catch(error => {
        next(error);
      });
  },
  methods: {
    setData(data) {
      this.phone = data.phone;
      this.address = data.address;
      this.email = data.email;
      this.map = data.map;
    }
  }
};
</script>
