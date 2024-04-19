<template>
  <h1 class="text-center">Se connecter</h1>
  <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form class="card-body">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Mot de passe</span>
        </label>
        <input type="password" placeholder="mot de passe" class="input input-bordered" required />
        <label class="label">
          <a href="#" class="label-text-alt link link-hover">Mot de passe oublié ?</a>
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Connexion</button>
      </div>
      <div class="form-control">
        <label class="label">
          <input type="checkbox" required>
          <span class="label-text">J'accepte les conditions générales et la politique de confidentialité</span>
        </label>
      </div>
    </form>
  </div>
  <h1 class="text-center">Pas encore de compte ?</h1>
  <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form class="card-body">
      <div class="form-control mt-6">
        <button class="btn btn-primary">S'inscrire</button>
      </div>
    </form>
  </div>
</template>
<script setup>
</script>