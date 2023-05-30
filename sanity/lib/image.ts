import imageUrlBuilder from "@sanity/image-url";

import { client } from "./client";

const imageBuilder = imageUrlBuilder(client);

export const urlForImage = (source: any) => {
  console.log(source);

  return imageBuilder.image(source);
};
