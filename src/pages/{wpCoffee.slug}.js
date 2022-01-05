import * as React from 'react'
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {graphql} from 'gatsby';
import {
  coffeeInfoContainer,
  coffeePicture
} from "../page.module.css"


const CoffeePage = ({data: {wpCoffee: {coffee}}}) => {
  const image = getImage(coffee.picture.localFile)

  return (
    <Layout pageTitle="Coffee Template">
     <div>
     <GatsbyImage className={coffeePicture} image={image} alt={coffee.picture.altText} />
     <div className={coffeeInfoContainer}>
        <h1>{coffee.fieldGroupName}</h1>
          <h2>{coffee.name}</h2>
          <h2>Origin: {coffee.origin}</h2>
          <div dangerouslySetInnerHTML={{__html: coffee.description}} />
       <section>
          <h1>
            {coffee.beanType.fieldGroupName}
          </h1>
          <h2>
          {coffee.beanType.name}
          </h2>
          <div dangerouslySetInnerHTML={{__html: coffee.beanType.description}} />
       </section>
       <section>
          <h1>
            {coffee.coffeeType.fieldGroupName}
          </h1>
          <h2>
          {coffee.coffeeType.name}
          </h2>
          <div dangerouslySetInnerHTML={{__html: coffee.coffeeType.description}} />
       </section>
       <section>
          <h1>
            {coffee.makerType.fieldGroupName}
          </h1>
          <h2>
          {coffee.makerType.name}
          </h2>
          <div dangerouslySetInnerHTML={{__html: coffee.makerType.description}} />
       </section>
       
     </div>
     

    </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpCoffee(id: {eq: $id}) {
    coffee {
      name
      description
      fieldGroupName
      origin
      beanType {
        description
        name
        fieldGroupName
      }
      coffeeType {
        type
        name
        description
        fieldGroupName
      }
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      makerType {
        description
        name
        fieldGroupName
      }
    }
  }
}

`

export default CoffeePage;