import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div>Copyright © 2020 Brian Maggi</div>
      </footer>
    )
  }
}

export default Footer


const Social = () => {
  return (
    <div>
      <a title="facebook" href="https://facebook.com">
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="twitter" href="https://twitter.com">
        <img
          className="fas fa-lg"
          src={twitter}
          alt="Twitter"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="instagram" href="https://instagram.com">
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="vimeo" href="https://vimeo.com">
        <img
          src={vimeo}
          alt="Vimeo"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
    </div>
  )
}