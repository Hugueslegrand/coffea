import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {
  header,
  headerInfo,
  headerPicture,
  subtitle,
} from "../page.module.css"

const AboutPage = ({
  data: {
    wpPage: {
      aboutUsPage: { headerAboutUs },
    },
  },
}
  ) => {
    const imageHeader = getImage(headerAboutUs.picture.localFile)
  return (
    <Layout pageTitle="About Us">
     <div className={header}>
        <div className={headerInfo}>
          <h2 className={subtitle}>{headerAboutUs.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: headerAboutUs.description,
            }}
          />
        </div>
        <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <GatsbyImage
          className={headerPicture}
          image={imageHeader}
          alt={headerAboutUs.picture.altText}
        />
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    wpPage(id: {eq: "cG9zdDo0Nw=="}) {
      aboutUsPage {
        headerAboutUs {
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          description
        }
      }
    }
  }
`
export default AboutPage;