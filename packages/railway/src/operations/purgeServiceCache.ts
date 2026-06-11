import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation purgeServiceCache($input: PurgeServiceCacheInput!) {\n  purgeServiceCache(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const PurgeServiceCacheInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    scope: Schema.Literals(["ALL", "HTML"]),
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "purgeServiceCache",
    type: "mutation",
  }),
);
export type PurgeServiceCacheInput = typeof PurgeServiceCacheInput.Type;

// Output Schema (GraphQL selection set)
export const PurgeServiceCacheOutput = Schema.Boolean.pipe(
  T.ResponsePath("purgeServiceCache"),
);
export type PurgeServiceCacheOutput = typeof PurgeServiceCacheOutput.Type;

/**
 * Purges the CDN cache for a service. Bumps the edge config's purge epoch so every edge node treats prior cached entries as stale on next request. Idempotent; returns true even if CDN is disabled for the service.
 */
export const purgeServiceCache = API.make(() => ({
  inputSchema: PurgeServiceCacheInput,
  outputSchema: PurgeServiceCacheOutput,
}));
