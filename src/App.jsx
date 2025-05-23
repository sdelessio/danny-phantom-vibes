import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import './App.css'

import img1 from './assets/images/S1/01.png'
import img2 from './assets/images/S1/02.png'
import img3 from './assets/images/S1/03.png'
import img4 from './assets/images/S1/04.png'
import img5 from './assets/images/S1/05.png'
import img6 from './assets/images/S1/06.png'
import img7 from './assets/images/S1/07.png'
import img8 from './assets/images/S1/08.png'
import img9 from './assets/images/S1/09.png'
import img10 from './assets/images/S1/10.png'
import img11 from './assets/images/S1/11.png'
import img12 from './assets/images/S1/12.png'
import img13 from './assets/images/S1/13.png'
import img14 from './assets/images/S1/14.png'
import img15 from './assets/images/S1/15.png'
import img16 from './assets/images/S1/16.png'
import img17 from './assets/images/S1/17.png'
import img18 from './assets/images/S1/18.png'
import img19 from './assets/images/S1/19.png'
import img20 from './assets/images/S1/20.png'

import s2img1 from './assets/images/S2/01.png'
import s2img2 from './assets/images/S2/02.png'
import s2img3 from './assets/images/S2/03.png'
import s2img4 from './assets/images/S2/04.png'
import s2img5 from './assets/images/S2/05.png'
import s2img6 from './assets/images/S2/06.png'
import s2img7 from './assets/images/S2/07.png'
import s2img8 from './assets/images/S2/08.png'
import s2img9 from './assets/images/S2/09.png'
import s2img10 from './assets/images/S2/10.png'
import s2img11 from './assets/images/S2/11.png'
import s2img12 from './assets/images/S2/12.png'
import s2img13 from './assets/images/S2/13.png'
import s2img14 from './assets/images/S2/14.png'
import s2img15 from './assets/images/S2/15.png'
import s2img16 from './assets/images/S2/16.png'
import s2img17 from './assets/images/S2/17.png'

import s3img1 from './assets/images/S3/01.png'
import s3img2 from './assets/images/S3/02.png'
import s3img3 from './assets/images/S3/03.png'
import s3img4 from './assets/images/S3/04.png'
import s3img5 from './assets/images/S3/05.png'
import s3img6 from './assets/images/S3/06.png'
import s3img7 from './assets/images/S3/07.png'
import s3img8 from './assets/images/S3/08.png'
import s3img9 from './assets/images/S3/09.png'
import s3img10 from './assets/images/S3/10.png'
import s3img11 from './assets/images/S3/11.png'
import s3img12 from './assets/images/S3/12.png'


function App() {
  const d3Container = useRef(null)

  useEffect(() => {
    // Season 1 data
    const dataS1 = [
      { score: 6, url: img1, title: 'Mystery Meat' },
      { score: 6.2, url: img2, title: 'One of a Kind' },
      { score: 6, url: img3, title: 'Parental Bonding' },
      { score: 6, url: img4, title: 'Attack of the Killer Garage Sale' },
      { score: 5.6, url: img5, title: 'Splitting Images' },
      { score: 5.7, url: img6, title: 'What You Want' },
      { score: 9, url: img7, title: 'Bitter Reunions' },
      { score: 8.2, url: img8, title: 'Prisoners of Love' },
      { score: 8.5, url: img9, title: 'My Brother\'s Keeper' },
      { score: 8.5, url: img10, title: 'Shades of Gray' },
      { score: 8, url: img11, title: 'Fanning the Flames' },
      { score: 8, url: img12, title: 'Teacher of the Year' },
      { score: 8, url: img13, title: '13' },
      { score: 9.5, url: img14, title: 'Public Enemies' },
      { score: 7, url: img15, title: 'Fright Night' },
      { score: 9, url: img16, title: 'Maternal Instincts' },
      { score: 6, url: img17, title: 'Lucky In Love' },
      { score: 8, url: img18, title: 'Life Lessons' },
      { score: 8.2, url: img19, title: 'Million Dollar Ghost' },
      { score: 8.5, url: img20, title: 'Control Freak' },
    ]
    // Season 2 data (replace scores/titles as needed)
    const dataS2 = [
      { score: 6.8, url: s2img1, title: 'Memory Blank' },
      { score: 6.8, url: s2img2, title: 'Doctor\'s Disorders' },
      { score: 6.8, url: s2img3, title: 'Pirate Radio' },
      { score: 8.3, url: s2img4, title: 'Reign Storm' },
      { score: 9.8, url: s2img5, title: 'The Ultimate Enemy' },
      { score: 6.6, url: s2img6, title: 'Identity Crisis' },
      { score: 6.7, url: s2img7, title: 'The Fenton Menace' },
      { score: 7.3, url: s2img8, title: 'Secret Weapons' },
      { score: 7, url: s2img9, title: 'The Fright Before Christmas' },
      { score: 8.5, url: s2img10, title: 'Flirting With Disaster' },
      { score: 6.1, url: s2img11, title: 'Micro-Management' },
      { score: 6, url: s2img12, title: 'Beauty Marked' },
      { score: 6, url: s2img13, title: 'King Tuck' },
      { score: 7.5, url: s2img14, title: 'Masters of All Time' },
      { score: 9.6, url: s2img15, title: 'Kindred Spirits' },
      { score: 7, url: s2img16, title: 'Double Cross My Heart' },
      { score: 8.6, url: s2img17, title: 'Reality Trip' },
    ]

    // Season 3 data (replace scores/titles as needed)
    const dataS3 = [
      { score: 8.7, url: s3img1, title: 'Eye for an Eye' },
      { score: 8.6, url: s3img2, title: 'Infinite Realms' },
      { score: 4, url: s3img3, title: 'Girls\' Night Out' },
      { score: 4.2, url: s3img4, title: 'Torrent of Terror' },
      { score: 4.8, url: s3img5, title: 'Forever Phantom' },
      { score: 5.5, url: s3img6, title: 'Urban Jungle' },
      { score: 2, url: s3img7, title: 'Livin\' Large' },
      { score: 3, url: s3img8, title: 'Boxed Up Fury' },
      { score: 4.8, url: s3img9, title: 'Frightmare' },
      { score: 4.6, url: s3img10, title: 'Claw of the Wild' },
      { score: 10, url: s3img11, title: 'D-Stabilized' },
      { score: 0, url: s3img12, title: 'Phantom Planet' },
    ]

    // Combine all seasons
    const data = [
      ...dataS1.map(d => ({ ...d, season: 1 })),
      ...dataS2.map(d => ({ ...d, season: 2 })),
      ...dataS3.map(d => ({ ...d, season: 3 })),
    ]

    // Color by season
    const seasonColor = season =>
      season === 1 ? '#39FF14' : season === 2 ? '#0FF0FF' : '#d90074'

    const width = 1500
    const height = 500
    const margin = { top: 20, right: 30, bottom: 50, left: 40 }
    const circleRadius = 16
    const patternSize = circleRadius * 2

    d3.select(d3Container.current).selectAll('*').remove()

    const svg = d3
      .select(d3Container.current)
      .attr('width', width)
      .attr('height', height)

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, width - margin.right])

    const y = d3
      .scaleLinear()
      .domain([1, 10])
      .range([height - margin.bottom, margin.top])

    // Add y-axis label
    svg.append('text')
      .attr('transform', `rotate(-90)`)
      .attr('y', margin.left - 35)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .attr('text-anchor', 'middle')
      .attr('fill', '#FFF')
      .attr('font-size', 16)
      .text('Vibe Score')

    // --- Add transparent backgrounds for each season ---
    // Find season ranges
    const seasonRanges = [
      { start: .5, end: dataS1.length - 1, color: seasonColor(1) },
      { start: dataS1.length, end: dataS1.length + dataS2.length - 1, color: seasonColor(2) },
      { start: dataS1.length + dataS2.length, end: data.length - 1, color: seasonColor(3) },
    ]
    svg.selectAll('rect.season-bg')
      .data(seasonRanges)
      .enter()
      .append('rect')
      .attr('class', 'season-bg')
      .attr('x', d => x(d.start) - circleRadius)
      .attr('y', margin.top)
      .attr('width', d => x(d.end) - x(d.start) + circleRadius * 2)
      .attr('height', height - margin.top - margin.bottom)
      .attr('fill', d => d.color)
      .attr('opacity', 0.10)
      .lower()


    // Draw colored segments between circles
    for (let i = 0; i < data.length - 1; i++) {
      svg.append('line')
        .attr('x1', x(i))
        .attr('y1', y(data[i].score))
        .attr('x2', x(i + 1))
        .attr('y2', y(data[i + 1].score))
        .attr('stroke', seasonColor(data[i].season))
        .attr('stroke-width', 2)
        .attr('fill', 'none')
    }

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(
        d3.axisBottom(x)
          .ticks(data.length)
          .tickFormat('')
      )
      .selectAll('text')
      .remove()
    svg.selectAll('.tick').remove()

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(10))

    const defs = svg.append('defs')
    data.forEach((d, i) => {
      defs.append('pattern')
        .attr('id', `img-pattern-${i}`)
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', patternSize)
        .attr('height', patternSize)
        .attr('x', x(i) - circleRadius)
        .attr('y', y(d.score) - circleRadius)
        .append('image')
        .attr('href', d.url)
        .attr('width', patternSize)
        .attr('height', patternSize)
        .attr('x', 0)
        .attr('y', 0)
        .attr('preserveAspectRatio', 'xMidYMid slice')
    })

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => x(i))
      .attr('cy', d => y(d.score))
      .attr('r', circleRadius)
      .attr('fill', (d, i) => `url(#img-pattern-${i})`)
      .attr('stroke', d => seasonColor(d.season))
      .attr('stroke-width', 2)

  }, [])

  return (
    <div className="App">
      <h2>Danny Phantom Vibe Check</h2>
      <svg ref={d3Container}></svg>
    </div>
  )
}

export default App
