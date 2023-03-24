export class Article {
  id: number;
  barcode: string;
  name: string;
  description: string;
  sale_price: number;
  image_url: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  pivot: {
    local_id: number;
    product_id: number;
  }
  images: []
}

export class ImgData {
  id: number;
  product_uuid: string;
  storage_path: string;
  image_url: string;
  image_hash: string;
  order: number;
  type: string;
  updated_at: string;
  created_at: string;
}