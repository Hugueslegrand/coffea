import * as React from 'react'
import Layout from '../components/layout'
import { Link,graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../coffee.css'


const CoffeesPage = ({data: {allWpCoffee: {edges}}, data:{wpPage:{coffeePage}}}) => {
  const headerInfo = coffeePage;
  const headerImg = getImage(headerInfo.headerCoffee.picture.localFile)
  console.log(headerInfo);
    return (
      <Layout>
        <div className='header-container'>
        <GatsbyImage className='headerImg' image={headerImg} />
        <div className='headerTitle'>
          <h1>  {headerInfo.headerCoffee.title}</h1>
        <div dangerouslySetInnerHTML={{__html: headerInfo.headerCoffee.description}} />
        </div>

         </div>
        <div className='coffee-container'>
        {edges.map((item) => {
          const image = getImage(item.node.coffee.picture.localFile)
          console.log(image);
          const coffee = item.node.coffee;
          const slug = item.node.slug;
          return (
          <div>
            <Link to={`/${slug}`}>
              <div className='Allcoffee-container'>
                <div classname='img-container'>
                 <GatsbyImage className='coffeePicture' image={image} />
              </div>
           <div className='info'>
             <div className='name'>
              <p key={item.node.coffeeId}>{coffee.name}</p>
              </div>
              </div>
              
           </div>
           
            </Link>
          </div>  
          )
        })} 
        </div>
      </Layout>
    )
  }
export const query = graphql`
query {
  
    wpPage{
      coffeePage {
        headerCoffee {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            altText
          }
        }
      }
    }
    allWpCoffee {
      edges {
        node {
          coffee {
            fieldGroupName
            name
            description
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 300,height:300)
                }
              }
              altText
            }
          }
          id
          slug
        }
      }
    }
  
  }
`
export default CoffeesPage;