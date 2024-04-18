<template>
  <div class="navbar bg-base-100 flex items-center justify-between">
    <div>
      <RouterLink to="/">
      <a class="btn btn-ghost text-xl">
        <img src="@/assets/logo_greenhub.webp" alt="Logo GreenHub" class="h-6">
      </a>
      </RouterLink>
    </div>
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Acceuil</a></li>
          <router-link to="/products">
          <li><a>Product</a></li>
          </router-link>
          <li><a>Services</a></li>
          <li><a>Blogs</a></li>
        </ul>
      </div>
    </div>
    <div class="flex-none">
      <RouterLink to="/connexion"><button class="btn btn-square btn-ghost">
        <i-ph-user></i-ph-user>
      </button></RouterLink>
      <RouterLink to="/cart">
      <button class="btn btn-square btn-ghost">
        <i-ph-shopping-cart-simple></i-ph-shopping-cart-simple>
      </button>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
</script>