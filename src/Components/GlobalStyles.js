import { globalCss } from '@stitches/react';

import RobotoMedium from '../fonts/Roboto/Roboto-Medium.ttf'

const globalStyles = globalCss({
  "@font-face": {
    fontFamily: 'Roboto Medium',
    src: `url(${RobotoMedium}) format('truetype')`,
    fontWeight: "300",
    fontStyle: "normal",
    fontDisplay: "auto",
  },
  "*": {
    margin: "0",
    padding: "0",
    textDecoration: "none",
    listStyleType: "none"
  },
  
  body: {
    minHeight: "100vh",
    color: "white",
    backgroundColor: "rgba(30,30,30,0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    fontFamily: 'Roboto Medium'
  }
})


export default globalStyles