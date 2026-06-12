import * as Schema from "effect/Schema";
import { CurationItemCreateSchemaSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UpsertCurationSetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    curationSetName: Schema.String.pipe(T.PathParam()),
    items: Schema.Array(Schema.suspend(() => CurationItemCreateSchemaSchema)),
    description: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "PUT", path: "/curation_sets/{curationSetName}" }));
export type UpsertCurationSetInput = typeof UpsertCurationSetInput.Type;

// Output Schema
export const UpsertCurationSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(Schema.suspend(() => CurationItemCreateSchemaSchema)),
    description: Schema.optional(Schema.String),
    name: Schema.String,
  });
export type UpsertCurationSetOutput = typeof UpsertCurationSetOutput.Type;

// The operation
/**
 * Create or update a curation set
 *
 * Create or update a curation set with the given name
 *
 * @param curationSetName - The name of the curation set to create/update
 */
export const upsertCurationSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpsertCurationSetInput,
  outputSchema: UpsertCurationSetOutput,
  errors: [BadRequest] as const,
}));
