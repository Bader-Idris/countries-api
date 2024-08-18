<template>
  <nav>
    <div class="searching">
      <SearchIcon :fill="isToggled ? 'white' : 'black'" />
      <input type="search" v-model="searchQuery"
        placeholder="Search for a country" />
    </div>
    <select v-model="selectedRegion" name="filter-by-region">
      <option value="" :hidden="true">Filter By Region</option>
      <option value="">all regions</option>
      <option v-for="region in uniqueRegions" :key="region" :value="region">
        {{ region }}
      </option>
    </select>
  </nav>
  <div class="countries">
    <div v-for="country in filteredCountries" :key="country.name"
      class="country" @click="goToCountry(country.name)">
      <div class="country-flag">
        <!-- <LazyImage :src="country.flag" :alt="`Flag of ${country.name}`" /> -->
        <img :src="country.flag" :alt="`Flag of ${country.name}`" />
      </div>
      <div class="details">
        <h2>{{ country.name }}</h2>
        <p>Population: {{ country.population }}</p>
        <p>Region: {{ country.region }}</p>
        <p>Capital: {{ country.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import localData from "@/assets/data.json";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
// import LazyImage from './LazyImage.vue' // Import the LazyImage component
const isToggled = ref(false);

import SearchIcon from "@/components/icons/Search.vue";

const countries = ref(
  localData.map((country) => ({
    name: country.name,
    capital: country.capital,
    flag: country.flags.svg,
    population: country.population,
    region: country.region,
    area: country.area
  }))
);

// State for selected region and search query
const selectedRegion = ref("");
const searchQuery = ref("");

// Create a reactive array to store the fetched countries
const fetchedCountries = ref([]);

// Function to fetch countries in batches
const fetchCountries = (batchSize: number, initialFetch = false) => {
  if (fetchedCountries.value.length >= countries.value.length) return;

  const start = initialFetch ? 0 : fetchedCountries.value.length;
  const end = Math.min(start + batchSize, countries.value.length);

  fetchedCountries.value.push(...countries.value.slice(start, end));

  if (end < countries.value.length) {
    setTimeout(() => fetchCountries(30), 2000); // Fetch 30 more countries every 2 seconds
  }
};

// Create a computed property for unique regions
const uniqueRegions = computed(() => {
  return [...new Set(countries.value.map((country) => country.region))].sort();
});

// Create a computed property for filtered countries
const filteredCountries = computed(() => {
  return fetchedCountries.value.filter((country) => {
    const matchesRegion = selectedRegion.value
      ? country.region === selectedRegion.value
      : true;
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    // we should also include country.altSpellings in the search
    return matchesRegion && matchesSearch;
  });
});

// Use the router for navigation
const router = useRouter();

const goToCountry = (name: string) => {
  router.push({ name: "countryName", params: { name: encodeURIComponent(name) } });
};

// Fetch the initial 15 countries on component mount
onMounted(() => {
  fetchCountries(15, true);
});

// const emit = defineEmits<{
//   (e: 'toggle'): void
// }>()

// function handleClick() {
//   isToggled.value = !isToggled.value;
//   emit('toggle');
// }
</script>

<style lang="scss">
main {
  nav,
  .countries {
    background-color: $very-light-gray;
    transition: all 0.3s ease;
  }
  nav {
    .searching {
      position: relative;
      @media (max-width: 768px) {
        width: calc(100% - 40px);
        margin: 20px 0 40px;
      }
      input {
        padding: 15px 10px 15px 40px;
        width: 480px;
        &:focus {
          outline: none;
          border: none;
          box-shadow: 0 0 10px 0 $dark-gray;
        }
        @media (max-width: 768px) {
          width: 100%;
        }
      }
      svg {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%) rotateY(180deg);
      }
    }
    select {
      width: 200px;
      @media (max-width: 768px) {
        align-self: self-start;
        margin-left: 20px;
        width: 50%;
      }
      &:focus {
        outline: none;
        border: none;
        box-shadow: 0 0 10px 0 $dark-gray;
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 769px) {
      padding: 20px 170px;
      flex-direction: row;
    }
    input,
    select {
      padding: 10px;
      border-radius: $main-border-radius;
      border: none;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .countries {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 20px;
    .country {
      border-radius: $main-border-radius;
      width: 300px;
      min-height: 410px;
      margin: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      display: flex;
      align-items: stretch;
      flex-direction: column;
      justify-content: space-between;

      .country-flag {
        width: 100%;
        position: relative;
        box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 10%);
        z-index: 1;
        img {
          width: 100%;
          min-height: 160px;
          border-radius: $main-border-radius $main-border-radius 0 0;
          mix-blend-mode: multiply;
        }
      }

      .details {
        padding: 20px;
      }
    }
  }
}
</style>
