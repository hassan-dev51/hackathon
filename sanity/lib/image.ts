import imageUrlBuilder from "@sanity/image-url";

import { client } from "./client";
import { Image } from "sanity";

const imageBuilder = imageUrlBuilder(client);

export const urlForImage = (source: Image) => {
  console.log(source);

  return imageBuilder.image(source);
};
