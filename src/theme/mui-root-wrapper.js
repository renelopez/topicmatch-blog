import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import defaultTheme from "./defaultTheme"

export default ({ element }) => (
  <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
)
