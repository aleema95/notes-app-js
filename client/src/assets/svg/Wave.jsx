import * as React from "react"

const Wave = (props) => (
  <svg
    style={{
      transform: "rotate(0deg)",
      transition: ".3s",
      marginBottom: "-5px"
    }}
    viewBox="0 0 1440 240"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(41.785, 96.686, 182.463, 1)" offset="0%" />
        <stop stopColor="rgba(63.611, 92.002, 161.972, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      style={{
        transform: "translate(0,0)",
        opacity: 1,
      }}
      fill="url(#a)"
      d="m0 72 60-4c60-4 180-12 300 12s240 80 360 100 240 4 360-4 240-8 360-36 240-84 360-108 240-16 360 0 240 40 360 60 240 36 360 56 240 44 360 48 240-12 360-28 240-32 360-36 240 4 360-4 240-32 360-56 240-48 360-28 240 84 360 112 240 20 360 12 240-16 360-28 240-28 360-24 240 28 360 20 240-48 360-52 240 28 360 32 240-20 360-20 240 24 360 20 240-36 300-52l60-16v192H0Z"
    />
  </svg>
)

export default Wave
