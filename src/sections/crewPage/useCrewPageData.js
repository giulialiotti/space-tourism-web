import { graphql, useStaticQuery } from "gatsby";

export const useCrewPageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        crew {
          headline {
            number
            text
          }
          team {
            name
            images {
              png {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
            role
            bio
          }
        }
      }
    }
  `);

  return data;
};
