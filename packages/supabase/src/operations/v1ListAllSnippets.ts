import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllSnippetsInput {
  project_ref?: string;
  cursor?: string;
  limit?: string;
  sort_by?: "name" | "inserted_at";
  sort_order?: "asc" | "desc";
}
export const V1ListAllSnippetsInput = /*@__PURE__*/ Schema.Struct({
  project_ref: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.String),
  sort_by: Schema.optional(Schema.Literals(["name", "inserted_at"])),
  sort_order: Schema.optional(Schema.Literals(["asc", "desc"])),
}).pipe(
  T.Http({ method: "GET", path: "/v1/snippets" }),
) as unknown as Schema.Codec<V1ListAllSnippetsInput>;

// Output Schema
export interface V1ListAllSnippetsOutput {
  data: {
    id: string;
    inserted_at: string;
    updated_at: string;
    type: "sql";
    visibility: "user" | "project" | "org" | "public";
    name: string;
    description: string | null;
    project: { id: number; name: string };
    owner: { id: number; username: string };
    updated_by: { id: number; username: string };
    favorite: boolean;
  }[];
  cursor?: string;
}
export const V1ListAllSnippetsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        inserted_at: Schema.String,
        updated_at: Schema.String,
        type: Schema.Literals(["sql"]),
        visibility: Schema.Literals(["user", "project", "org", "public"]),
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        project: Schema.Struct({
          id: Schema.Number,
          name: Schema.String,
        }),
        owner: Schema.Struct({
          id: Schema.Number,
          username: Schema.String,
        }),
        updated_by: Schema.Struct({
          id: Schema.Number,
          username: Schema.String,
        }),
        favorite: Schema.Boolean,
      }),
    ),
    cursor: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<V1ListAllSnippetsOutput>;

// The operation
/**
 * Lists SQL snippets for the logged in user
 *
 * @param project_ref - Project ref
 */
export const v1ListAllSnippets = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllSnippetsInput,
  outputSchema: V1ListAllSnippetsOutput,
  errors: [Forbidden] as const,
}));
