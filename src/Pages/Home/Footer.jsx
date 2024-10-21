import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="bg-white text-light-purple w-full py-5">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h4 className="text-lg font-normal">Developed and Designed by Sarah Jacob. ❤</h4>
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 poppins-bold">Connect with me!</h3>
        </div>

        <div className="mb-6">
            <a href="https://github.com/saj62" className="text-purple hover:text-ice mx-2">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sarah-ann-jacob" className="text-purple hover:text-ice mx-2">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          <a href="mailto:sarannjac@gmail.com" className="text-purple hover:text-ice mx-2">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
        <div>
          <p className="text-xs text-light-purple">
            © {new Date().getFullYear()} Sarah Jacob. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer