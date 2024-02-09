import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/e083a343-dc33-46c8-a94e-d373424431f5/github/main', token: '0674e73b657b7a05589860c7a0e38867a1ac1551', queries,  });
export default client;
  