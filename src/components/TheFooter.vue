<template>
  <footer class="footer bg-black/90 text-white mt-10">
    <div class="container">
      <!-- top -->
      <div
        class="footer-top py-10 flex items-start justify-start lg:justify-center flex-wrap gap-10 sm:gap-20 md:gap-32 xl:gap-60">
        <!-- logo -->
        <div class="logo">
          <div class="image-block w-[170px] sm:w-[200px]">
            <router-link to="/">
              <img src="@/assets/images/logo-white.png" alt="logo" class="w-full h-full object-cover">
            </router-link>
          </div>
        </div>

        <!-- contact -->
        <div class="contact">
          <h4 class="text-2xl mb-3">Контакты</h4>
          <ul class="flex flex-col items-start gap-2">
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-location-dot text-grey text-lg"></i>
              <p>Чиланзарский район, <br> ул. Мукими, 158/1</p>
            </li>
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-phone text-grey text-lg"></i>
              <a href="tel:+998909222229">+998 (90) 922-22-29</a>
            </li>
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-envelope text-grey text-lg"></i>
              <p>ninegroup@gmail.com</p>
            </li>
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-clock text-grey text-lg"></i>
              <p>Понедельник-пятница, <br>10:00-18:00</p>
            </li>
          </ul>
        </div>

        <!-- socials -->
        <div class="socials">
          <h4 class="text-2xl mb-3">Социальные сети</h4>
          <ul class="flex items-center justify-start gap-5">
            <li>
              <a href="#" class="link text-xl text-brand-color hover:text-white">
                <i class="fa-solid fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a href="#" class="link text-2xl text-brand-color hover:text-white">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" class="link text-xl text-brand-color hover:text-white">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <!-- <li><a href="#" class="link"></a></li> -->
          </ul>
        </div>
      </div>
      <!-- bottom -->
      <div class="copy py-5 border-t border-white/50">
        <p class="text-center text-lg">&copy; Dahua Uzbekistan 2017 - 2024. Все права защищены</p>
      </div>
    </div>
  </footer>
</template>