import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Coffee = ({ coffee, slug }) => {
  const profile = getImage(coffee.coffee.picture.localFile)
  return (
      
    <Link to={slug}>
      <GatsbyImage
        image={profile}
        alt={coffee.coffee.picture.altText}
      />
        <p>
          {coffee.coffee.name}
        </p>
    </Link>
  )
}

export default Coffee;