import { build } from 'esbuild'
import { rmSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs'

empty_dist()
output_misc()
await build({
  entryPoints: ['index.ts'],
  outdir: 'dist',
  logLevel: 'debug',
  minify: true,
})

function empty_dist() {
  try {
    rmSync('dist', { recursive: true })
  } catch(err) {
    console.log('"./dist" not exist')
  }
  mkdirSync('dist')
}

function output_misc() {
  cp('readme.md')
  cp('index.ts')
  writeFileSync('dist/package.json', JSON.stringify({
    name: 'react-sdd',
    description: 'State-Driven Dev for React.',
    version: '0.0.1',

    repository: 'github:ppzreboot/react-sdd',
    author: 'PPz',
    license: 'UNLICENSED',
    type: 'module',

    peerDependencies: {
      zustand: '>=5.0.3'
    },
  }))
}

function cp(source) {
  copyFileSync(source, './dist/' + source)
}
