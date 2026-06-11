import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation disableServiceCdn($input: DisableServiceCdnInput!) {\n  disableServiceCdn(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DisableServiceCdnInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "disableServiceCdn",
    type: "mutation",
  }),
);
export type DisableServiceCdnInput = typeof DisableServiceCdnInput.Type;

// Output Schema (GraphQL selection set)
export const DisableServiceCdnOutput = Schema.Boolean.pipe(
  T.ResponsePath("disableServiceCdn"),
);
export type DisableServiceCdnOutput = typeof DisableServiceCdnOutput.Type;

/**
 * Disables CDN for a service, soft-deleting the edge config.
 */
export const disableServiceCdn = API.make(() => ({
  inputSchema: DisableServiceCdnInput,
  outputSchema: DisableServiceCdnOutput,
}));
