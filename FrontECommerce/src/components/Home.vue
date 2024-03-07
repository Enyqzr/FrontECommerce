<template>
  <div>
    <div class="acceuil-mobile w-full bg-base-100">
      <img src="@/assets/accueil_mobile.webp" alt="Acceuil GreenHub" class="max-w-96 h-fit w-96">
    </div>
    <div class="text-center">
      <h1 class="mt-4 font-bold text-2x1">Nouveaux Produits !</h1>
    </div>
    <div class="flex justify-center mt-8">
      <div class="flex flex-wrap justify-center">
        <template v-for="(pair, index) in productPairs" :key="index">
          <div class="flex justify-center w-full md:w-1/2">
            <template v-for="(product, productIndex) in pair" :key="productIndex">
              <div class="card w-full md:w-96 bg-base-100 shadow-xl md:m-4 mb-4">
                <figure class="px-10 pt-10">
                  <img :src="product.image" :alt="product.name" class="rounded-xl"/>
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{{ product.name }}</h2>
                  <p>{{ product.description }}</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">{{ product.price }} €</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>

    <div class="text-center">
      <h1 class="mt-4 font-bold text-2x1">Nos Services</h1>
    </div>
    <div class="flex justify-center mt-8">
      <div class="flex flex-wrap justify-center">
        <template v-for="(pair, index) in servicePairs" :key="index">
          <div class="flex justify-center w-full md:w-1/2">
            <template v-for="(service, serviceIndex) in pair" :key="serviceIndex">
              <div class="card w-full md:w-96 bg-base-100 shadow-xl md:m-4 mb-4">
                <figure class="px-10 pt-10">
                  <img :src="service.image" :alt="service.name" class="rounded-xl"/>
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{{ service.name }}</h2>
                  <p>{{ service.description }}</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">{{ service.price }} €</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import cubeVaisselleImage from '@/assets/cube_vaisselle.webp'
import charlotteAlimentaireImage from '@/assets/charlotte_alimentaire.webp'
import lavageVoiture from '@/assets/lavage_voiture.webp'
import locaVelo from '@/assets/location-velo.jpg'


export default {
  name: 'Home',
  data() {
    return {
      products: [
        { name: 'Cube Vaisselle', description: 'Savon Solide', price: 6, image: cubeVaisselleImage },
        { name: 'Charlotte Alimentaire', description: 'Charlotte alimentaire en tissu', price: 6, image: charlotteAlimentaireImage },
      ],
      services: [
        {name: 'Lavage Voiture', description: 'Plus ou moins tout compris', price: 20, image: lavageVoiture },
        {name: 'Location de velos', description: 'Ecologique et pratique !', price: 6, image: locaVelo},
      ]
    };
  },
  computed: {
    productPairs() {
      const pairs = [];
      let tempPair = [];
      this.products.forEach((product, index) => {
        tempPair.push(product);
        if ((index + 1) % 2 === 0 || index === this.products.length - 1) {
          pairs.push(tempPair);
          tempPair = [];
        }
      });
      return pairs;
    },
    servicePairs() {
      const pairs = [];
      let tempPair = [];
      this.services.forEach((service, index) => {
        tempPair.push(service);
        if ((index + 1) % 2 === 0 || index === this.services.length - 1) {
          pairs.push(tempPair);
          tempPair = [];
        }
      });
      return pairs;
    }
  }
}
</script>