import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CustomerProfileConfigsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    scope: Schema.Literals([
      "person",
      "group_0",
      "group_1",
      "group_2",
      "group_3",
      "group_4",
    ]),
    content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sidebar: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/environments/{project_id}/customer_profile_configs/{id}/",
    }),
  );
export type CustomerProfileConfigsUpdateInput =
  typeof CustomerProfileConfigsUpdateInput.Type;

// Output Schema
export const CustomerProfileConfigsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    scope: Schema.Literals([
      "person",
      "group_0",
      "group_1",
      "group_2",
      "group_3",
      "group_4",
    ]),
    content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sidebar: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
  });
export type CustomerProfileConfigsUpdateOutput =
  typeof CustomerProfileConfigsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this customer profile config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerProfileConfigsUpdateInput,
    outputSchema: CustomerProfileConfigsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
