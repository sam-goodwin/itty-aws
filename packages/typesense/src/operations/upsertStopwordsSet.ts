import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface UpsertStopwordsSetInput {
  setId: string;
  stopwords: string[];
  locale?: string;
}
export const UpsertStopwordsSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setId: Schema.String.pipe(T.PathParam()),
    stopwords: Schema.Array(Schema.String),
    locale: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PUT", path: "/stopwords/{setId}" }),
  ) as unknown as Schema.Codec<UpsertStopwordsSetInput>;

// Output Schema
export interface UpsertStopwordsSetOutput {
  id: string;
  stopwords: string[];
  locale?: string;
}
export const UpsertStopwordsSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    stopwords: Schema.Array(Schema.String),
    locale: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UpsertStopwordsSetOutput>;

// The operation
/**
 * Upserts a stopwords set.
 *
 * When an analytics rule is created, we give it a name and describe the type, the source collections and the destination collection.
 *
 * @param setId - The ID of the stopwords set to upsert.
 */
export const upsertStopwordsSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpsertStopwordsSetInput,
  outputSchema: UpsertStopwordsSetOutput,
  errors: [BadRequest] as const,
}));
