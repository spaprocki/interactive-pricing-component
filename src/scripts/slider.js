const myMappings = [
  { pageviews: '10k', price: '8' },
  { pageviews: '50k', price: '12' },
  { pageviews: '100k', price: '16' },
  { pageviews: '500k', price: '24' },
  { pageviews: '1m', price: '36' },
];
let discount = 0;

const sliderElement = document.getElementById('pricing-slider');
let sliderPosition = sliderElement.value;
const pageviewsElement = document.getElementById('pageviews');
const priceElement = document.getElementById('price');
const toggleElement = document.getElementById('toggle');

sliderElement.addEventListener('input', (e) => {
  let sliderPosition = e.target.value;
  pageviewsElement.textContent = myMappings[sliderPosition].pageviews;
  priceElement.textContent =
    myMappings[sliderPosition].price * (1 - discount) + '.00$';
  e.target.style.background = `linear-gradient(90deg, #a5f3eb ${
    sliderPosition * 25
  }%, #eaeefb ${sliderPosition * 25}%)`;
});

toggleElement.addEventListener('click', (e) => {
  sliderPosition = sliderElement.value;
  [e.target.value, discount] =
    e.target.value == 'monthly' ? ['yearly', 0.25] : ['monthly', 0];
  priceElement.textContent =
    myMappings[sliderPosition].price * (1 - discount) + '.00$';
});
