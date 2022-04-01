import { graphql, useStaticQuery } from "gatsby";

export const useTechnologyData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        technology {
          headline {
            number
            text
          }
          caption
          launch {
            name
            description
            images {
              portrait {
                childImageSharp {
                  gatsbyImageData
                }
              }
              landscape {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  return data;
};
