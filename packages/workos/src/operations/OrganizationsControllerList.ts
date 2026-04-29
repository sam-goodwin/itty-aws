import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    domains: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/organizations" }));
export type OrganizationsControllerListInput =
  typeof OrganizationsControllerListInput.Type;

// Output Schema
export const OrganizationsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        name: Schema.String,
        domains: Schema.Array(
          Schema.Struct({
            object: Schema.String,
            id: Schema.String,
            organization_id: Schema.String,
            domain: Schema.String,
            state: Schema.optional(
              Schema.Literals([
                "failed",
                "legacy_verified",
                "pending",
                "unverified",
                "verified",
              ]),
            ),
            verification_prefix: Schema.optional(Schema.String),
            verification_token: Schema.optional(Schema.String),
            verification_strategy: Schema.optional(
              Schema.Literals(["dns", "manual"]),
            ),
            created_at: Schema.String,
            updated_at: Schema.String,
          }),
        ),
        metadata: Schema.Record(Schema.String, Schema.String),
        external_id: Schema.NullOr(Schema.String),
        stripe_customer_id: Schema.optional(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
        allow_profiles_outside_organization: Schema.optional(Schema.Boolean),
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type OrganizationsControllerListOutput =
  typeof OrganizationsControllerListOutput.Type;

// The operation
/**
 * List Organizations
 *
 * Get a list of all of your existing organizations matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param domains - The domains of an Organization. Any Organization with a matching domain will be returned.
 * @param search - Searchable text for an Organization. Matches against the organization name.
 */
export const OrganizationsControllerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationsControllerListInput,
    outputSchema: OrganizationsControllerListOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
