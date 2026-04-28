import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const GroupsPropertyDefinitionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups/property_definitions/",
    }),
  );
export type GroupsPropertyDefinitionsRetrieveInput =
  typeof GroupsPropertyDefinitionsRetrieveInput.Type;

// Output Schema
export const GroupsPropertyDefinitionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsPropertyDefinitionsRetrieveOutput =
  typeof GroupsPropertyDefinitionsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsPropertyDefinitionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupsPropertyDefinitionsRetrieveInput,
    outputSchema: GroupsPropertyDefinitionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
