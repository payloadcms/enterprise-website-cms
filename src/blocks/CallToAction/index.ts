import { Block } from "payload/types";
import linkGroup from "../../fields/linkGroup";
import richText from "../../fields/richText";

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    richText(),
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      }
    }),
  ]
}