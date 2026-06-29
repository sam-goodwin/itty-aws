import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const UpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  proxy_url: Schema.optional(Schema.NullOr(Schema.String)),
  is_secondary: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(T.Http({ method: "PATCH", path: "/domains/{domain_id}" }));
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema
export const UpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateOutput = typeof UpdateOutput.Type;

// The operation
/**
 * Update a domain
 *
 * The `proxy_url` can be updated only for production instances.
 * Update one of the instance's domains. Both primary and satellite domains can be updated.
 * If you choose to use Clerk via proxy, use this endpoint to specify the `proxy_url`.
 * Whenever you decide you'd rather switch to DNS setup for Clerk, simply set `proxy_url`
 * to `null` for the domain. When you update a production instance's primary domain name,
 * you have to make sure that you've completed all the necessary setup steps for DNS and
 * emails to work. Expect downtime otherwise. Updating a primary domain's name will also
 * update the instance's home origin, affecting the default application paths.
 *
 * @param domain_id - The ID of the domain that will be updated.
 */
export const update = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
