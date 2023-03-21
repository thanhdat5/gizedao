import styled from "styled-components";
const svg = styled.svg`
  /* Adapt the colors based on primary prop */
  margin: auto;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const GZIconSuccess = () => {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="70" r="69.5" stroke="#22DFAB" />
      {/* <g style="mix-blend-mode:lighten" opacity="0.65">
        <circle cx="70" cy="70" r="44" fill="#22DFAB" />
      </g> */}
      <g mix-blend-mode="lighten" opacity="0.65">
        <circle cx="70" cy="70" r="44" fill="#22DFAB" />
      </g>
      <path
        d="M93.25 67.315V69.5C93.2471 74.6215 91.5887 79.6048 88.5222 83.7068C85.4556 87.8088 81.1453 90.8096 76.234 92.2617C71.3226 93.7139 66.0735 93.5395 61.2694 91.7646C56.4652 89.9897 52.3636 86.7095 49.576 82.413C46.7885 78.1166 45.4645 73.0341 45.8015 67.9237C46.1385 62.8133 48.1184 57.9488 51.4459 54.0555C54.7735 50.1623 59.2704 47.449 64.2659 46.3203C69.2615 45.1916 74.4881 45.708 79.1663 47.7925"
        stroke="#00FFB9"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M93.25 50.5L69.5 74.2737L62.375 67.1487" stroke="#00FFB9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
export default GZIconSuccess;
