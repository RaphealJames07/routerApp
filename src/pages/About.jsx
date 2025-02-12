import { useContext } from "react"
import { EgbujContext } from "../global/ContextProvider"


const About = () => {
  const {samuel} = useContext(EgbujContext)
  return (
    <div>{samuel}</div>
  )
}

export default About