import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const PatchProjectsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
  categories: Schema.optional(Schema.Array(Schema.String)),
  add_categories: Schema.optional(Schema.Array(Schema.String)),
  remove_categories: Schema.optional(Schema.Array(Schema.String)),
  additional_categories: Schema.optional(Schema.Array(Schema.String)),
  add_additional_categories: Schema.optional(Schema.Array(Schema.String)),
  remove_additional_categories: Schema.optional(Schema.Array(Schema.String)),
  donation_urls: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        platform: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  add_donation_urls: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        platform: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  remove_donation_urls: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        platform: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  issues_url: Schema.optional(Schema.NullOr(Schema.String)),
  source_url: Schema.optional(Schema.NullOr(Schema.String)),
  wiki_url: Schema.optional(Schema.NullOr(Schema.String)),
  discord_url: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/projects" }));
export type PatchProjectsInput = typeof PatchProjectsInput.Type;

// Output Schema
export const PatchProjectsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PatchProjectsOutput = typeof PatchProjectsOutput.Type;

// The operation
/**
 * Bulk-edit multiple projects
 *
 * @param ids - The IDs and/or slugs of the projects
 */
export const patchProjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchProjectsInput,
  outputSchema: PatchProjectsOutput,
  errors: [BadRequest] as const,
}));
