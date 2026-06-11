import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateServiceEdgeConfig($input: UpdateServiceEdgeConfigInput!) {\n  updateServiceEdgeConfig(input: $input) {\n    caching {\n      defaultTtlSeconds\n      htmlCaching\n      mode\n      purgeOnDeploy\n      staleWhileRevalidate {\n        enabled\n      }\n    }\n    enabled\n    id\n    purgeEpoch\n    purgeEpochByKind\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateServiceEdgeConfigInput = Schema.Struct({
  input: Schema.Struct({
    config: Schema.Struct({
      caching: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            defaultTtlSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
            htmlCaching: Schema.optional(Schema.NullOr(Schema.String)),
            mode: Schema.optional(Schema.NullOr(Schema.String)),
            purgeOnDeploy: Schema.optional(
              Schema.NullOr(Schema.Literals(["ALL", "HTML", "OFF"])),
            ),
            staleWhileRevalidate: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  enabled: Schema.Boolean,
                }),
              ),
            ),
          }),
        ),
      ),
    }),
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateServiceEdgeConfig",
    type: "mutation",
  }),
);
export type UpdateServiceEdgeConfigInput =
  typeof UpdateServiceEdgeConfigInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateServiceEdgeConfigOutput = Schema.Struct({
  caching: Schema.NullOr(
    Schema.Struct({
      defaultTtlSeconds: Schema.Number,
      htmlCaching: Schema.String,
      mode: Schema.String,
      purgeOnDeploy: Schema.Literals(["ALL", "HTML", "OFF"]),
      staleWhileRevalidate: Schema.Struct({
        enabled: Schema.Boolean,
      }),
    }),
  ),
  enabled: Schema.Boolean,
  id: Schema.String,
  purgeEpoch: Schema.Number,
  purgeEpochByKind: Schema.Unknown,
}).pipe(T.ResponsePath("updateServiceEdgeConfig"));
export type UpdateServiceEdgeConfigOutput =
  typeof UpdateServiceEdgeConfigOutput.Type;

/**
 * Updates the edge config (caching settings) for a service.
 */
export const updateServiceEdgeConfig = API.make(() => ({
  inputSchema: UpdateServiceEdgeConfigInput,
  outputSchema: UpdateServiceEdgeConfigOutput,
}));
