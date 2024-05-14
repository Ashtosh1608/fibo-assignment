import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

const ProgressGraph = ({ data }) => {
  return (
    <div>
      <h2>Progress Graph</h2>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          tickFormat={(date) => new Date(date).toLocaleDateString()}
          style={{
            tickLabels: { angle: -45, fontSize: 8 },
          }}
        />
        <VictoryAxis dependentAxis />
        <VictoryLine data={data} x="date" y="percentage" />
      </VictoryChart>
    </div>
  );
};

export default ProgressGraph;
