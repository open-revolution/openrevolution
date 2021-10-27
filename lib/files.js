import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const ROOT = process.cwd()

const CONTENT = path.join(ROOT, 'content/')

function getAllFilesRecursively(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const tpath = fs.statSync(path.join(dir, file))
    if (tpath.isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist)
    } else {
      filelist = filelist.concat(path.join(dir, file))
    }
  })
  return filelist
}

export function getFiles(prefix='') {
  const prefixPath = os.path.join(CONTENT, prefix)
  var filePaths = getAllFilesRecursively(prefixPath)
    .map((file) => { return file.slice(CONTENT_PATH.length) })
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
}

export function getAllFilesFrontMatter(folder='') {
  const prefixPaths = path.join(CONTENT, folder)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { content: content, data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        summary: content.split(' ').slice(0,20).join(' '),
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}
