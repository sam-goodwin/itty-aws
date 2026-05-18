import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ModifyVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  version_number: Schema.optional(Schema.String),
  changelog: Schema.optional(Schema.NullOr(Schema.String)),
  dependencies: Schema.optional(
    Schema.Array(
      Schema.Struct({
        version_id: Schema.optional(Schema.NullOr(Schema.String)),
        project_id: Schema.optional(Schema.NullOr(Schema.String)),
        file_name: Schema.optional(Schema.NullOr(Schema.String)),
        dependency_type: Schema.Literals([
          "required",
          "optional",
          "incompatible",
          "embedded",
        ]),
      }),
    ),
  ),
  game_versions: Schema.optional(Schema.Array(Schema.String)),
  version_type: Schema.optional(Schema.Literals(["release", "beta", "alpha"])),
  loaders: Schema.optional(Schema.Array(Schema.String)),
  featured: Schema.optional(Schema.Boolean),
  status: Schema.optional(
    Schema.Literals([
      "listed",
      "archived",
      "draft",
      "unlisted",
      "scheduled",
      "unknown",
    ]),
  ),
  requested_status: Schema.optional(
    Schema.NullOr(Schema.Literals(["listed", "archived", "draft", "unlisted"])),
  ),
  primary_file: Schema.optional(Schema.Array(Schema.String)),
  file_types: Schema.optional(
    Schema.Array(
      Schema.Struct({
        algorithm: Schema.String,
        hash: Schema.String,
        file_type: Schema.Struct({}),
      }),
    ),
  ),
}).pipe(T.Http({ method: "PATCH", path: "/version/{id}" }));
export type ModifyVersionInput = typeof ModifyVersionInput.Type;

// Output Schema
export const ModifyVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ModifyVersionOutput = typeof ModifyVersionOutput.Type;

// The operation
/**
 * Modify a version
 *
 * @param id - The ID of the version
 */
export const modifyVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModifyVersionInput,
  outputSchema: ModifyVersionOutput,
  errors: [BadRequest, NotFound] as const,
}));
