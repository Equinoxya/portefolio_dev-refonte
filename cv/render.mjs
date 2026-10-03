// Génère cv.pdf à partir de cv.html. Voir README.md.
import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(new URL('./cv.html', import.meta.url).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)

const hauteur = await page.evaluate(() => document.body.scrollHeight)
console.log(`Hauteur du corps : ${hauteur} px (une page A4 ≈ 1123 px)`)
if (hauteur > 1123) console.warn('⚠ Le contenu déborde : le PDF fera plus d’une page.')

await page.pdf({ path: new URL('./cv.pdf', import.meta.url).pathname, format: 'A4', printBackground: true })
await browser.close()
