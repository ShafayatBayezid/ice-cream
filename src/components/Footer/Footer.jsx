import React from 'react'
import classes from './Fotter.module.css'

const Footer = () => {
  return (
      <footer>
          <div className={['container', classes.container].join(' ')}>
              <div>Copyright &copy;2022.</div>
              <div className="textRight">
                  Built with <span className="red">&hearts;</span> by <a href="https//:shafayat.net">
                      Shafayat Hossain Bayezid
                  </a>
              </div>
          </div>
    </footer>
  )
}
export default Footer;
