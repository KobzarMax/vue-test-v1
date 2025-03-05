export type ChartDataPoint = {
  x: number | string;
  y: number;
};

export type ChartArticle = {
  title: string;
  subTitle: string;
  date: string;
  url: string;
  description: string;
  chart: ChartDataPoint[];
};

export type DataResponse = {
  data: ChartArticle[];
};
