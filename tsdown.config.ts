import {defineConfig} from 'tsdown'

const config = defineConfig({
  clean: true,
  fixedExtension: true,
  dts: true,
  format: ['esm', 'cjs']
})

export default config