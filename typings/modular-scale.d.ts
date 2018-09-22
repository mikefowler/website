declare module 'modular-scale' {
  export interface ModularScaleOptions {
    /** The ratio to use in the generated type scale function */
    ratio?: ModularScaleRatio;

    /** The base font size (in pixels) to use for the type scale */
    base?: number;
  }

  declare function ms(step: number, relative?: boolean): number;

  declare namespace ms {
    declare function steps(steps: number, relative?: boolean): number[];
  }

  declare function ModularScale(options: ModularScaleOptions): typeof ms;

  export default ModularScale;

  declare namespace ModularScale {
    declare const ratios = {
      minorSecond = 1.067,
      majorSecond = 1.125,
      minorThird = 1.2,
      majorThird = 1.25,
      perfectFourth = 1.333,
      augFourth = 1.414,
      perfectFifth = 1.5,
      minorSixth = 1.6,
      goldenSection = 1.618,
      majorSixth = 1.667,
      minorSeventh = 1.778,
      majorSeventh = 1.875,
      octave = 2,
      majorTenth = 2.5,
      majorEleventh = 2.667,
      majorTwelfth = 3,
      doubleOctave = 4,
    };
  }
}
