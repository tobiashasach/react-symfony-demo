import { styles } from "../../../utils/styles";

export const headlineStyles = styles("font-bold", {
  variants: {
    intent: {
      h1: "text-5xl",
      h2: "text-3xl",
    },
  },
});
