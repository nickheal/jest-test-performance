import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'esm/index.js',
      format: 'es',
    },
  ],
  plugins: [babel()],
};
