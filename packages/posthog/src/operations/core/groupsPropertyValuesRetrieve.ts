import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const GroupsPropertyValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups/property_values/",
    }),
  );
export type GroupsPropertyValuesRetrieveInput =
  typeof GroupsPropertyValuesRetrieveInput.Type;

// Output Schema
export const GroupsPropertyValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsPropertyValuesRetrieveOutput =
  typeof GroupsPropertyValuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsPropertyValuesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupsPropertyValuesRetrieveInput,
    outputSchema: GroupsPropertyValuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
