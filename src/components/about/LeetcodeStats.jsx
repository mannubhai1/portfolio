"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function LeetcodeStats() {
  const [leetCodeData, setLeetCodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredContest, setHoveredContest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://alfa-leetcode-api.onrender.com/Sneaky_guy/contest"
        );
        setLeetCodeData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !leetCodeData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl font-semibold text-gray-200">Loading...</div>
      </div>
    );
  }

  const maxRating = Math.max(
    ...leetCodeData.contestParticipation.map((contest) => contest.rating)
  );
  const maxRatingContest = leetCodeData.contestParticipation.find(
    (contest) => contest.rating === maxRating
  );
  const latestContest =
    leetCodeData.contestParticipation[
      leetCodeData.contestParticipation.length - 1
    ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        display: false,
        min:
          Math.min(...leetCodeData.contestParticipation.map((c) => c.rating)) -
          100,
        max: maxRating + 100,
      },
      x: {
        display: false,
      },
    },
    onHover: (_, elements) => {
      if (elements.length > 0) {
        const dataIndex = elements[0].index;
        setHoveredContest(leetCodeData.contestParticipation[dataIndex]);
      } else {
        setHoveredContest(null);
      }
    },
  };

  const data = {
    labels: leetCodeData.contestParticipation.map((contest) =>
      new Date(contest.contest.startTime * 1000).toLocaleDateString()
    ),
    datasets: [
      {
        data: leetCodeData.contestParticipation.map(
          (contest) => contest.rating
        ),
        borderColor: "rgb(234, 179, 8)",
        backgroundColor: "rgba(234, 179, 8, 0.05)",
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full">
      <div className="rounded-xl custom-bg p-6 border border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {hoveredContest ? (
            <>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">
                  {Math.round(hoveredContest.rating)}
                </p>
                <p className="text-sm text-gray-400">Contest Rating</p>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-200">
                  {formatDate(hoveredContest.contest.startTime)}
                </p>
                <p className="text-sm text-gray-400">
                  {hoveredContest.contest.title}
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200">
                  #{hoveredContest.ranking}
                </p>
                <p className="text-sm text-gray-400">Rank</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200">
                  {hoveredContest.problemsSolved}/{hoveredContest.totalProblems}
                </p>
                <p className="text-sm text-gray-400">Solved</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">
                  {Math.round(latestContest.rating)}
                </p>
                <p className="text-sm text-gray-400">Current Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">
                  {Math.round(maxRating)}
                </p>
                <p className="text-sm text-gray-400">Highest Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200">
                  #{leetCodeData.contestGlobalRanking}
                </p>
                <p className="text-sm text-gray-400">Global Ranking</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-200">
                  {leetCodeData.contestAttend}
                </p>
                <p className="text-sm text-gray-400">Contests</p>
              </div>
            </>
          )}
        </div>
        <div className="relative h-[250px]">
          {!hoveredContest && (
            <div
              className="absolute text-foreground font-bold px-2 py-1 rounded text-sm"
              style={{
                left: `${
                  (leetCodeData.contestParticipation.indexOf(maxRatingContest) /
                    (leetCodeData.contestParticipation.length - 1)) *
                  100
                }%`,
                top: "10px",
                transform: "translateX(-50%)",
              }}
            >
              {Math.round(maxRating)}
            </div>
          )}
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default LeetcodeStats;
