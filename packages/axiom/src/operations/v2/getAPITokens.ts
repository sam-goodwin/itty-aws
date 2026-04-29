import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetAPITokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/tokens" }));
export type GetAPITokensInput = typeof GetAPITokensInput.Type;

// Output Schema
export const GetAPITokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    datasetCapabilities: Schema.Record(
      Schema.String,
      Schema.Struct({
        data: Schema.optional(Schema.Array(Schema.Literals(["delete"]))),
        ingest: Schema.optional(Schema.Array(Schema.Literals(["create"]))),
        query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
        share: Schema.optional(
          Schema.Array(Schema.Literals(["create", "read", "delete"])),
        ),
        starredQueries: Schema.optional(
          Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
        ),
        trim: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
        vacuum: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
        virtualFields: Schema.optional(
          Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
        ),
      }),
    ),
    description: Schema.optional(Schema.String),
    expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    name: Schema.String,
    orgCapabilities: Schema.Struct({
      annotations: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      apiTokens: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      auditLog: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
      billing: Schema.optional(
        Schema.Array(Schema.Literals(["read", "update"])),
      ),
      dashboards: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      datasets: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      endpoints: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      flows: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      integrations: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      monitors: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      notifiers: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      rbac: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      sharedAccessKeys: Schema.optional(
        Schema.Array(Schema.Literals(["read", "update"])),
      ),
      users: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      views: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
    }),
    samlAuthenticated: Schema.optional(Schema.Boolean),
    viewCapabilities: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
          share: Schema.optional(
            Schema.Array(Schema.Literals(["create", "read", "delete"])),
          ),
        }),
      ),
    ),
  }),
);
export type GetAPITokensOutput = typeof GetAPITokensOutput.Type;

// The operation
/**
 * Get API tokens
 */
export const getAPITokens = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAPITokensInput,
  outputSchema: GetAPITokensOutput,
}));
