// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>These are my degrees</p>
      <Link to="/workexp">Work Experience</Link><br></br>
      <Link to="/projects">Projects</Link><br></br>
      <Link to="/">Home</Link>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Education</title>

// Step 3: Export your component
export default IndexPage