import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='/about'>About</Link> {/*Link to about (fun)component*/}
    </footer>
  )
}

export default Footer
