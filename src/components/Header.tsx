import HEADER from "../interfaces/header"

const Header = ({title, styles}:HEADER) => {
  return (
    <h1 
      className={
        `pt-20 md:pt-0 text-3xl text-white font-bold 
        ${styles}`}>
        {title}
    </h1>)
}

export default Header