export const URLS = {
  DEV:"http://localhost:3000",
  PROD:"https://next-js-blog-app.akshatgarg12.vercel.app",
  USE:process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://next-js-blog-app.akshatgarg12.vercel.app"
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