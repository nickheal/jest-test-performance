import { matcherHint, printDiffOrStringify } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (func, target, result) => () => `
  ${matcherHint('.not.toBeFasterThan', 'received', '')}
  Function '${func}' ran faster than expected:
  ${printDiffOrStringify(target, result, 'Expected', 'Received', true)}
`;

const failMessage = (func, target, result) => () => `
  ${matcherHint('.toBeFasterThan', 'received', '')}
  Function '${func}' ran slower than expected:
  ${printDiffOrStringify(target, result, 'Expected', 'Received', true)}
`;

export default {
  toBeFasterThan: async (func, target) => {
    const [pass, result] = await predicate(func, target);
    if (pass) {
      return { pass: true, message: passMessage(func, target, result) };
    }

    return { pass: false, message: failMessage(func, target, result) };
  }
};
