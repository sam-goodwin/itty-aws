import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../../.env") });

export default {
  test: {
    exclude: ["**/specs/**", "**/node_modules/**", "**/.ai-workspace/**"],
  },
};
