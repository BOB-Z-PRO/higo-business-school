import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

function run(command, args) {
  return spawnSync(command, args, {
    encoding: 'utf8',
    stdio: 'pipe',
    shell: true,
  })
}

const prismaResult = run('npx', ['prisma', 'generate'])

if (prismaResult.stdout) {
  process.stdout.write(prismaResult.stdout)
}

if (prismaResult.stderr) {
  process.stderr.write(prismaResult.stderr)
}

if (prismaResult.status !== 0) {
  const combinedOutput = `${prismaResult.stdout ?? ''}\n${prismaResult.stderr ?? ''}`
  const prismaClientExists = existsSync('node_modules/.prisma/client/index.js')
  const isWindowsEngineLock =
    combinedOutput.includes('query_engine-windows.dll.node') && combinedOutput.includes('EPERM')

  if (!isWindowsEngineLock || !prismaClientExists) {
    process.exit(prismaResult.status ?? 1)
  }

  console.warn(
    '[build] Prisma engine file appears to be locked on Windows. Reusing the existing generated client and continuing with next build.',
  )
}

const nextResult = run('npx', ['next', 'build'])

if (nextResult.stdout) {
  process.stdout.write(nextResult.stdout)
}

if (nextResult.stderr) {
  process.stderr.write(nextResult.stderr)
}

process.exit(nextResult.status ?? 0)
