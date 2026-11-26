export function Flower({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="42"
      height="48"
      viewBox="0 0 42 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 27C7 38 1 22 12 18 1 11 15 0 21 12 27 0 41 11 30 18 41 22 35 38 21 27Zm0 0v18m0-6c-6 0-9-4-10-7 6 0 9 3 10 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="20" r="3.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m20.6 4.1-3.2 15.3c-.2 1.1-.9 1.4-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5L17 6c.4-.4-.1-.6-.6-.3L4.8 13l-4-1.3c-1-.3-1-1 .2-1.5l18.4-7.1c.9-.3 1.7.2 1.2 1Z"
        fill="currentColor"
        transform="translate(1 1) scale(.95)"
      />
    </svg>
  );
}

// Декоративная иллюстрация, а не фотография реального кабинета.
export function QuietRoom({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 590"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="room-wall"
          x1="79"
          y1="70"
          x2="440"
          y2="530"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e6e9d9" />
          <stop offset="1" stopColor="#d6ddc7" />
        </linearGradient>
        <linearGradient
          id="room-light"
          x1="308"
          y1="129"
          x2="146"
          y2="493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fffcde" stopOpacity=".9" />
          <stop offset="1" stopColor="#fffcde" stopOpacity="0" />
        </linearGradient>
        <clipPath id="room-arch">
          <path d="M64 542V229a196 196 0 0 1 392 0v313H64Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#room-arch)">
        <path fill="url(#room-wall)" d="M64 30h392v512H64z" />
        <circle cx="324" cy="169" r="67" fill="#f5e8bd" />
        <path d="m260 148 108 43-160 349H64L260 148Z" fill="url(#room-light)" />
        <path
          d="M64 435c142-20 263-17 392 8v99H64V435Z"
          fill="#c5ceb4"
          fillOpacity=".48"
        />
        <path
          d="M117 449c44-7 128-8 167-3"
          stroke="#aebba0"
          strokeWidth="1.2"
        />
        <path
          d="M96 542 253 359m35 183 20-113"
          stroke="#b0bda0"
          strokeWidth="1"
        />
        <ellipse
          cx="249"
          cy="480"
          rx="110"
          ry="15"
          fill="#849376"
          fillOpacity=".12"
        />
        <path
          d="m180 415-11 69m121-67 12 67"
          stroke="#626e54"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M153 327c0-16 13-29 29-29h91c16 0 29 13 29 29v84H153v-84Z"
          fill="#f4f0df"
        />
        <path
          d="M166 335c0-12 9-21 21-21h77c12 0 22 9 22 21v57H166v-57Z"
          stroke="#d4ceba"
          strokeWidth="1.5"
        />
        <path
          d="M146 395c0-9 7-16 16-16h133c9 0 16 7 16 16v30H146v-30Z"
          fill="#e5dfc9"
        />
        <path d="M146 417h165" stroke="#c5bea7" strokeWidth="1.5" />
        <path
          d="M144 355c-10 0-17 7-17 17v50h25v-50c0-9-1-17-8-17Zm165 0c10 0 17 7 17 17v50h-25v-50c0-9 1-17 8-17Z"
          fill="#ece6d4"
        />
        <path
          d="M181 356c3-18 9-27 22-27 11 0 20 10 28 23l-8 34-43-4 1-26Z"
          fill="#a6b298"
        />
        <path d="m202 335 5 43" stroke="#8b9a7c" strokeWidth="1.2" />
        <path
          d="m356 445 5-85m0 45c-23-22-23-38-20-50 18 10 26 26 20 50Zm0-14c21-17 26-34 24-48-20 10-28 25-24 48Zm1-29c-14-19-13-35-8-47 13 13 17 28 8 47Z"
          fill="#7e9270"
        />
        <path d="M339 432h43l-7 45h-29l-7-45Z" fill="#c1ad91" />
        <path d="M339 432h43" stroke="#a38e71" strokeWidth="2" />
        <path
          d="M91 234v-9a168 168 0 0 1 336-1v29"
          stroke="#faf9ed"
          strokeOpacity=".4"
          strokeWidth="1.5"
        />
      </g>
      <path
        d="M48 523V225a212 212 0 0 1 424 0v298"
        stroke="#9fae91"
        strokeWidth="1"
      />
      <path d="M36 542h448" stroke="#98a58b" strokeWidth="1" />
      <path
        d="M43 340c-25-16-37-37-31-58 25 14 37 35 31 58Zm1 38c-13-31-8-58 12-72 13 30 8 56-12 72Zm-1-38 1 96"
        stroke="#849476"
        strokeWidth="1.3"
        fill="#e9ecdf"
      />
      <path
        d="M418 76h22m-11-11v22"
        stroke="#788d6b"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="94" cy="91" r="3" fill="#a5b394" />
    </svg>
  );
}
