import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DirectoriesControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/directories/{id}" }));
export type DirectoriesControllerFindInput =
  typeof DirectoriesControllerFindInput.Type;

// Output Schema
export const DirectoriesControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.String,
    external_key: Schema.String,
    type: Schema.Literals([
      "azure scim v2.0",
      "bamboohr",
      "breathe hr",
      "cezanne hr",
      "cyberark scim v2.0",
      "fourth hr",
      "generic scim v2.0",
      "gsuite directory",
      "hibob",
      "sailpoint scim v2.0",
      "jump cloud scim v2.0",
      "okta scim v2.0",
      "onelogin scim v2.0",
      "people hr",
      "personio",
      "pingfederate scim v2.0",
      "rippling scim v2.0",
      "s3",
      "sftp",
      "sftp workday",
      "workday",
    ]),
    state: Schema.Literals([
      "linked",
      "validating",
      "invalid_credentials",
      "unlinked",
      "deleting",
    ]),
    name: Schema.String,
    domain: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Struct({
        users: Schema.Struct({
          active: Schema.Number,
          inactive: Schema.Number,
        }),
        groups: Schema.Number,
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type DirectoriesControllerFindOutput =
  typeof DirectoriesControllerFindOutput.Type;

// The operation
/**
 * Get a Directory
 *
 * Get the details of an existing directory.
 *
 * @param id - Unique identifier for the Directory.
 */
export const DirectoriesControllerFind = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DirectoriesControllerFindInput,
    outputSchema: DirectoriesControllerFindOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
