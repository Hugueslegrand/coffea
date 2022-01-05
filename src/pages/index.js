import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    header,
    headerInfo,
    headerPicture,
    headerTitle,
    CTA,
  } from "../page.module.css"
import Coffee from '../components/coffee'
import '../coffee.css'


const IndexPage = ({
    data: {
      wpPage: { homePage },
    },
  }) => {
    const image = getImage(homePage.headerHome.picture.localFile)
  return (
    <main>
    <Layout>

      <h1 className={headerTitle} data-text={homePage.headerHome.titel} >{homePage.headerHome.titel}</h1>
      <div className={header}>
          
        <div className={headerInfo}>
          
          <div
            dangerouslySetInnerHTML={{
              __html: homePage.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePage.callToAction.link}>
         
            {homePage.callToAction.description}
          </a>
        </div>
        <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePage.headerHome.picture.altText}
          />
        </div>
      </div>
      <div>
    <h2>{homePage.featuredCoffee.title}</h2>
    <p>{homePage.featuredCoffee.description}</p>
    <div> 
        <section className='slider-body'>
             <section className='slider'>
                 <section className='slider-track'>
                 {homePage.featuredCoffee.coffee.map(coffee => (
                      <section className='slide'>
                <Coffee slug={`${coffee.slug}`} key={coffee.id} coffee={coffee} />
            </section>
            ))}
                 </section>
             </section>
        </section>
    </div>
  </div>
    </Layout>
    </main>
  )
}

export const query = graphql`
query {
    wpPage(slug: {eq: "home"}) {
      homePage {
        headerHome {
          description
          titel
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
        }
        callToAction {
          description
          link
        }
        featuredCoffee {
          coffee {
            ... on WpCoffee {
              id
              coffee {
                name
                description
                fieldGroupName
                picture {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true},width: 300,height:300)
                    }
                  }
                }
              }
              slug
            }
          }
          title
        }
      }
    }
  }
  
`



export default IndexPage