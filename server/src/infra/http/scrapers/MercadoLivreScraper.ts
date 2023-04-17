import puppeteer, { Browser } from "puppeteer";
import { IScrapedData } from "@application/interfaces/product";
import { IScraper } from "@application/interfaces/scraper";

export class MercadoLivreScraper implements IScraper {
  private baseUrl = "https://www.mercadolivre.com.br/";

  async execute(category: string): Promise<IScrapedData[]> {
    const browser: Browser = await puppeteer.launch({ args: ['--disable-cache'] });
    const page = await browser.newPage();
    await page.goto(this.baseUrl, { waitUntil: "load", timeout: 0 });

    await page.type(".nav-search-input", category);
    await page.click("[type=submit]");
    await page.waitForSelector(".nav-search-input", { timeout: 0 });

    const productsData = await page.evaluate(() => {
      const productPods = Array.from(document.querySelectorAll("li.ui-search-layout__item"));

      const data = productPods.map((product: Element) => {
        const imageSrc = product.querySelector("img.ui-search-result-image__element")?.getAttribute("src");
        const imageDataSrc = product.querySelector("img.ui-search-result-image__element")?.getAttribute("data-src");

        return {
          description: product.querySelector("a.ui-search-item__group__element")?.getAttribute("title") ?? "",
          price: product.querySelector("div.ui-search-price__second-line .price-tag-fraction")?.innerHTML ?? "",
          imageLink: (imageSrc?.includes("data:") ? imageDataSrc : imageSrc) ?? "",
          websiteLink: product.querySelector("a.ui-search-item__group__element")?.getAttribute("href") ?? "",
        }
      });
      return data;
    });

    await browser.close();

    return productsData;
  }
}
