import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';

import './sass/main.scss';

const refs = {
   inputCountriesSearch: document.querySelector('.js-countries-search'),
   countriesContent: document.querySelector('.js-countries-content'),
};

refs.inputCountriesSearch.addEventListener('input', onInputCountriesSearch);

function onInputCountriesSearch(e) {
   const inputValue = e.currentTarget.value;

   if(inputValue.length === 0) {
      return;
   }

   fetchCountries(inputValue).then(countries => {
      renderCountries(countries, '.js-countries-content');
   });
}