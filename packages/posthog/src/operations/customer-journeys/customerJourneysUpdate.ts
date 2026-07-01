import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomerJourneysUpdateInput {
  id: string;
  project_id: string;
  insight?: number;
  name?: string;
  description?: string | null;
  created_at?: string;
  created_by?: number | null;
  updated_at?: string | null;
}
export const CustomerJourneysUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    insight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/customer_journeys/{id}/",
    }),
  ) as unknown as Schema.Codec<CustomerJourneysUpdateInput>;

// Output Schema
export interface CustomerJourneysUpdateOutput {
  id?: string;
  insight?: number;
  name?: string;
  description?: string | null;
  created_at?: string;
  created_by?: number | null;
  updated_at?: string | null;
}
export const CustomerJourneysUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    insight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<CustomerJourneysUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerJourneysUpdateInput,
    outputSchema: CustomerJourneysUpdateOutput,
  }),
);
