export function CartIcon({ width = 40, height = 40, fill = '#49454F' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_349_11)'>
        <path
          d='M11.1111 25.8824H31.1111C32.3333 25.8824 33.3333 26.9412 33.3333 28.2353C33.3333 29.5294 32.3333 30.5882 31.1111 30.5882H8.88889C7.66667 30.5882 6.66667 29.5294 6.66667 28.2353V4.70588H2.22222C1 4.70588 0 3.64706 0 2.35294C0 1.05882 1 0 2.22222 0H8.88889C10.1111 0 11.1111 1.05882 11.1111 2.35294V7.05882H40L31.1111 23.5294H11.1111V25.8824ZM10 32.9412C11.8444 32.9412 13.3333 34.5176 13.3333 36.4706C13.3333 38.4235 11.8444 40 10 40C8.15556 40 6.66667 38.4235 6.66667 36.4706C6.66667 34.5176 8.15556 32.9412 10 32.9412ZM30 32.9412C31.8444 32.9412 33.3333 34.5176 33.3333 36.4706C33.3333 38.4235 31.8444 40 30 40C28.1556 40 26.6667 38.4235 26.6667 36.4706C26.6667 34.5176 28.1556 32.9412 30 32.9412Z'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_349_11'>
          <rect width='40' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export function UserIcon({ width = 40, height = 40, fill = '#49454F' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM32.72 29.66C29.86 26.18 22.92 25 20 25C17.08 25 10.14 26.18 7.28 29.66C5.24 26.98 4 23.64 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 23.64 34.76 26.98 32.72 29.66ZM13 15C13 11.12 16.12 8 20 8C23.88 8 27 11.12 27 15C27 18.88 23.88 22 20 22C16.12 22 13 18.88 13 15Z'
        fill={fill}
      />
    </svg>
  )
}

export function HeartIcon({ width = 40, height = 40, fill = '#49454F' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.03612 8.94C8.72211 7.25459 10.9546 6.22671 13.3313 6.04153C15.708 5.85635 18.0728 6.52606 19.9995 7.93C22.0349 6.45738 24.5498 5.80453 27.0445 6.10122C29.5392 6.39791 31.8309 7.62242 33.4641 9.53136C35.0974 11.4403 35.9525 13.8939 35.8596 16.4044C35.7668 18.915 34.7326 21.2986 32.9628 23.0817L23.5345 32.51C22.5968 33.4474 21.3253 33.9739 19.9995 33.9739C18.6736 33.9739 17.4021 33.4474 16.4645 32.51L7.03612 23.0833C5.1609 21.208 4.10742 18.6646 4.10742 16.0125C4.10742 13.3605 5.1609 10.8153 7.03612 8.94Z'
        fill={fill}
      />
    </svg>
  )
}

export function SearchIcon({ width = 40, height = 40 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      width={width}
      height={height}>
      <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z' />
    </svg>
  )
}

export function GoogleIcon({ width = 40, height = 40 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width={width}
      height={height}
      viewBox='0 0 120 120'>
      <path
        d='M107.145,55H100H87.569H60v18h27.569c-1.852,5.677-5.408,10.585-10.063,14.118 C72.642,90.809,66.578,93,60,93c-12.574,0-23.278-8.002-27.299-19.191C31.6,70.745,31,67.443,31,64 c0-3.839,0.746-7.505,2.101-10.858C37.399,42.505,47.823,35,60,35c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,20.969,72.736,16,60,16c-18.422,0-34.419,10.377-42.466,25.605C14,48.291,12,55.912,12,64c0,7.882,1.9,15.32,5.267,21.882 C25.223,101.389,41.372,112,60,112c12.382,0,23.668-4.688,32.182-12.386C101.896,90.831,108,78.128,108,64 C108,60.922,107.699,57.917,107.145,55z'
        opacity='.35'></path>
      <path
        fill='#44bf00'
        d='M17.267,81.882C25.223,97.389,41.372,108,60,108c12.382,0,23.668-4.688,32.182-12.386L77.506,83.118 C72.642,86.809,66.577,89,60,89c-12.574,0-23.278-8.002-27.299-19.191L17.267,81.882z'></path>
      <path
        d='M77.506,83.118c-0.684,0.553-1.685,1.158-2.398,1.638l14.711,12.846 c0.807-0.641,1.6-1.298,2.363-1.988L77.506,83.118z'
        opacity='.35'></path>
      <path
        fill='#0075ff'
        d='M92.182,95.614C101.896,86.83,108,74.128,108,60c0-3.078-0.301-6.083-0.855-9H100H87.569H60v18 h27.569c-1.852,5.677-5.408,10.585-10.063,14.118L92.182,95.614z'></path>
      <path
        d='M32.701,69.809L17.267,81.882c0.486,0.948,1.004,1.877,1.551,2.787l15.3-11.576 C33.63,72.181,33.05,70.804,32.701,69.809z'
        opacity='.35'></path>
      <path
        fill='#ffc400'
        d='M17.267,81.882C13.9,75.32,12,67.882,12,60c0-8.088,2-15.709,5.534-22.395l15.568,11.537 C31.746,52.496,31,56.161,31,60c0,3.443,0.6,6.745,1.701,9.809L17.267,81.882z'></path>
      <path
        d='M17.534,37.605c-0.482,0.844-1.169,2.36-1.564,3.251l16.059,11.491 c0.299-1.095,0.653-2.167,1.072-3.205L17.534,37.605z'
        opacity='.35'></path>
      <path
        fill='#ff1200'
        d='M33.101,49.142C37.399,38.505,47.823,31,60,31c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,16.969,72.736,12,60,12c-18.422,0-34.419,10.377-42.466,25.605L33.101,49.142z'></path>
    </svg>
  )
}

export function ChevronLeftIcon({ width = 40, height = 40 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={width}
      height={height}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  )
}

export function ChevronRightIcon({ width = 40, height = 40 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={width}
      height={height}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  )
}

export function ArrowLeftIcon({ width = 40, height = 40 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={width}
      height={height}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
      />
    </svg>
  )
}
