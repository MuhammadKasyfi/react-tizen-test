import fs from 'node:fs/promises'
import path from 'node:path'

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function copyEntry(src, dest) {
  // Replace destination entry to avoid stale bundles/assets.
  if (await exists(dest)) {
    await fs.rm(dest, { recursive: true, force: true })
  }

  const stat = await fs.stat(src)
  if (stat.isDirectory()) {
    await fs.mkdir(dest, { recursive: true })
    await fs.cp(src, dest, { recursive: true })
    return
  }

  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.copyFile(src, dest)
}

async function main() {
  const destRootArg = process.argv[2]
  if (!destRootArg) {
    console.error('Usage: node scripts/sync-to-tizen.mjs "C:\\path\\to\\TizenWebProject"')
    process.exit(2)
  }

  const repoRoot = path.resolve(process.cwd())
  const distDir = path.join(repoRoot, 'dist')
  const destRoot = path.resolve(destRootArg)

  if (!(await exists(distDir))) {
    console.error(`Missing dist directory: ${distDir}. Run "npm run build" first.`)
    process.exit(1)
  }

  if (!(await exists(destRoot))) {
    console.error(`Destination folder does not exist: ${destRoot}`)
    process.exit(1)
  }

  const entries = await fs.readdir(distDir)
  for (const name of entries) {
    const src = path.join(distDir, name)
    const dest = path.join(destRoot, name)
    await copyEntry(src, dest)
  }

  console.log(`Synced ${entries.length} item(s) from ${distDir} -> ${destRoot}`)
}

await main()
