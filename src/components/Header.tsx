import HEADER from "../interfaces/header"

const Header = ({title}:HEADER) => {
  return (
    <h1 
      className="mt-20 text-3xl text-white">
        {title}
    </h1>)
}

export default Header