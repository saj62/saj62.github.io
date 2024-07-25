import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
//import 'ButtonGroup.css';


const ButtonGroup = () => {
  return (
    <div className="btn-contacts">
            <button>
        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
      </button>
      <button>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </button>
      <button>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
      </button>
    </div>
  );
};

export default ButtonGroup;
