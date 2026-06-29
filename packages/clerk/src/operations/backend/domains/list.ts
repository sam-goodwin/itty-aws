import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";

// Input Schema
export const ListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/domains" }),
);
export type ListInput = typeof ListInput.Type;

// Output Schema
export const ListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["domain"]),
      id: Schema.String,
      name: Schema.String,
      is_satellite: Schema.Boolean,
      frontend_api_url: Schema.String,
      accounts_portal_url: Schema.optional(Schema.NullOr(Schema.String)),
      proxy_url: Schema.optional(Schema.NullOr(Schema.String)),
      development_origin: Schema.String,
      cname_targets: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              host: Schema.String,
              value: Schema.String,
              required: Schema.Boolean,
            }),
          ),
        ),
      ),
    }),
  ),
  total_count: Schema.Number,
});
export type ListOutput = typeof ListOutput.Type;

// The operation
/**
 * List all instance domains
 *
 * Use this endpoint to get a list of all domains for an instance.
 * The response will contain the primary domain for the instance and any satellite domains. Each domain in the response contains information about the URLs where Clerk operates and the required CNAME targets.
 */
export const list = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInput,
  outputSchema: ListOutput,
}));
