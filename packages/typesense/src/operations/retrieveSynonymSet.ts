import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveSynonymSetInput {
  synonymSetName: string;
}
export const RetrieveSynonymSetInput =
  /*@__PURE__*/ Schema.Struct({
    synonymSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/synonym_sets/{synonymSetName}" }),
  ) as unknown as Schema.Codec<RetrieveSynonymSetInput>;

// Output Schema
export interface RetrieveSynonymSetOutput {
  items: {
    id: string;
    synonyms: string[];
    root?: string;
    locale?: string;
    symbols_to_index?: string[];
  }[];
  name: string;
}
export const RetrieveSynonymSetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RetrieveSynonymSetOutput>;

// The operation
/**
 * Retrieve a synonym set
 *
 * Retrieve a specific synonym set by its name
 *
 * @param synonymSetName - The name of the synonym set to retrieve
 */
export const retrieveSynonymSet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RetrieveSynonymSetInput,
  outputSchema: RetrieveSynonymSetOutput,
  errors: [NotFound] as const,
}));
