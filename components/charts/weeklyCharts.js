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
export default function WeeklyGoalsChart({ completedGoals }) {
  const [weeklyStats, setWeeklyStats] = useState([]);

  useEffect(() => {
    if (!completedGoals?.length) {
      setWeeklyStats([]);
      return;
    }

    const days = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];

      const court = completedGoals.filter(
        (g) => g.term === "court" && g.completedAt?.startsWith(dateStr)
      ).length;
      const moyen = completedGoals.filter(
        (g) => g.term === "moyen" && g.completedAt?.startsWith(dateStr)
      ).length;
      const long = completedGoals.filter(
        (g) => g.term === "long" && g.completedAt?.startsWith(dateStr)
      ).length;

      days.push({
        date: d.toLocaleDateString("fr-FR", { weekday: "short" }),
        court,
        moyen,
        long,
      });
    }

    setWeeklyStats(days);
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
      <ResponsiveContainer style={{ borderRadius: "20px" }}>
        <LineChart
          data={weeklyStats}
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
