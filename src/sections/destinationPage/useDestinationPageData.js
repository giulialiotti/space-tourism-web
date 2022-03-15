import { graphql, useStaticQuery } from "gatsby";

export const useDestinationPageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        destinations {
          headline {
            number
            text
          }
          places {
            name
          }
          information {
            distance
            time
          }
          cards {
            name
            images {
              png {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
            description
            distance
            travel
          }
        }
      }
    }
  `);

  return data;
};
