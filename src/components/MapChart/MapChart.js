import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'

import './MapChart.scss'

export const MapChart = () => {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

  const countryStats = [
    { name: 'Russia', code: 'RUS', value: 10 },
    { name: 'United States', code: 'USA', value: 15 },
    { name: 'Canada', code: 'CAN', value: 5 },
    { name: 'Germany', code: 'DEU', value: 20 },
    { name: 'Niger', code: 'NGA', value: 70 }
  ]

  const getColorScale = scaleLinear().domain([1, 100]).range(['#d7dcff', '#11194d'])

  const countryStatsList = countryStats.map(({ name, code, value }) => (
    <li key={code}>
      <span className="color" style={{ backgroundColor: getColorScale(value) }} />
      <span className="name">{name}:</span>
      <span className="value">{value}</span>
    </li>
  ))

  return (
    <div className="map-chart">
      <ul className="stats">{countryStatsList}</ul>

      <ComposableMap viewBox="0 0 800 540" className="map">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const currCountryCode = geo.properties.ISO_A3
              const countryMatched = countryStats.find(({ code }) => code === currCountryCode)

              return countryMatched ? (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColorScale(countryMatched.value)}
                />
              ) : (
                <Geography key={geo.rsmKey} geography={geo} />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}
