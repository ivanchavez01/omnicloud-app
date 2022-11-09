export interface BookDto {
  id: number;
  title: string;
  published_at: Date;
  price: number;
  editorial: EditorialDto;
  authors: Author[];
}

export interface EditorialDto {
  id: number;
  name: string;
  phone_number: string;
}

export interface Author {
  id: number;
  name: string;
  last_name: string;
  email: string;
}
