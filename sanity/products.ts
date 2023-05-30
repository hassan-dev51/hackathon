// step one just simply export the schema as an object
// slug is used for a unique identifier and it is built-in in sanity
// hotspot property use for croping and adjusting image more accurately
export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "item",
      title: "Item",
      type: "string",
    },
  ],
};
