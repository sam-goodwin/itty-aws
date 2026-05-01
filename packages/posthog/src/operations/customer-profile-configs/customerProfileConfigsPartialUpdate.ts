import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CustomerProfileConfigsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    scope: Schema.optional(
      Schema.Literals([
        "person",
        "group_0",
        "group_1",
        "group_2",
        "group_3",
        "group_4",
      ]),
    ),
    content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sidebar: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/customer_profile_configs/{id}/",
    }),
  );
export type CustomerProfileConfigsPartialUpdateInput =
  typeof CustomerProfileConfigsPartialUpdateInput.Type;

// Output Schema
export const CustomerProfileConfigsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    scope: Schema.optional(
      Schema.Literals([
        "person",
        "group_0",
        "group_1",
        "group_2",
        "group_3",
        "group_4",
      ]),
    ),
    content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sidebar: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type CustomerProfileConfigsPartialUpdateOutput =
  typeof CustomerProfileConfigsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this customer profile config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerProfileConfigsPartialUpdateInput,
    outputSchema: CustomerProfileConfigsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
