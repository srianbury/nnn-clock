import * as React from "react"
import { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PercentComplete />
  </Layout>
)

const PercentComplete = () => {
  const [now, setNow] = useState(new Date())
  const start = new Date("2021-11-01")
  const end = new Date("2021-12-01")

  useEffect(() => {
    const i = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(i)
  }, [])

  function getCompletedTime() {
    const total = end - start
    const completed = now - start
    const completedPercent = Math.min((completed / total) * 100, 100)
    const completedPercentPrecision = completedPercent.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 5,
        maximumFractionDigits: 5,
      }
    )

    return `${completedPercentPrecision}%`
  }

  function formattedTime() {
    const monthShort = now.toLocaleDateString(undefined, { month: "short" })
    const day = ("0" + now.getDate()).slice(-2)
    const year = now.getFullYear()
    const baseHour = now.getHours()
    const ampm = baseHour < 12 ? "am" : "pm"
    const hour = baseHour % 12 === 0 ? 12 : baseHour % 12
    const minute = ("0" + now.getMinutes()).slice(-2)
    const second = ("0" + now.getSeconds()).slice(-2)

    return `${monthShort}. ${day}, ${year} ${hour}:${minute}:${second} ${ampm}`
  }

  function timeTilEnd() {
    if (now > end) {
      return "0d 0h 0m 0s"
    }
    const remaining = end - now + now.getTimezoneOffset() * 60 * 1000
    const days = remaining / (1000 * 60 * 60 * 24)
    const hours = (days - Math.floor(days)) * 24
    const minutes = (hours - Math.floor(hours)) * 60
    const seconds = (minutes - Math.floor(minutes)) * 60

    return `${Math.floor(days)}d ${Math.floor(hours)}h ${Math.floor(
      minutes
    )}m ${Math.floor(seconds)}s`
  }

  return (
    <div>
      <h4>{formattedTime()}</h4>
      <h2>Percent Complete: {getCompletedTime()}</h2>
      <h2>Time til End: {timeTilEnd()}</h2>
    </div>
  )
}

export default IndexPage
