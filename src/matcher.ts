import { matcherHint, printDiffOrStringify } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (func: Function, target: number, result: number | boolean) => () => `
  ${matcherHint('.not.toBeFasterThan', 'received', '')}
  Function '${func}' ran faster than expected:
  ${printDiffOrStringify(target, result, 'Expected', 'Received', true)}
`;

const failMessage = (func: Function, target: number, result: number | boolean) => () => `
  ${matcherHint('.toBeFasterThan', 'received', '')}
  Function '${func}' ran slower than expected:
  ${printDiffOrStringify(target, result, 'Expected', 'Received', true)}
`;

export default {
  toBeFasterThan: async (func: Function, target: number) => {
    const [pass, result] = await predicate(func, target);
    if (pass) {
      return { pass: true, message: passMessage(func, target, result) };
    }

    return { pass: false, message: failMessage(func, target, result) };
  }
};
