<template lang="html">
  <nav
    class="ui fixed secondary pointing menu"
    style="background-color: rgba(255, 255, 255, 255);"
  >
    <div class="ui text container">
      <div class="ui grid">
        <div class="computer only row">
          <a
            class="item"
            is="router-link"
            v-for="menuItem in menuItems"
            :class="{ active: isActive(menuItem.key) }"
            :key="menuItem.key"
            :to="menuItem.to"
            @click.native="setActive(menuItem.key);"
          >
            {{ menuItem.content }}
          </a>
        </div>
        <div class="mobile tablet only row">
          <a class="active launch icon item" @click="toggleSidebar();">
            <i
              class="content icon"
              style="padding-left: 50%;padding-right: 50%;"
            />
          </a>
          <div class="ui sidebar vertical menu">
            <a
              class="item"
              is="router-link"
              v-for="menuItem in menuItems"
              :class="{ active: isActive(menuItem.key) }"
              :key="menuItem.key"
              :to="menuItem.to"
              @click.native="
                setActive(menuItem.key);
                toggleSidebar();
              "
            >
              {{ menuItem.content }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";

export default {
  name: "MainMenu",
  data() {
    return {
      menuItems: [
        {
          key: "home",
          content: "Главная",
          to: "/"
        },
        {
          key: "about",
          content: "О нас",
          to: "/about"
        },
        {
          key: "services",
          content: "Услуги",
          to: "/services"
        },
        {
          key: "products",
          content: "Товары",
          to: "/products"
        },
        {
          key: "contacts",
          content: "Контакты",
          to: "/contacts"
        }
      ],
      active: ""
    };
  },
  created() {
    this.active = this.$router.currentRoute.path.substring(1);
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.active = to.path.substring(1);
    }
  },
  methods: {
    setActive(key) {
      this.active = key;
    },
    isActive(key) {
      return key === this.active;
    },
    toggleSidebar() {
      $(".ui.sidebar").sidebar("toggle");
    }
  }
};
</script>
