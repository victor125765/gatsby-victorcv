// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <p>These are my projects</p>
      <Link to="/workexp">Work Experience</Link><br></br>
      <Link to="/">Home</Link><br></br>
      <Link to="/education">Education</Link>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Projects</title>

// Step 3: Export your component
export default IndexPage