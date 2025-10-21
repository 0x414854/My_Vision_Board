"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Props:
 *   completedGoals: array of goals { id, text, term, completedAt }
 */
export default function AllGoalsChart({ completedGoals }) {
  const [allStats, setAllStats] = useState([]);

  useEffect(() => {
    if (!completedGoals?.length) {
      setAllStats([]);
      return;
    }

    // Regrouper par date
    const groupedByDate = {};

    completedGoals.forEach((g) => {
      const dateStr = g.completedAt.split("T")[0]; // "YYYY-MM-DD"
      if (!groupedByDate[dateStr])
        groupedByDate[dateStr] = { court: 0, moyen: 0, long: 0 };
      groupedByDate[dateStr][g.term]++;
    });

    // Trier les dates
    const sortedDates = Object.keys(groupedByDate).sort();

    // Transformer en tableau pour Recharts
    const chartData = sortedDates.map((d) => ({
      date: new Date(d).toLocaleDateString("fr-FR", { weekday: "short" }),
      ...groupedByDate[d],
    }));

    setAllStats(chartData);
  }, [completedGoals]);

  return (
    <div
      style={{
        width: "100%",
        height: 250,
        marginTop: 20,
        background: "white",
        borderRadius: "20px",
      }}
    >
      <ResponsiveContainer>
        <LineChart
          data={allStats}
          margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          {/* <Legend verticalAlign="top" /> */}
          <Line
            type="monotone"
            dataKey="court"
            stroke="#4caf50"
            name="Court terme"
          />
          <Line
            type="monotone"
            dataKey="moyen"
            stroke="#2196f3"
            name="Moyen terme"
          />
          <Line
            type="monotone"
            dataKey="long"
            stroke="#ff9800"
            name="Long terme"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
