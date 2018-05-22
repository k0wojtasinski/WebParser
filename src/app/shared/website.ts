export interface Website {
  title: string;
  author?: string;
  content: string;
  date_published?: Date;
  lead_image_url?: string;
  dek?: string;
  url: string;
  domain: string;
  excerpt: string;
  word_count: number;
  direction: string;
  total_pages: number;
  rendered_pages: number;
  next_page_url?: string;
  statistics?: any;
}
