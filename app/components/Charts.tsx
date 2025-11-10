"use client"
import { motion } from "motion/react";
import { fadeInUp } from "../lib/animations";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData, StatisticsData } from "../types";
const statisticsData: StatisticsData[] = [
  {
    year: "2025",
    amount: "5.000,00",
    acquaintances: "50 знаком",
    percentages: [60, 20, 10, 0],
    labels: ["Верхняя", "Дуб", "Едим"],
  },
  {
    year: "2023",
    amount: "5.000,00",
    acquaintances: "50 знаком",
    percentages: [60, 20, 10, 0],
    labels: ["Верхняя", "Дуб", "Едим"],
  },
  {
    year: "2024",
    amount: "5.000,00",
    acquaintances: "50 знаком",
    percentages: [60, 20, 10, 0],
    labels: ["Верхняя", "Дуб", "Едим"],
  },
];
const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];
export function Charts() {
    {/* need refactor charts cuz styles is different*/}
  const chartData: ChartData[] = statisticsData.flatMap((item, index) =>
    item.percentages.map((percentage, pIndex) => ({
      name: `${item.year} - ${
        item.labels[pIndex] || `Категория ${pIndex + 1}`
      }`,
      value: percentage,
      fill: colors[pIndex % colors.length],
    }))
  );
  return (
    <motion.section
      className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
        Статистика
      </h2>

      {/* График */}
      <motion.div
        className="h-64 sm:h-80 lg:h-96 mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
              fontSize={12}
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              name="Процент"
              animationBegin={300}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Детальная статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {statisticsData.map((data, index) => (
          <motion.div
            key={index}
            className="text-center p-4 border border-gray-100 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
              {data.year}
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                {data.amount}
              </div>
              <div className="text-gray-600 text-sm sm:text-base lg:text-lg">
                {data.acquaintances}
              </div>
              {data.percentages.map((percentage, pIndex) => (
                <div
                  key={pIndex}
                  className="flex justify-between items-center gap-2"
                >
                  <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: colors[pIndex] }}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{
                        delay: index * 0.2 + pIndex * 0.1 + 0.7,
                        duration: 0.8,
                      }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 min-w-8">
                    {percentage}%
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 gap-1">
                {data.labels.map((label, labelIndex) => (
                  <span key={labelIndex} className="flex-1">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
