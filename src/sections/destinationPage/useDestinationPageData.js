import { graphql, useStaticQuery } from "gatsby";

export const useDestinationPageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        destinations {
          headline
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
              png
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
