import React from 'react';

function About() {
  return (
    <div className="bg-dashboardCardGeneric m-2 align-items-center justify-center">
      <h1 className="font-bold m-4">Documents pending signing</h1>
      <p className="m-4">
        Try our simple digital signature service making it a piece of cake for
        you to sign documents
      </p>
      <div className="m-4">
        <p>Document 1</p> <br />
        <p>Document 2</p>
      </div>
    </div>
  );
}

export default About;
