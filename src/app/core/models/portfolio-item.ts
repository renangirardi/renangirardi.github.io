export interface PortfolioItem {
  title: string;
  year: string;
  summary: string;
  technologies: string[];
  description: string;
  features: string[];
  imageUrls: string[];
  links: string[];
  isFeatured?: boolean;
  route: string;
}
