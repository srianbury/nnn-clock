import * as React from "react";
import { useState, useEffect } from 'react'; 

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PercentComplete />
  </Layout>
)

const PercentComplete = () => {
  const [now, setNow] = useState(new Date());
  const start = new Date('2021-11-01');
  const end = new Date('2021-12-01');

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000)
  }, []);

  function getCompletedTime(){
    const total = end - start;
    const completed = now - start;
    const completedPercent = (completed/total)*100;
    const completedPercentPrecision = completedPercent.toLocaleString(
      undefined, {
        minimumFractionDigits: 5,
        maximumFractionDigits: 5
      }
    );
    const formatted = `${completedPercentPrecision}%`;
    return formatted;
  }

  function formattedTime(){
    const monthShort = now.toLocaleDateString(undefined, { month: 'short' });
    const day = ("0" + now.getUTCDate()).slice(-2);
    const year = now.getUTCFullYear();
    const hour = ("0" + now.getUTCHours()).slice(-2);
    const minute = ("0" + now.getUTCMinutes()).slice(-2);
    const second = ("0" + now.getUTCSeconds()).slice(-2);

    return `${monthShort}. ${day}, ${year} ${hour}:${minute}:${second}`;
  }

  return <div>
    <h2 style={{ marginBottom: '5px'}}>Percent Complete: {getCompletedTime()}</h2>
    <h4>{formattedTime()}</h4>
  </div>
}

export default IndexPage