import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFunctionsListInput {
  project_id: string;
  created_at?: string;
  created_by?: number;
  enabled?: boolean;
  id?: string;
  limit?: number;
  offset?: number;
  type?: string;
  updated_at?: string;
}
export const HogFunctionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
  enabled: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_functions/" }),
) as unknown as Schema.Codec<HogFunctionsListInput>;

// Output Schema
export interface HogFunctionsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    type?: string | null;
    name?: string | null;
    description?: string;
    created_at?: string;
    created_by?: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    } | null;
    updated_at?: string;
    enabled?: boolean;
    hog?: string;
    filters?: unknown;
    icon_url?: string | null;
    template?: {
      id?: string;
      name?: string;
      description?: string | null;
      code?: string;
      code_language?: string;
      inputs_schema?: unknown;
      type?: string;
      status?: string;
      category?: unknown;
      free?: boolean;
      icon_url?: string | null;
      filters?: unknown;
      masking?: unknown;
      mapping_templates?:
        | {
            name?: string;
            include_by_default?: boolean | null;
            use_all_events_by_default?: boolean | null;
            filters?: unknown;
            inputs?: unknown;
            inputs_schema?: unknown;
          }[]
        | null;
    };
    status?: { state?: 0 | 1 | 2 | 3 | 11 | 12; tokens?: number } | null;
    execution_order?: number | null;
    search_match_type?: "exact" | "similar" | null;
  }[];
}
export const HogFunctionsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.NullOr(Schema.String)),
          name: Schema.optional(Schema.NullOr(Schema.String)),
          description: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.Literals([
                        "engineering",
                        "data",
                        "product",
                        "founder",
                        "leadership",
                        "marketing",
                        "sales",
                        "other",
                      ]),
                      Schema.Literals([""]),
                    ]),
                  ),
                ),
              }),
            ),
          ),
          updated_at: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          hog: Schema.optional(Schema.String),
          filters: Schema.optional(Schema.Unknown),
          icon_url: Schema.optional(Schema.NullOr(Schema.String)),
          template: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              description: Schema.optional(Schema.NullOr(Schema.String)),
              code: Schema.optional(Schema.String),
              code_language: Schema.optional(Schema.String),
              inputs_schema: Schema.optional(Schema.Unknown),
              type: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              category: Schema.optional(Schema.Unknown),
              free: Schema.optional(Schema.Boolean),
              icon_url: Schema.optional(Schema.NullOr(Schema.String)),
              filters: Schema.optional(Schema.Unknown),
              masking: Schema.optional(Schema.Unknown),
              mapping_templates: Schema.optional(
                Schema.NullOr(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      include_by_default: Schema.optional(
                        Schema.NullOr(Schema.Boolean),
                      ),
                      use_all_events_by_default: Schema.optional(
                        Schema.NullOr(Schema.Boolean),
                      ),
                      filters: Schema.optional(Schema.Unknown),
                      inputs: Schema.optional(Schema.Unknown),
                      inputs_schema: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              ),
            }),
          ),
          status: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                state: Schema.optional(Schema.Literals([0, 1, 2, 3, 11, 12])),
                tokens: Schema.optional(Schema.Number),
              }),
            ),
          ),
          execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
          search_match_type: Schema.optional(
            Schema.NullOr(Schema.Literals(["exact", "similar"])),
          ),
        }),
      ),
    ),
  },
) as unknown as Schema.Codec<HogFunctionsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param type - Multiple values may be separated by commas.
 */
export const hogFunctionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFunctionsListInput,
  outputSchema: HogFunctionsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
