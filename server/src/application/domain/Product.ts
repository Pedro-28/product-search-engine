import { IProduct } from "../interfaces/product";
import { randomUUID } from 'crypto';
import { Replace } from "../../helpers/Replace";


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

  public get website(): string {
    return this.props.website;
  }

  public set website(website: string) {
    this.props.website = website;
  }

  public get websiteLink(): string {
    return this.props.websiteLink;
  }

  public set websiteLink(websiteLink: string) {
    this.props.websiteLink = websiteLink;
  }
}
