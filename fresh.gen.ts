// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $attractions_index from "./routes/attractions/index.tsx";
import * as $emergency_index from "./routes/emergency/index.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $list_index from "./routes/list/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $NavbarIsland from "./islands/NavbarIsland.tsx";
import * as $PlaceList from "./islands/PlaceList.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/attractions/index.tsx": $attractions_index,
    "./routes/emergency/index.tsx": $emergency_index,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/list/index.tsx": $list_index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/NavbarIsland.tsx": $NavbarIsland,
    "./islands/PlaceList.tsx": $PlaceList,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
