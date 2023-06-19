import { sanity } from "@/sanity";

export const fetchProperties = async () => {
  const query = `*[ _type == "properties" ]{
        ...,
        category ->,
        propertyHosts {
            ...,
            host ->
        },
        amenities[]->
    }`;

  try {
    const response = await sanity.fetch(query);
    return response;
  } catch (error) {
    console.error(error);
    // throw new Error(`Could not fetch data`);
  }
};

// https://4zllpxxn.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22properties%22%5D
