import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ApplicationsControllerFindInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/connect/applications/{id}" }));
export type ApplicationsControllerFindInput =
  typeof ApplicationsControllerFindInput.Type;

// Output Schema
export const ApplicationsControllerFindOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    client_id: Schema.String,
    description: Schema.NullOr(Schema.String),
    name: Schema.String,
    scopes: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type ApplicationsControllerFindOutput =
  typeof ApplicationsControllerFindOutput.Type;

// The operation
/**
 * Get a Connect Application
 *
 * Retrieve details for a specific Connect Application by ID or client ID.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationsControllerFind = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsControllerFindInput,
    outputSchema: ApplicationsControllerFindOutput,
    errors: [NotFound] as const,
  }),
);
