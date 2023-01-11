import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Chartbar() {
  const canvasEl = useRef(null);

  const colors = {
    darkGreen: {
      default: "#6AB04C",
    },
    green: {
      default: "#BADC58",
    },
    orange: {
        default: "#F0932B",
      },
    red: {
        default: "#FF7979",
    },
    darkRed: {
        default: "#EB4D4B",
    },
    white: {
        default: "#ffffff",
    },
    black: {
        default: "#000000",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const weight = [60, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8];

    const labels = [
      "Nom de l'affirmation"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: colors.darkGreen.default,
          label: "D'accord",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.darkGreen.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.darkGreen.default,
          pointRadius: 3
        },
        {
            backgroundColor: colors.green.default,
            label: "Plutôt d'accord",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.green.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.green.default,
            pointRadius: 3
        },
        {
            backgroundColor: colors.orange.default,
            label: "Plutôt pas d'accord",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.orange.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.orange.default,
            pointRadius: 3
        },
        {
            backgroundColor: colors.red.default,
            label: "Pas d'accord",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.red.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.red.default,
            pointRadius: 3
        },
        {
            backgroundColor: colors.darkRed.default,
            label: "Totalement contre",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.darkRed.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.darkRed.default,
            pointRadius: 3
        },
        {
            backgroundColor: colors.white.default,
            label: "Je ne sais pas",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.black.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.white.default,
            pointRadius: 3
        },
        {
            backgroundColor: colors.black.default,
            label: "Je ne souhaite pas m'exprimer",
            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.black.default,
            lineTension: 0.2,
            pointBackgroundColor: colors.black.default,
            pointRadius: 3
        }
      ]
    };
    const config = {
      type: "bar",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="Chartbar">
      <span>Chart.js Demo</span>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
