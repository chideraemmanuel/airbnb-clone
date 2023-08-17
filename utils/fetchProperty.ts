import { sanity } from "@/sanity";

export const fetchProperty = async (id: string) => {
  // const sid = JSON.stringify(id);
  // console.log(sid);
  // const query = `*[_id == ${sid}]`;
  const query = `*[_id == ${JSON.stringify(id)}]{
        ...,
        category ->,
        propertyHosts {
            ...,
            host ->
        },
        amenities[]->
    }`;
  // console.log(query);

  try {
    const response = await sanity.fetch(query);
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
