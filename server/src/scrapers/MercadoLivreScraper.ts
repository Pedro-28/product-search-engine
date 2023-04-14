import puppeteer, { Browser } from "puppeteer";
import { IProduct } from "../interfaces/product";

export class MercadoLivreScraper {
  private baseUrl = "https://www.mercadolivre.com.br/";

  async execute(category: string): Promise<Omit<IProduct, "id" | "category">[]> {
    const browser: Browser = await puppeteer.launch({ args: ['--disable-cache'] });
    const page = await browser.newPage();
    await page.goto(this.baseUrl, { waitUntil: "load" });

    await page.type(".nav-search-input", category);
    await page.click("[type=submit]");
    await page.waitForSelector(".nav-search-input");

    const productsData = await page.evaluate(() => {
      const productPods = Array.from(document.querySelectorAll("li.ui-search-layout__item"));

      const data = productPods.map((product: Element) => ({
        description: product.querySelector("a.ui-search-item__group__element")?.getAttribute("title") ?? "",
        price: product.querySelector("div.ui-search-price__second-line .price-tag-fraction")?.innerHTML ?? "",
        imageLink: product.querySelector("img.ui-search-result-image__element")?.getAttribute("src") ?? "",
        webSiteLink: product.querySelector("a.ui-search-item__group__element")?.getAttribute("href") ?? "",
      }));
      return data;
    });

    await browser.close();

    return productsData;
  }
}