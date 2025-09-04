#!/usr/bin/env node

import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { rmSync, existsSync } from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')
const vitCacheDir = join(projectRoot, 'node_modules', '.vite')

function cleanViteCache() {
  try {
    if (existsSync(vitCacheDir)) {
      console.log(`Removing Vite cache directory: ${vitCacheDir}`)
      rmSync(vitCacheDir, { recursive: true, force: true })
      console.log('Vite cache cleanup completed.')
    } else {
      console.log('Vite cache directory does not exist, skipping cleanup.')
    }
  } catch (error) {
    console.warn(`Warning: Could not remove Vite cache: ${error.message}`)
  }
}

cleanViteCache()
