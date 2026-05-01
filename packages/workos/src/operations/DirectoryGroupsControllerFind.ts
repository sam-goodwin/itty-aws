import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DirectoryGroupsControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/directory_groups/{id}" }));
export type DirectoryGroupsControllerFindInput =
  typeof DirectoryGroupsControllerFindInput.Type;

// Output Schema
export const DirectoryGroupsControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    idp_id: Schema.optional(Schema.String),
    directory_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    raw_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type DirectoryGroupsControllerFindOutput =
  typeof DirectoryGroupsControllerFindOutput.Type;

// The operation
/**
 * Get a Directory Group
 *
 * Get the details of an existing Directory Group.
 *
 * @param id - Unique identifier for the Directory Group.
 */
export const DirectoryGroupsControllerFind =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DirectoryGroupsControllerFindInput,
    outputSchema: DirectoryGroupsControllerFindOutput,
    errors: [Forbidden, NotFound] as const,
  }));
