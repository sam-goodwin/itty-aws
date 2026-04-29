import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsFindRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    group_key: Schema.String,
    group_type_index: Schema.Number,
  }).pipe(
    T.Http({ method: "GET", path: "/api/projects/{project_id}/groups/find/" }),
  );
export type GroupsFindRetrieveInput = typeof GroupsFindRetrieveInput.Type;

// Output Schema
export const GroupsFindRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsFindRetrieveOutput = typeof GroupsFindRetrieveOutput.Type;

// The operation
/**
 *
 * @param group_key - Specify the key of the group to find
 * @param group_type_index - Specify the group type to find
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsFindRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsFindRetrieveInput,
  outputSchema: GroupsFindRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
