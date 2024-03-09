interface BasketItemModel {
  id: number,
  quantity: number,
  product: {
    title: string,
    image: string,
    price: number
  }
}

export default BasketItemModel;
