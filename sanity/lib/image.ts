import imageUrlBuilder from "@sanity/image-url";

import { client } from "./client";
import { Image } from "sanity";

const imageBuilder = imageUrlBuilder(client);

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source);
};
