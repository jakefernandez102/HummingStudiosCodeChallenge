import {Link} from "react-router-dom"

type TitleProps ={
  textWhite: string,
  textYellow:string
}

const Title = ({textWhite,textYellow}: TitleProps) => {
  return (
    <div className="col-12 col-md-3 text-center">
        <Link to="/" className='fs-3 fw-black '>
            {textWhite} <span className='text-primary fs-3'>{textYellow}</span>
        </Link>
    </div>
  )
}

export default Title