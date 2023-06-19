import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-06-18",
});

const builder = imageUrlBuilder(sanity);

export const urlFor = (source: string) => builder.image(source);
