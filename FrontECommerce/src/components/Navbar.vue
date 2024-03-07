<template>

  <div class="navbar bg-base-100">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             class="inline-block w-5 h-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">
        <img src="@/assets/logo_greenhub.webp" alt="Logo GreenHub" class="h-6">
      </a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <i-ph-user></i-ph-user>
      </button>
      <button class="btn btn-square btn-ghost">
        <i-ph-shopping-cart-simple></i-ph-shopping-cart-simple>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>