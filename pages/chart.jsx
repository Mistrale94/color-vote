import Chartbar from "../components/Chartbar"
import Chartpie from "../components/Chartpie"
import Tab from "../components/Tab"
import React from 'react'

export default function chart() {
  return (
    <>
    <h1>Titre du questionnaire</h1>
        <Tab/>
        <Chartbar/>
        <Chartpie/>
    </>
  )
}

