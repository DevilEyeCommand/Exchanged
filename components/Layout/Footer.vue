<template>
  <div class="hidden lg:flex">
    <footer class="footer bg-primary text-white p-10">
      <aside>
        <img src="/assets/logo.png" class="w-20" />
        <p class="hover:text-black cursor-pointer">Exchanged.COM</p>
      </aside>
      <nav>
        <h6 class="footer-title">menu</h6>
        <NuxtLink
          v-for="(menu, index) in menuItems"
          :key="index"
          :to="menu.url"
        >
          {{ menu.menuBottom }}
        </NuxtLink>
      </nav>
      <nav>
        <h6 class="footer-title flex items-center">Consultant</h6>
        <ul class="social-links">
          <li v-for="(link, index) in consultant" :key="index">
            <NuxtLink :to="link.url">
              <Icon :name="link.icon" /> {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 class="footer-title">Developer</h6>
        <li v-for="(link, index) in Name" :key="index">
          <NuxtLink :to="link.url">
            <Icon :name="link.icon" />
            {{ link.name }}
          </NuxtLink>
        </li>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import menuItems from "../../assets/json/menu.json";

const Name = [
  {
    name: "นายอัครชัย เพรชสี",
    url: "https://github.com/DevilEyeCommand",
    icon: "skill-icons:github-light",
  },
  {
    name: "นายชัยมงคล โสภาสุข",
    url: "https://github.com/ChaimongkhonS",
    icon: "skill-icons:github-light",
  },
];

const consultant = [
  {
    name: "NaNa'",
    url: "https://github.com/onenarok777",
    icon: "skill-icons:github-light",
  },
];
</script>
