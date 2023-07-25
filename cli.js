import { resolve } from "path"
import { readdir, stat, writeFile } from "node:fs/promises"




const result = []
async function createSrc(dir) {

  const entries = await readdir(resolve(dir))
  for (const entry of entries) {
    const s = await stat(resolve(`${dir}/${entry}`))
    if (s.isDirectory()) {
      await createSrc(`${dir}/${entry}`)
    } else {
      result.push(`${dir}/${entry}`)
    }
  }
}

await createSrc('img')

await writeFile('photo.js', `export const list = ${JSON.stringify(result, null, 2)};`)

console.log(result)