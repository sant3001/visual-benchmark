export interface TestSuite {
  name: string;
  opts: TestSuiteOpts[];
}

export interface TestSuiteOpts {
  size?: Size;
  range?: Range;
  generator?: TestSuiteGenerator;
}

export interface TestSuiteGenerator {
  (size: number, range?: Range): number[];
}

export interface Range {
  min: number;
  max: number;
}

export interface Size {
  from: number;
  to: number;
  step: number;
}

export const generateRandomIntInclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomizedArray: TestSuiteGenerator = (size, range) => {
  return Array.from(new Array(size)).map(() => generateRandomIntInclusive(range?.min || 0, range?.max || size));
};



export const withElementsInRange = (min: number, max: number): { range: Range } => {
  return { range: { min: min, max: max } };
};

const size = (from: number, to: number, step = 1): { size: Size } => {
  return { size: { from: from, to: to, step: step } };
};

