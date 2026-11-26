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
          x1="214"
          y1="108"
          x2="466"
          y2="484"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e8ebdd" />
          <stop offset="1" stopColor="#dce2cf" />
        </linearGradient>
        <linearGradient
          id="room-light"
          x1="353"
          y1="246"
          x2="184"
          y2="492"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fffae2" stopOpacity=".8" />
          <stop offset="1" stopColor="#fffae2" stopOpacity=".05" />
        </linearGradient>
        <clipPath id="room-window">
          <path d="M244 145h190v155H244z" />
        </clipPath>
      </defs>
      <path d="M48 158h166v326H48z" fill="#edf0e4" />
      <path d="M214 108h252v376H214z" fill="url(#room-wall)" />
      <path d="M214 108v376" stroke="#cbd4be" strokeWidth="1" />
      <path d="M48 484h418l28 63H76l-28-63Z" fill="#e3e6d8" />
      <path d="M48 484h418m-252 0 39 63" stroke="#bcc8ad" strokeWidth="1" />
      <path d="M244 145h190v155H244z" fill="#f7f4e4" />
      <g clipPath="url(#room-window)">
        <circle cx="384" cy="187" r="29" fill="#f2e4b9" />
        <path
          d="M226 266c48-34 79-35 115-10 43-33 78-31 111-6v66H226v-50Z"
          fill="#dce4cf"
        />
        <path
          d="M228 287c54-21 87-19 124-4 43-16 66-15 99-5v36H228v-27Z"
          fill="#c8d4ba"
        />
      </g>
      <path
        d="M244 145h190v155H244zM339 145v155m-95-69h190"
        stroke="#99aa8c"
        strokeWidth="1.4"
      />
      <path d="M237 307h204" stroke="#b7c2a8" strokeWidth="4" />
      <path d="m245 309 184-1-151 176H81l164-175Z" fill="url(#room-light)" />
      <path
        d="m96 483 209-23 83 45-217 24-75-46Z"
        fill="#d4dcc7"
        stroke="#c6d0b8"
        strokeWidth="1"
      />
      <path
        d="m115 488 191-21m-173 32 195-21"
        stroke="#c2ccb3"
        strokeWidth="1"
      />
      <path d="m109 440-7 39m171-39 9 32" stroke="#718066" strokeWidth="5" />
      <path
        d="M91 355c0-11 8-19 19-19h161c11 0 19 8 19 19v61H91v-61Z"
        fill="#f6f2e5"
      />
      <path
        d="M104 360c0-6 5-11 11-11h65v53h-76v-42Zm77-11h86c6 0 11 5 11 11v42h-97v-53Z"
        stroke="#d9d3bf"
        strokeWidth="1.3"
      />
      <path
        d="M88 402h205c7 0 12 5 12 12v26H76v-26c0-7 5-12 12-12Z"
        fill="#e6dfcb"
      />
      <path d="M90 427h201m-111-22v22" stroke="#c7bea6" strokeWidth="1.2" />
      <path
        d="M74 385c0-6 5-11 11-11s11 5 11 11v55H74v-55Zm210 7c0-6 5-10 10-10 6 0 11 4 11 10v48h-21v-48Z"
        fill="#eee8d7"
      />
      <path
        d="m114 370 33-12 17 37-36 10-14-35Z"
        fill="#a6b598"
        stroke="#96a789"
        strokeWidth="1"
      />
      <path d="m121 374 24-8m-18 31 25-8" stroke="#c4ceb9" strokeWidth="1" />
      <path d="m235 361 28-3 10 51h-32l-6-48Z" fill="#d2d9c4" />
      <path d="m246 370 7 37m2-37 8 37" stroke="#b8c3a9" strokeWidth="1" />
      <path d="m336 424-9 58m56-58 10 58" stroke="#8a977b" strokeWidth="2" />
      <rect x="321" y="414" width="77" height="11" rx="3" fill="#bdc8ab" />
      <path d="M341 394h14v20h-14z" fill="#f6f0de" />
      <path
        d="M355 398h3c7 0 7 10 0 10h-3"
        stroke="#cfbfa1"
        strokeWidth="1.3"
      />
      <path
        d="m425 452-2-105m0 51-16-24m16 39 18-22m-18-29 10-22"
        stroke="#7f9270"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M422 389c-18-1-26-12-26-27 15 3 23 12 26 27Zm3 18c1-18 13-29 29-30-4 16-15 27-29 30Zm-2-44c-14-5-20-17-17-31 14 7 19 17 17 31Zm10-16c-2-15 5-26 17-31 1 14-4 25-17 31Z"
        fill="#91a581"
      />
      <path d="M405 447h38l-6 39h-26l-6-39Z" fill="#c9b79b" />
      <path d="M405 447h38" stroke="#b09b7e" strokeWidth="1.7" />
      <path d="M62 245h94v63H62z" stroke="#c9d1bd" strokeWidth="1" />
      <path d="m76 294 23-20 17 10 25-25" stroke="#b6c3a5" strokeWidth="1.2" />
      <path d="M57 547h437" stroke="#aebc9e" strokeWidth="1" />
      <path
        d="M102 125h20m-10-10v20"
        stroke="#a3b294"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="450" cy="82" r="3" fill="#bdc9ad" />
    </svg>
  );
}
