import React from 'react';
import Product from './Product';
import Title from '../Globals/Title';
import { StaticQuery, graphql } from 'gatsby';

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426, maxWidth: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Nos produits" />
              <div className="row">
                {data.products.edges.map(({ node: products }) => {
                  return <Product key={products.id} product={products} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Products;
