import * as Schema from "effect/Schema";
import { CurationItemSchemaSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveCurationSetItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    curationSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/curation_sets/{curationSetName}/items" }),
  );
export type RetrieveCurationSetItemsInput =
  typeof RetrieveCurationSetItemsInput.Type;

// Output Schema
export const RetrieveCurationSetItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CurationItemSchemaSchema),
  );
export type RetrieveCurationSetItemsOutput =
  typeof RetrieveCurationSetItemsOutput.Type;

// The operation
/**
 * List items in a curation set
 *
 * Retrieve all curation items in a set
 *
 * @param curationSetName - The name of the curation set to retrieve items for
 */
export const retrieveCurationSetItems = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveCurationSetItemsInput,
    outputSchema: RetrieveCurationSetItemsOutput,
    errors: [NotFound] as const,
  }),
);
