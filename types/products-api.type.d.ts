export interface ProductsAPIResponseType {
  count:      number;
  data:       ProductAPIResponseType[];
  __typename: string;
  pageInfo:   PageInfo;
}

export interface ProductAPIResponseType {
  id:                 number;
  url:                string;
  imageUrl:           string;
  imageUrlLarge:      string;
  catId:              number;
  gaKey:              string;
  countReview:        number;
  discountPercentage: number;
  preorder:           boolean;
  name:               string;
  price:              string;
  priceInt:           number;
  original_price:     string;
  rating:             number;
  wishlist:           boolean;
  labels:             any[];
  badges:             Badge[];
  shop:               ProductShopApiResponseType;
  labelGroups:        LabelGroup[];
  __typename:         DatumTypename;
}

export enum DatumTypename {
  AceSearchProduct = "AceSearchProduct",
}

export interface Badge {
  imageUrl:   string;
  show:       boolean;
  __typename: BadgeTypename;
}

export enum BadgeTypename {
  AceSearchBadge = "AceSearchBadge",
}

export interface LabelGroup {
  position:   Position;
  title:      Title;
  type:       Type;
  __typename: LabelGroupTypename;
}

export enum LabelGroupTypename {
  AceSearchLabelUnify = "AceSearchLabelUnify",
}

export enum Position {
  Gimmick = "gimmick",
  Price = "price",
}

export enum Title {
  Grosir = "Grosir",
  ProdukTerbaru = "Produk Terbaru",
}

export enum Type {
  LightGreen = "lightGreen",
  TextDarkOrange = "textDarkOrange",
}

export interface ProductShopApiResponseType {
  id:           number;
  url:          string;
  name:         Name;
  goldmerchant: boolean;
  official:     boolean;
  reputation:   string;
  clover:       string;
  location:     Location;
  __typename:   ShopTypename;
}

export enum ShopTypename {
  AceShop = "AceShop",
}

export enum Location {
  JakartaBarat = "Jakarta Barat",
  KabBogor = "Kab. Bogor",
  Medan = "Medan",
}

export enum Name {
  AnekaBuanaJayaABJ3 = "Aneka Buana Jaya (ABJ 3)",
  AweweSahastire9 = "awewe sahastire9",
  NandaTanShop = "Nanda Tan Shop",
}

export interface PageInfo {
  currentPage:     number;
  totalPage:       number;
  totalData:       number;
  __typename:      string;
  hasNextPage:     boolean;
  hasPreviousPage: boolean;
}
