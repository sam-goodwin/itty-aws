import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const UpsertSynonymSetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  synonymSetName: Schema.String.pipe(T.PathParam()),
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      synonyms: Schema.Array(Schema.String),
      root: Schema.optional(Schema.String),
      locale: Schema.optional(Schema.String),
      symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).pipe(T.Http({ method: "PUT", path: "/synonym_sets/{synonymSetName}" }));
export type UpsertSynonymSetInput = typeof UpsertSynonymSetInput.Type;

// Output Schema
export const UpsertSynonymSetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        synonyms: Schema.Array(Schema.String),
        root: Schema.optional(Schema.String),
        locale: Schema.optional(Schema.String),
        symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    name: Schema.String,
  },
);
export type UpsertSynonymSetOutput = typeof UpsertSynonymSetOutput.Type;

// The operation
/**
 * Create or update a synonym set
 *
 * Create or update a synonym set with the given name
 *
 * @param synonymSetName - The name of the synonym set to create/update
 */
export const upsertSynonymSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpsertSynonymSetInput,
  outputSchema: UpsertSynonymSetOutput,
  errors: [BadRequest] as const,
}));
