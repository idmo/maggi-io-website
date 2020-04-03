import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }



  render() {
    return (
      <nav>
        <Link to="/">Brian Maggi</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blurts">Blurts</Link>
        <Link to="/about">About</Link>
      </nav>
    )
  }
}

export default Navbar
