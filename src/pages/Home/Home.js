import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'

import { MapChart } from '../../components/MapChart'

import './Home.scss'

export const HomePage = () => {
  const userStats = [
    { label: 'Новых', value: 0 },
    { label: 'Онлайн', value: 2 },
    { label: 'Офлайн', value: 8 },
    { label: 'Всего', value: 10 }
  ]

  const systemStats = [
    { label: 'Win 10', value: 20 },
    { label: 'Win 8', value: 5 },
    { label: 'Win 7', value: 10 },
    { label: 'Win Vista', value: 2 }
  ]

  const activityStats = [
    { label: new Date(), value: 5 },
    { label: new Date(), value: 15 },
    { label: new Date(), value: 55 },
    { label: new Date(), value: 35 },
    { label: new Date(), value: 5 }
  ]

  const userStatsList = userStats.map(({ label, value }) => (
    <li key={label} className="box">
      <span>{label}:</span>
      <span>{value}</span>
    </li>
  ))

  const getSystemsChartData = (arr) => {
    const labels = arr.map(({ label }) => label)
    const values = arr.map(({ value }) => value)

    return {
      labels,
      datasets: [
        {
          label: 'Системы:',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  }

  const getActivityChartData = (arr) => {
    const labels = arr.map(({ label }) => label.toLocaleDateString())
    const values = arr.map(({ value }) => value)

    return {
      labels,
      datasets: [
        {
          label: 'Пользователи',
          data: values,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)'
        }
      ]
    }
  }

  return (
    <div className="home-page">
      <h3>Статистика</h3>

      <div className="top">
        <ul className="user-stats">{userStatsList}</ul>
      </div>

      <div className="locations-map box">
        <MapChart />
      </div>

      <div className="chart-row">
        <div className="activity-chart box">
          <h4>Активность:</h4>

          <Line data={getActivityChartData(activityStats)} />
        </div>

        <div className="systems-chart box">
          <h4>Запущенные системы:</h4>

          <Doughnut data={getSystemsChartData(systemStats)} />
        </div>
      </div>
    </div>
  )
}
