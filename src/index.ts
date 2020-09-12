import matcher from './matcher';

const jestExpect = global.expect;

if (jestExpect !== undefined) {
  jestExpect.extend(matcher);
} else {
  /* eslint-disable no-console */
  console.error(`
    Unable to find Jest's global expect.
    Please check you have added jest-extended correctly to your jest configuration.
    See https://github.com/jest-community/jest-extended#setup for help.
  `);
  /* eslint-enable no-console */
}
