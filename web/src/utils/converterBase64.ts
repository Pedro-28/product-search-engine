import { IProduct } from "../interfaces/product";

export function converterBase64(product: IProduct): IProduct {
  let urlOrBase64String = product.imageLink;

  if (urlOrBase64String.includes("data:image")) {
    // console.log('urlOrBase64String', urlOrBase64String);

    // const imgType = urlOrBase64String.match(/^data:image\/(\w+);base64,/);
    // console.log('imgType', imgType);
    const blob = new Blob([urlOrBase64String], { type: `image/png}` });
    urlOrBase64String = URL.createObjectURL(blob);
    console.log('urlOrBase64String', urlOrBase64String);

  }

  return {
    ...product,
    imageLink: urlOrBase64String,
  }
}