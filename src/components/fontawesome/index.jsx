import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({iconName,className}) => {
  return (
    <FontAwesomeIcon className={className} icon={iconName}/>
  )
}

export default Icon