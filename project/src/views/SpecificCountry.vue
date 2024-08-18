<template>
  <div v-if="country">
    <!-- <button class="go-back" @click="$router.go(-1)"> -->
    <button class="go-back" @click="$router.push('/')">
      <span>&#8592;</span> Back
    </button>
    <div class="country-details">
      <div class="country-flag">
        <img :src="country.flag" :alt="`Flag of ${country.name}`" />
      </div>
      <div class="country-container">
        <h1>{{ country.name }}</h1>
        <div class="two-p">
          <div class="first-p">
            <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
            <p>
              <strong>Population:</strong>
              {{ country.population.toLocaleString() }}
            </p>
            <p><strong>Region:</strong> {{ country.region }}</p>
            <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
            <p><strong>Capital:</strong> {{ country.capital }}</p>
          </div>
          <div class="second-p">
            <p>
              <strong>Top Level Domain:</strong> {{ country.topLevelDomain[0] }}
            </p>
            <p>
              <strong>Currencies:</strong>
              <span v-if="country.currencies.length">
                <ul>
                  <li
                    v-for="currency in country.currencies"
                    :key="currency.code"
                  >
                    {{ currency.name }}
                  </li>
                </ul>
              </span>
              <span v-else>No currencies available</span>
            </p>
            <p>
              <strong>Languages:</strong>
              <span v-if="country.languages.length">
                <ul>
                  <li v-for="lang in country.languages" :key="lang.code">
                    {{ lang.name }}
                  </li>
                </ul>
              </span>
              <span v-else>No languages info available</span>
            </p>
          </div>
        </div>
        <div class="borders">
          <div>
            <strong>Border Countries:</strong>
            <span v-if="country.borders.length">
              <ul>
                <li
                  v-for="border in country.borders"
                  :key="border.code"
                  @click="goToCountry(border)"
                >
                  {{ localData.find((c) => c.alpha3Code === border).name }}
                </li>
              </ul>
            </span>
            <span v-else>No borders info available</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading country details...</p>
  </div>
</template>

<style lang="scss" scoped>
.go-back {
  padding: 10px 20px;
  border: none;
  width: 136px;
  @media (max-width: 768px) {
    margin: 40px 0 60px 25px;
  }
  margin: 80px 50px;
  /* box-shadow: 0 0 5px 5px rgb(0 0 0 / 0.4); */
  box-shadow: 0 0 10px 2px $dark-gray;
  border-radius: $main-border-radius;
}
.country-details {
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  justify-content: space-evenly;
  .country-container {
    h1 {
      font-size: 26px;
      @media (max-width: 768px) {
        margin: 40px 0 30px 25px;
      }
    }
    .two-p {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
        margin-left: 25px;
      }
    }
    .borders {
      ul {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        max-width: 350px;
        @media (max-width: 768px) {
          max-width: calc(100% - 50px);
          margin: 20px 25px;
        }
        li {
          box-shadow: 0 0 10px 2px $dark-gray;
          border-radius: $main-border-radius;
          margin-right: 15px;
          padding: 10px;
          margin-bottom: 15px;
        }
      }
      strong {
        @media (max-width: 768px) {
          margin-left: 25px;
        }
      }
    }
  }
}

.country-flag {
  img {
    width: 400px;
    height: auto;
    @media (max-width: 768px) {
      width: calc(100% - 50px);
      left: 25px;
      position: relative;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import localData from "@/assets/data.json";

const route = useRoute();
const router = useRouter();
const countryName = ref(decodeURIComponent(route.params.name as string));
const country = ref(null);

const fetchCountryData = () => {
  if (!countryName.value) {
    console.error("Country name is not provided.");
    country.value = null;
    return;
  }
  const foundCountry = localData.find(
    (c) => c.name.toLowerCase() === countryName.value.toLowerCase()
  );
  if (!foundCountry) {
    console.error(`Country "${countryName.value}" not found in data.`);
  }
  country.value = foundCountry || null;
};

// Fetch the country data on mount
onMounted(fetchCountryData);

// Watch for changes in the route parameters and fetch new country data
watch(
  () => route.params.name,
  (newName) => {
    countryName.value = decodeURIComponent(newName as string);
    fetchCountryData();
  }
);

// Navigate to another country
const goToCountry = (alphaName: string) => {
  const toPushTo = localData.find((c) => c.alpha3Code === alphaName)?.name;
  if (toPushTo) {
    router.push({ name: "countryName", params: { name: encodeURIComponent(toPushTo) } });
  }
};
</script>
