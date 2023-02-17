import * as React from "react"

const LandingSVG = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1920}
    height={100}
    preserveAspectRatio="none"
    {...props}
  >
    <g mask='url("#a")' fill="none">
      <path
        d="M0 68c96-11.4 288-55.4 480-57 192-1.6 288 43.4 480 49 192 5.6 288-19.4 480-21 192-1.6 384 10.4 480 13v48H0z"
        fill="#2264ab"
      />
    </g>
    <defs>
      <mask id="a">
        <path fill="#fff" d="M0 0h1920v100H0z" />
      </mask>
    </defs>
  </svg>
)

export default LandingSVG