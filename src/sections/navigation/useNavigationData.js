import { graphql, useStaticQuery } from "gatsby";

export const useNavigationData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        navigation {
          links {
            number
            name
            to
          }
        }
      }
    }
  `);

  return data;
};
