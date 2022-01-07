import HEADER from "../interfaces/header"

const Header = ({title}:HEADER) => {
  return (
    <h1 
      className="pt-20 md:pt-0 text-3xl text-white">
        {title}
    </h1>)
}

export default Header