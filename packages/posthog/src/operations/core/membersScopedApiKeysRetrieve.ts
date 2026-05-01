import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const MembersScopedApiKeysRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    user__uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/members/{user__uuid}/scoped_api_keys/",
    }),
  );
export type MembersScopedApiKeysRetrieveInput =
  typeof MembersScopedApiKeysRetrieveInput.Type;

// Output Schema
export const MembersScopedApiKeysRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    user: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    level: Schema.optional(Schema.Literals([1, 8, 15])),
    joined_at: Schema.String,
    updated_at: Schema.String,
    is_2fa_enabled: Schema.Boolean,
    has_social_auth: Schema.Boolean,
    last_login: Schema.String,
  });
export type MembersScopedApiKeysRetrieveOutput =
  typeof MembersScopedApiKeysRetrieveOutput.Type;

// The operation
export const membersScopedApiKeysRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MembersScopedApiKeysRetrieveInput,
    outputSchema: MembersScopedApiKeysRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
