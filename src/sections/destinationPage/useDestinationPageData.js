import { graphql, useStaticQuery } from "gatsby";

export const useDestinationPageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        destinations {
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
  `);

  return data;
};
