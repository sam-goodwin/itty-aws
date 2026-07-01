import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomerProfileConfigsUpdateInput {
  id: string;
  project_id: string;
  scope?: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4";
  content?: unknown;
  sidebar?: unknown;
  created_at?: string;
  updated_at?: string | null;
}
export const CustomerProfileConfigsUpdateInput =
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
    content: Schema.optional(Schema.Unknown),
    sidebar: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/customer_profile_configs/{id}/",
    }),
  ) as unknown as Schema.Codec<CustomerProfileConfigsUpdateInput>;

// Output Schema
export interface CustomerProfileConfigsUpdateOutput {
  id?: string;
  scope?: "person" | "group_0" | "group_1" | "group_2" | "group_3" | "group_4";
  content?: unknown;
  sidebar?: unknown;
  created_at?: string;
  updated_at?: string | null;
}
export const CustomerProfileConfigsUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomerProfileConfigsUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerProfileConfigsUpdateInput,
    outputSchema: CustomerProfileConfigsUpdateOutput,
  }));
