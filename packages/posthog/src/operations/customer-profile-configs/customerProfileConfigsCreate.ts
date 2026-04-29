import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CustomerProfileConfigsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/customer_profile_configs/",
    }),
  );
export type CustomerProfileConfigsCreateInput =
  typeof CustomerProfileConfigsCreateInput.Type;

// Output Schema
export const CustomerProfileConfigsCreateOutput =
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
export type CustomerProfileConfigsCreateOutput =
  typeof CustomerProfileConfigsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerProfileConfigsCreateInput,
    outputSchema: CustomerProfileConfigsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
