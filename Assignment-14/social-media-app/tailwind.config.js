import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include all JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});