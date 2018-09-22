import ModularScale from 'modular-scale';

const ms = ModularScale({
  base: 16,
  ratio: ModularScale.ratios.augFourth,
});

const fontSizes = ms.steps(6).reverse();

export default fontSizes;
