import React from "react"
import Navbar from "../components/Navbar"


function getDisplayName(component) {
  return component.displayName || component.name || 'Component'
}

export const withBaseLayout = (Component, config) => props => {
  const viewName = getDisplayName(Component)
  return (
    <>
      <Navbar {...config} view={viewName}/>
      <Component {...props}/>
    </>
  )
}
