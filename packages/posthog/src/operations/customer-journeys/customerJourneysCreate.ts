import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomerJourneysCreateInput {
  project_id: string;
  id?: string;
  insight?: number;
  name?: string;
  description?: string | null;
  created_at?: string;
  created_by?: number | null;
  updated_at?: string | null;
}
export const CustomerJourneysCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    insight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/customer_journeys/",
    }),
  ) as unknown as Schema.Codec<CustomerJourneysCreateInput>;

// Output Schema
export interface CustomerJourneysCreateOutput {
  id?: string;
  insight?: number;
  name?: string;
  description?: string | null;
  created_at?: string;
  created_by?: number | null;
  updated_at?: string | null;
}
export const CustomerJourneysCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    insight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<CustomerJourneysCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customerJourneysCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomerJourneysCreateInput,
  outputSchema: CustomerJourneysCreateOutput,
}));
