<template>
  <div class="hidden lg:flex">
    <footer class="footer bg-primary text-white p-10">
      <aside>
        <img src="/assets/logo.png" class="w-20" />
        <p class="hover:text-black cursor-pointer">
          Tour Sisaket
          <br />
          sisaket-tourism.com
        </p>
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
        <h6 class="footer-title flex items-center">social</h6>
        <ul class="social-links ">
          <li v-for="(link, index) in mockSocail" :key="index">
            <NuxtLink :to="link.url">
              <Icon :name="link.icon" /> {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 class="footer-title">Developer</h6>
        <a class="link link-hover">ณัฐธิวุฒิ คุ้มกล่ำ</a>
        <a class="link link-hover">นายสุวิจักขณ์ สีทาดี</a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import menuItems from "../../assets/json/menu.json";

const mockSocail = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: "entypo-social:facebook",
  },
  {
    name: "X",
    url: "https://twitter.com",
    icon: "skill-icons:twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: "skill-icons:instagram",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: "ph:youtube-logo-fill",
  },
];
</script>
