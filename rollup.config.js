import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
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
  plugins: [typescript()],
};
