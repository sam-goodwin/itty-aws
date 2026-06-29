import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const AddInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  is_satellite: Schema.Literals(["true"]),
  proxy_url: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/domains" }));
export type AddInput = typeof AddInput.Type;

// Output Schema
export const AddOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type AddOutput = typeof AddOutput.Type;

// The operation
/**
 * Add a domain
 *
 * Add a new domain for your instance.
 * Useful in the case of multi-domain instances, allows adding satellite domains to an instance.
 * The new domain must have a `name`. The domain name can contain the port for development instances, like `localhost:3000`.
 * At the moment, instances can have only one primary domain, so the `is_satellite` parameter must be set to `true`.
 * If you're planning to configure the new satellite domain to run behind a proxy, pass the `proxy_url` parameter accordingly.
 */
export const add = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddInput,
  outputSchema: AddOutput,
  errors: [BadRequest, PaymentRequired, UnprocessableEntity] as const,
}));
