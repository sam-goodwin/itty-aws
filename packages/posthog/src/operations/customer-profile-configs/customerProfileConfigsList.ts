import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomerProfileConfigsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const CustomerProfileConfigsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/customer_profile_configs/",
    }),
  ) as unknown as Schema.Codec<CustomerProfileConfigsListInput>;

// Output Schema
export interface CustomerProfileConfigsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    scope?:
      | "person"
      | "group_0"
      | "group_1"
      | "group_2"
      | "group_3"
      | "group_4";
    content?: unknown;
    sidebar?: unknown;
    created_at?: string;
    updated_at?: string | null;
  }[];
}
export const CustomerProfileConfigsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomerProfileConfigsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerProfileConfigsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerProfileConfigsListInput,
    outputSchema: CustomerProfileConfigsListOutput,
  }),
);
