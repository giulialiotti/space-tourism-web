import { graphql, useStaticQuery } from "gatsby";

export const useHomePageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        home {
          subHeadline
          headline
          paragraph
          button
        }
      }
    }
  `);
  
  return data;
};
