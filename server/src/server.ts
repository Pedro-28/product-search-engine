import Fastify, { FastifyRequest } from "fastify";
import puppeteer, { Browser } from "puppeteer";

const ML_URL = "https://www.mercadolivre.com.br/";
const BP_URL = "https://www.buscape.com.br/";

const app = Fastify();

app.get("/products/:category/mercadolivre", async (request: FastifyRequest) => {
  const browser: Browser = await puppeteer.launch({ args: ['--disable-cache'] });
  const page = await browser.newPage();
  await page.goto(ML_URL);

  await page.type(".nav-search-input", "celular");
  await page.click("[type=submit]");
  await page.waitForSelector(".nav-search-input");

  const productsData = await page.evaluate(() => {
    const productPods = Array.from(document.querySelectorAll("li.ui-search-layout__item"));

    const data = productPods.map((product: Element) => ({
      description: product.querySelector("a.ui-search-item__group__element")?.getAttribute("title"),
      price: product.querySelector("div.ui-search-price__second-line .price-tag-fraction")?.innerHTML,
      imageLink: product.querySelector("img.ui-search-result-image__element")?.getAttribute("src"),
      webSiteLink: product.querySelector("a.ui-search-item__group__element")?.getAttribute("href"),
    }));
    return data;
  });

  await browser.close();

  return productsData;
});


app.get("/products/:category/buscape", async (request: FastifyRequest) => {
  const browser: Browser = await puppeteer.launch({ args: ['--disable-cache'] });
  const page = await browser.newPage();
  await page.goto(BP_URL + "tv", { waitUntil: "load" });

  // await page.type("input.AutoCompleteStyle_input__HG105", "geladeira");
  // await page.click("button.AutoCompleteStyle_submitButton__GkxPO");
  // await page.waitForSelector("a.SearchCard_ProductCard_Inner__7JhKb");

  const productsData = await page.evaluate(() => {
    const productPods = Array.from(document.querySelectorAll("a.SearchCard_ProductCard_Inner__7JhKb"));

    const data = productPods.map((product: Element) => ({
      description: product.querySelector("h2.SearchCard_ProductCard_Name__ZaO5o")?.innerHTML,
      price: product.querySelector("p.Text_Text__h_AF6")?.innerHTML.replace("R$ ", ""),
      imageLink: product.querySelector("img")?.getAttribute("src"),
      webSiteLink: "https://www.buscape.com.br" + product.getAttribute("href"),
    }));
    return data;
  });

  await browser.close();

  console.log(productsData);

  return productsData;
});

app.listen({
  port: 3333,
}).then(() => console.log("Server running"));
