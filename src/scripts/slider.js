const sliderElement = document.getElementById('pricing-slider');
const pageviewsElement = document.getElementById('pageviews');
const priceElement = document.getElementById('price');
const toggleYearlyElement = document.getElementById('yearly');
const toggleMonthlyElement = document.getElementById('monthly');

const myMappings = [
  { pageviews: '10k', price: '8' },
  { pageviews: '50k', price: '12' },
  { pageviews: '100k', price: '16' },
  { pageviews: '500k', price: '24' },
  { pageviews: '1m', price: '36' },
];
let sliderPosition = sliderElement.value;
let discount = 0;

sliderElement.addEventListener('input', (e) => {
  updateSliderPosition();
  updatePageviews();
  updatePrice();
  updateSliderBackground();
  updateSliderText();
});

toggleYearlyElement.addEventListener('click', (e) => {
  setDiscount(0.25);
  updatePrice();
});

toggleMonthlyElement.addEventListener('click', (e) => {
  setDiscount(0);
  updatePrice();
});

function updateSliderPosition() {
  sliderPosition = sliderElement.value;
}

function updateSliderBackground() {
  sliderElement.style.background = `linear-gradient(90deg, #a5f3eb ${
    sliderPosition * 25
  }%, #eaeefb ${sliderPosition * 25}%)`;
}

function setDiscount(discountRate) {
  discount = discountRate;
}

function updatePrice() {
  priceElement.textContent =
    myMappings[sliderPosition].price * (1 - discount) + '.00$';
}

function updatePageviews() {
  pageviewsElement.textContent = myMappings[sliderPosition].pageviews;
}

function updateSliderText() {
  sliderElement.ariaValueNow = sliderElement.rangeVal;
  sliderElement.ariaValueText = `${pageviewsElement.textContent} page views for ${priceElement.textContent} per month`;
}
