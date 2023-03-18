import React from 'react';

interface Props {
  period: string;
}

function Consumption(props: Props) {
  const { period } = props;
  return (
    <div className="bg-dashboardCardGeneric centered">
      <img src="/img/consumption-pie-chart.png" alt="Consumption pie chart" />
      <h5 className="font-semibold pt-40px text-2xl">Consumption {period}</h5>
    </div>
  );
}

export default Consumption;
