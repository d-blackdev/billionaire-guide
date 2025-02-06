export interface IIconProps {
  size?: number;
  color?: string;
}

export interface IMovie {
  image: string;
  imdbRating: string;
  link: string;
  title: string;
  totalGross: string;
  weekendGross: string;
  weeksReleased: string;
  categories?: string[];
}
