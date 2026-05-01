import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const MembersPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    user__uuid: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    level: Schema.optional(Schema.Literals([1, 8, 15])),
    joined_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    is_2fa_enabled: Schema.optional(Schema.Boolean),
    has_social_auth: Schema.optional(Schema.Boolean),
    last_login: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/organizations/{organization_id}/members/{user__uuid}/",
    }),
  );
export type MembersPartialUpdateInput = typeof MembersPartialUpdateInput.Type;

// Output Schema
export const MembersPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    level: Schema.optional(Schema.Literals([1, 8, 15])),
    joined_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    is_2fa_enabled: Schema.optional(Schema.Boolean),
    has_social_auth: Schema.optional(Schema.Boolean),
    last_login: Schema.optional(Schema.String),
  });
export type MembersPartialUpdateOutput = typeof MembersPartialUpdateOutput.Type;

// The operation
export const membersPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MembersPartialUpdateInput,
    outputSchema: MembersPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
