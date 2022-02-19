export interface Product {
    createdAt: string;
    name: string;
    color: string;
    price: string;
    description: string;
    image: string;
    materials: ProductMaterial;
    id: string;
}

export type ProductMaterial = 'Cotton' | 'Concrete' | 'Metal' | 'Granite' | 'Frozen' | 'Plastic' | 'Steel';
