import * as Schema from "effect/Schema";
import { DirectorySchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DirectoriesControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    organization_id: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/directories" }));
export type DirectoriesControllerListInput =
  typeof DirectoriesControllerListInput.Type;

// Output Schema
export const DirectoriesControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Array(Schema.suspend(() => DirectorySchema))),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type DirectoriesControllerListOutput =
  typeof DirectoriesControllerListOutput.Type;

// The operation
/**
 * List Directories
 *
 * Get a list of all of your existing directories matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 * @param organization_id - Filter Directories by their associated organization.
 * @param search - Searchable text to match against Directory names.
 * @param domain - Filter Directories by their associated domain.
 */
export const DirectoriesControllerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DirectoriesControllerListInput,
    outputSchema: DirectoriesControllerListOutput,
    errors: [Forbidden, UnprocessableEntity] as const,
  }),
);
