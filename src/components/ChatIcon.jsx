import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ChatIcon = () => {
const whatsappChatLink = `https://api.whatsapp.com/send?phone=6281563143180`;

return (
    <a href={whatsappChatLink} className="chat-icon" target="_blank" rel="noreferrer">
      <span className="tooltip">Do you need help?</span>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  )
}

export default ChatIcon