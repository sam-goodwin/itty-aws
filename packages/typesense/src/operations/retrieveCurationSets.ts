import * as Schema from "effect/Schema";
import { CurationSetSchemaSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveCurationSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/curation_sets" }),
  );
export type RetrieveCurationSetsInput = typeof RetrieveCurationSetsInput.Type;

// Output Schema
export const RetrieveCurationSetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CurationSetSchemaSchema),
  );
export type RetrieveCurationSetsOutput = typeof RetrieveCurationSetsOutput.Type;

// The operation
/**
 * List all curation sets
 *
 * Retrieve all curation sets
 */
export const retrieveCurationSets = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveCurationSetsInput,
    outputSchema: RetrieveCurationSetsOutput,
  }),
);
