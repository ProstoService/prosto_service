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
    <iframe
      :src="map"
      width="560"
      height="400"
      frameborder="0"
      allowfullscreen="true"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactsPage",
  data() {
    return {
      phone: "",
      address: "",
      email: "",
      map: ""
    };
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    axios
      .get("/static/content/contacts.json")
      .then(response => {
        next(vm => vm.setData(response.data));
      })
      .catch(error => {
        next(error);
      });
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    axios
      .get("/static/content/contacts.json")
      .then(response => {
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
