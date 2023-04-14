import puppeteer, { Browser } from "puppeteer";
import { IProduct } from "../interfaces/product";

export class BuscapeScraper {
  private baseUrl = "https://www.buscape.com.br";

  async execute(category: string): Promise<Omit<IProduct, "id" | "category">[]> {
    const browser: Browser = await puppeteer.launch({ args: ['--disable-cache'] });
    const page = await browser.newPage();
    await page.goto(`${this.baseUrl}/${category}`, { waitUntil: "load" });

    const productsData = await page.evaluate((url: string) => {
      const productPods = Array.from(document.querySelectorAll("a.SearchCard_ProductCard_Inner__7JhKb"));

      const data = productPods.map((product: Element) => ({
        description: product.querySelector("h2.SearchCard_ProductCard_Name__ZaO5o")?.innerHTML ?? "",
        price: product.querySelector("p.Text_Text__h_AF6")?.innerHTML.replace("R$ ", "") ?? "",
        imageLink: product.querySelector("img")?.getAttribute("src") ?? "",
        webSiteLink: url + product.getAttribute("href") ?? "",
      }));

      return data;
    }, this.baseUrl);

    await browser.close();

    return productsData;
  }
}
