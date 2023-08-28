export interface CategoriesApiResponseType {
  id: number
  name: string
  url: string
  iconImageUrl: string
  isCrawlable: number
  children: CategoryChildrenApiResponseType[]
  __typename: string
}

export interface CategoryChildrenApiResponseType {
  id: number
  name: string
  url: string
  isCrawlable: number
  children: CategoryChildrenChildrenApiResponseType[]
  __typename: string
}

export interface CategoryChildrenChildrenApiResponseType {
  id: number
  name: string
  url: string
  isCrawlable: number
  __typename: string
}
