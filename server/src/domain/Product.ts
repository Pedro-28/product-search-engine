import { IProduct } from "../interfaces/product";
import { randomUUID } from 'crypto';
import { Replace } from "../helpers/Replace";


export class Product {
  private props: IProduct;

  constructor(props: Replace<IProduct, { id?: string, category?: string }>) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      category: props.category ?? "",
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get description(): string {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get price(): string {
    return this.props.price;
  }

  public set price(price: string) {
    this.props.price = price;
  }

  public get imageLink(): string {
    return this.props.imageLink;
  }

  public set imageLink(imageLink: string) {
    this.props.imageLink = imageLink;
  }

  public get webSite(): string {
    return this.props.webSite;
  }

  public set webSite(webSite: string) {
    this.props.webSite = webSite;
  }

  public get webSiteLink(): string {
    return this.props.webSiteLink;
  }

  public set webSiteLink(webSiteLink: string) {
    this.props.webSiteLink = webSiteLink;
  }
}
