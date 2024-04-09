<template>
<div class="services">
<h1 class="text-center">Tous les services</h1>

<div class="search-bar-wrapper">
  <input type="text" class="search-bar" placeholder="Rechercher un service">
</div>


<div class="service-list">
  <div v-for="(service, index) in services" :key="index" class="service-card">
    <img :src="service.image" :alt="service.name" class="service-image">
    <h2 class="service-name">{{ service.name }}</h2>
    <div class="service-actions">
      <button class="btn btn-primary">Ajouter au panier {{ service.price }} €</button>
    </div>
  </div>
</div>
</div>
</template>

<script>
import lavageVoiture from "@/assets/lavage_voiture.webp";
import locaVelo from "@/assets/location-velo.jpg";

export default {
  data() {
    return {
      services: [
        {name: 'Lavage Voiture - Plus ou moins tout compris', price: 20, image: lavageVoiture },
        {name: 'Location de velos - Ecologique et pratique', price: 6, image: locaVelo},
      ]
    };
  }
};
</script>

<style scoped>
.services {
}

.search-bar-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar {
  width: 80%;
}

.service-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.service-card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.service-image {
  width: 100%;
  border-radius: 5px;
}

.service-name {
}

.service-description {
}

.service-actions {
}
</style>