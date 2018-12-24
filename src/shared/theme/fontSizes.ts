import ModularScale, { ratios } from 'modular-scale';

const ms = ModularScale({
  base: 20,
  ratio: ratios.majorThird,
});

const fontSizes = Array(8)
  .fill(null)
  .map((_, i) => ms(i - 2));

export default fontSizes;
