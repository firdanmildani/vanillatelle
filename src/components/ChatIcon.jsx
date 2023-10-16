import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ChatIcon = () => {
// Replace '1234567890' with your actual phone number
const whatsappChatLink = `https://api.whatsapp.com/send?phone=1234567890`;

return (
    <a href={whatsappChatLink} className="chat-icon" target="_blank">
      <span className="tooltip">Do you need help?</span>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  )
}

export default ChatIcon