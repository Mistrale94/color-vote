import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Chartbar() {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const data = {
        labels: [
          'Tout à fait d\'accord',
          'D\'accord',
          'Plutôt d\'accord',
          'Plutôt pas d\'accord',
          'Pas d\'accord',
          'Je ne sais pas',
          'Je ne souhaite pas m\'exprimer'
        ],
        datasets: [{
          label: 'Affirmation',
          data: [400, 50, 100, 12, 30, 27, 61],
          backgroundColor: [
            '#6AB04C',
            '#BADC58',
            '#F0932B',
            '#FF7979',
            '#EB4D4B',
            '#ffffff',
            '#000000'
          ],
          borderColor: [
            '#000000'
          ],
          hoverOffset: 4
        }]
      };

    const config = {
        type: 'pie',
        data: data,
      };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="Chartbar">
      <canvas ref={canvasEl} />
    </div>
  );
}
