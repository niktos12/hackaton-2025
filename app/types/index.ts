export interface StatisticsData {
  year: string;
  amount: string;
  acquaintances: string;
  percentages: number[];
  labels: string[];
}

export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}