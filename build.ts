import { rm } from "node:fs/promises"

await rm("dist", { recursive: true, force: true })

for (const format of ["esm", "cjs"] as const) {
  const result = await Bun.build({
    entrypoints: ["index.ts"],
    outdir: "dist",
    format,
    target: "node",
    sourcemap: "external",
    naming: format === "esm" ? "[name].js" : "[name].cjs",
  })
  if (!result.success) {
    for (const log of result.logs) console.error(log)
    process.exit(1)
  }
}
