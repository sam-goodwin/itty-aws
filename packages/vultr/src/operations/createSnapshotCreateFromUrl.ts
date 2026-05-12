import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateSnapshotCreateFromUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/snapshots/create-from-url" }));
export type CreateSnapshotCreateFromUrlInput =
  typeof CreateSnapshotCreateFromUrlInput.Type;

// Output Schema
export const CreateSnapshotCreateFromUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateSnapshotCreateFromUrlOutput =
  typeof CreateSnapshotCreateFromUrlOutput.Type;

// The operation
/**
 * Create Snapshot from URL
 *
 * Create a new Snapshot from a RAW image located at `url`.
 */
export const createSnapshotCreateFromUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateSnapshotCreateFromUrlInput,
    outputSchema: CreateSnapshotCreateFromUrlOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
