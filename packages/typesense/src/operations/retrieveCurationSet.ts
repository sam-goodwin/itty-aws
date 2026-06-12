import * as Schema from "effect/Schema";
import { CurationItemCreateSchemaSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveCurationSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/curation_sets/{curationSetName}" }));
export type RetrieveCurationSetInput = typeof RetrieveCurationSetInput.Type;

// Output Schema
export const RetrieveCurationSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(Schema.suspend(() => CurationItemCreateSchemaSchema)),
    description: Schema.optional(Schema.String),
    name: Schema.String,
  });
export type RetrieveCurationSetOutput = typeof RetrieveCurationSetOutput.Type;

// The operation
/**
 * Retrieve a curation set
 *
 * Retrieve a specific curation set by its name
 *
 * @param curationSetName - The name of the curation set to retrieve
 */
export const retrieveCurationSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RetrieveCurationSetInput,
  outputSchema: RetrieveCurationSetOutput,
  errors: [NotFound] as const,
}));
