export const URLS = {
  DEV:"http://localhost:3000",
  PROD:`https://${process.env.VERCEL_URL}`,
  USE:process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${process.env.VERCEL_URL}`
}
export const THEME = {
  dark:{
    backgroundColor:"#1a1a2e",
    textColor:"#f5f4f4",
    headingColor:"#fff",
    cardColor:"dark",
    buttonColor:"warning"
  },
  light:{
    backgroundColor:"white",
    textColor:"#272727",
    headingColor:"black",
    cardColor:"light",
    buttonColor:"info"
  }
}