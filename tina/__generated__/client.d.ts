import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '0674e73b657b7a05589860c7a0e38867a1ac1551', queries,  });
export default client;
  