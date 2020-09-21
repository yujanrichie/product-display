export interface ProductInfo
{
    id: string;
    status: string;
    name: string;
    hierarchy: string;
    types?: ProductType[];
}

export interface ProductType {
    id: string;
    status: string;
    name: string;
    colorText?: string;
    url?: string;
    imageURL?: string,
    isSelected?: boolean;
    mediaList?: ProductTypeMediaInfo[];
    sizeList?: ProductTypeSizeInfo[];
}

export interface ProductTypeMediaInfo {
    imageURL: string;
    description?: string;
    isPrimary?: boolean;
}

export interface ProductTypeSizeInfo {
    id: string;
    status: string;
    name?: string;
    inStock: boolean;
    size?: string;
    textSize?: string;
    isSelected?: boolean;
}