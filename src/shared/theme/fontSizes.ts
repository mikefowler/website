import ModularScale from 'modular-scale';

const ms = ModularScale({
  base: 20,
  ratio: ModularScale.ratios.minorThird,
});

const fontSizes = Array(8)
  .fill(null)
  .map((_, i) => ms(i - 2));

export default fontSizes;
