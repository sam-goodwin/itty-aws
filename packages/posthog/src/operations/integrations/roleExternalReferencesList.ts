import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RoleExternalReferencesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/role_external_references/",
    }),
  );
export type RoleExternalReferencesListInput =
  typeof RoleExternalReferencesListInput.Type;

// Output Schema
export const RoleExternalReferencesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          provider_organization_id: Schema.optional(Schema.String),
          provider_role_id: Schema.optional(Schema.String),
          provider_role_slug: Schema.optional(Schema.NullOr(Schema.String)),
          provider_role_name: Schema.optional(Schema.String),
          role: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
        }),
      ),
    ),
  });
export type RoleExternalReferencesListOutput =
  typeof RoleExternalReferencesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const roleExternalReferencesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RoleExternalReferencesListInput,
    outputSchema: RoleExternalReferencesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
