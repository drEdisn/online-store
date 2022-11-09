import noUiSlider, { target } from 'nouislider';

export default function slidersLoad() {
  const slider = document.querySelector('.slider') as target;
  noUiSlider.create(slider, {
    start: [0, 6000],
    connect: true,
    range: {
      'min': 0,
      'max': 3100
    },
    step: 10
  });

  const amountSlider = document.querySelector('.slider-amount') as target;
  noUiSlider.create(amountSlider, {
    start: [0, 21],
    connect: true,
    range: {
      'min': 0,
      'max': 21
    },
    step: 1
});
}