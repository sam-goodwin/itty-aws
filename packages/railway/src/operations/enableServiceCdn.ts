import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation enableServiceCdn($input: EnableServiceCdnInput!) {\n  enableServiceCdn(input: $input) {\n    caching {\n      defaultTtlSeconds\n      htmlCaching\n      mode\n      purgeOnDeploy\n      staleWhileRevalidate {\n        enabled\n      }\n    }\n    enabled\n    id\n    purgeEpoch\n    purgeEpochByKind\n  }\n}";

// Input Schema (GraphQL variables)
export const EnableServiceCdnInput = Schema.Struct({
  input: Schema.Struct({
    config: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          caching: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                defaultTtlSeconds: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
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
      ),
    ),
    environmentId: Schema.String,
    serviceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "enableServiceCdn",
    type: "mutation",
  }),
);
export type EnableServiceCdnInput = typeof EnableServiceCdnInput.Type;

// Output Schema (GraphQL selection set)
export const EnableServiceCdnOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("enableServiceCdn"));
export type EnableServiceCdnOutput = typeof EnableServiceCdnOutput.Type;

/**
 * Enables CDN for a service, creating an edge config and attaching all live domains.
 */
export const enableServiceCdn = API.make(() => ({
  inputSchema: EnableServiceCdnInput,
  outputSchema: EnableServiceCdnOutput,
}));
