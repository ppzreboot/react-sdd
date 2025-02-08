import { context } from 'esbuild'

const ctx = await context({
  entryPoints: ['demo/main.tsx'],
  outdir: 'demo',
  bundle: true,
  logLevel: 'debug',
})

await ctx.watch()

await ctx.serve({
  servedir: 'demo',
})
