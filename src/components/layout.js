import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle,
} from './layout.module.css'
import Footer from './footer.js'
import { StaticImage } from "gatsby-plugin-image"
import ScrollToTop from "react-scroll-to-top";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(id: {eq: "cG9zdDo3Mg=="}) {
        contactUsPage {
          information {
            address
            city
            email
            phoneNumber
            socials {
              facebook
            }
          }
        }
      }
    }
  `)

  return (
    
    <>
      <ScrollToTop smooth color='white' style={{backgroundColor: '#1d36c7'}}/>
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
    
       <header className={siteTitle}>
          <div>
             <Link to="/">
                <StaticImage width={50}
                 height={50} src="../images/logo.png" alt="logo" />
             </Link>
          </div>
          {data.site.siteMetadata.title}
        </header>
     
        
         
      
        
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/coffees">
              Coffees
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        information={data.wpPage.contactUsPage.information}
      />
    </div>
    
    </>
  )
}

export default Layout