import puppeteer, { Browser } from "puppeteer";
import { IScrapedData } from "@application/interfaces/product";
import { IScraper } from "@application/interfaces/scraper";

export class BuscapeScraper implements IScraper {
  private baseUrl = "https://www.buscape.com.br";

  async execute(category: string): Promise<IScrapedData[]> {
    const browser: Browser = await puppeteer.launch({ args: ['--disable-cache'] });
    const page = await browser.newPage();
    await page.goto(`${this.baseUrl}/search?q=${category}`, { waitUntil: "load" });

    const productsData = await page.evaluate((url: string) => {
      const productPods = Array.from(document.querySelectorAll("a.SearchCard_ProductCard_Inner__7JhKb"));

      const data = productPods.map((product: Element) => {
        const imageSrc = product.querySelector("div.SearchCard_ProductCard_Image__ffKkn img")?.getAttribute("src");
        const noscriptTag = product.querySelector("div.SearchCard_ProductCard_Image__ffKkn noscript");

        const newDiv = document.createElement('div');
        newDiv.innerHTML = noscriptTag?.innerHTML ?? "";

        const imageInNoscript = newDiv.querySelector("img")?.getAttribute("src");
        return {
          description: product.querySelector("h2.SearchCard_ProductCard_Name__ZaO5o")?.innerHTML ?? "",
          price: product.querySelector("p.Text_Text__h_AF6")?.innerHTML.replace("R$ ", "") ?? "",
          imageLink: (imageInNoscript ? imageInNoscript : imageSrc) ?? "",
          websiteLink: url + product.getAttribute("href") ?? "",
        }
      });

      return data;
    }, this.baseUrl);

    await browser.close();

    return productsData;
  }
}
