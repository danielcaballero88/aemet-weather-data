export interface Item {
    id: string;
    name: string;
    description?: string;
}

export interface CreateItemRequest {
    name: string;
    description?: string;
}

export interface CreateItemResponse {
    item: Item;
}

export interface GetItemsResponse {
    items: Item[];
}