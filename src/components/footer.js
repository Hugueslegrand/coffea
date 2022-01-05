import React from "react"
import {
  wrapper,
  title,
  socials,
  facebook,
} from "./footer.module.css"



const Footer = ({ siteTitle, information }) => {
  return (
    <div className={wrapper}>
      <div>
      <p className={title}>{siteTitle}</p>
        <p>Legrand</p>
        <p>All rights reserved.</p>
      </div>
      <div>
        <div className={information}>
        <p>{`${information.address}`}</p>
        <p>{`${information.city}`}</p>
        <p>{`${information.email}`}</p>

        </div>
        <div className={socials}>
        <a className={facebook}
            target="__blank"
            href={information.socials.facebook}
          > </a>
        </div>
      </div>
    </div>
  )
}

export default Footer