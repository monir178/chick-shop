type TCollectionType = {
    _id: string;
    title: string;
    products: number;
    image: string;
};

type TProductType = {
    _id: string;
    title: string;
    description: string;
    media: [string];
    category: string;
    collections: [string];
    tags: [string];
    price: number;
    cost: number;
    sizes: [string];
    colors: [string];
    createdAt: string;
    updatedAt: string;
};

type TUserType = {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
};

type TOrderType = {
    shippingAddress: Object;
    _id: string;
    customerClerkId: string;
    products: [OrderItemType]
    shippingRate: string;
    totalAmount: number
}

type TOrderItemType = {
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
    _id: string;
}