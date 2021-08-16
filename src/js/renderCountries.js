import countryListTemplate from '../templates/country-list.hbs';
import countryCardTemplate from '../templates/country-card.hbs';
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css';


defaultModules.set(PNotifyMobile, {});

export default function renderCountries(countries, selector) {
   let countriesMarkup = '';
   const countriesContainer = document.querySelector(`${selector}`);


   if(countries.length <= 10) {
      countriesMarkup = countryListTemplate(countries);
   }

   if(countries.length === 1) {
      countriesMarkup = countryCardTemplate(countries);
   }

   if(countries.length === 0) {
      countriesMarkup = '';
   }

   if(countries.length > 10) {
      alert({
         text: 'Too many matches found. Please enter a more specific query!',
      });
   }

   countriesContainer.innerHTML = countriesMarkup;
}
