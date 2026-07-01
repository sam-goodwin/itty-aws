import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomerProfileConfigsRetrieveInput {
  id: string;
  project_id: string;
}
export const CustomerProfileConfigsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/customer_profile_configs/{id}/",
    }),
  ) as unknown as Schema.Codec<CustomerProfileConfigsRetrieveInput>;

// Output Schema
export interface CustomerProfileConfigsRetrieveOutput {
  id?: string;
  scope?: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4";
  content?: unknown;
  sidebar?: unknown;
  created_at?: string;
  updated_at?: string | null;
}
export const CustomerProfileConfigsRetrieveOutput =
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
    content: Schema.optional(Schema.Unknown),
    sidebar: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<CustomerProfileConfigsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerProfileConfigsRetrieveInput,
    outputSchema: CustomerProfileConfigsRetrieveOutput,
  }));
