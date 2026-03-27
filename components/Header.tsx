type HeaderParams = {
  text:string;
  textSub?:string;
}

// Destructured properties
const Header = ({text, textSub}:HeaderParams)=> {
  return(
    <>
        <h2 className="text-2xl text-gray-600">{text}</h2>
        <h2 className="text-2xl text-gray-600">{textSub}</h2>
    </>
  )
}

export default Header;