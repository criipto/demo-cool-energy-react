import React from 'react';

interface Props {
  period: string;
}

function Consumption(props: Props) {
  const { period } = props;
  return (
    <div className="bg-dashboardCardGeneric m-2 align-items-center justify-center">
      <img
        src="/img/consumption-pie-chart.png"
        alt="Consumption pie chart"
        className="m-4 p-4"
      />
      <p className="m-4 font-semibold text-align-center">
        Consumption {period}
      </p>
    </div>
  );
}

export default Consumption;
