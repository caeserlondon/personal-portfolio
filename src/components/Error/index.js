import './index.scss'
import { GiTerror } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'

const Error = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className="error-Page">
      <h1>
        4
        <span>
          <GiTerror />
        </span>
        4
      </h1>
      <p>What did you mean by ? : {location.pathname} </p>
      <p>I'm realy sorry, But the page you are looking for does not exist.</p>
    </div>
  )
}

export default Error
