import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ApplicationsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    scopes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    redirect_uris: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            uri: Schema.String,
            default: Schema.optional(Schema.NullOr(Schema.Boolean)),
          }),
        ),
      ),
    ),
  }).pipe(T.Http({ method: "PUT", path: "/connect/applications/{id}" }));
export type ApplicationsControllerUpdateInput =
  typeof ApplicationsControllerUpdateInput.Type;

// Output Schema
export const ApplicationsControllerUpdateOutput =
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
export type ApplicationsControllerUpdateOutput =
  typeof ApplicationsControllerUpdateOutput.Type;

// The operation
/**
 * Update a Connect Application
 *
 * Update an existing Connect Application. For OAuth applications, you can update redirect URIs. For all applications, you can update the name, description, and scopes.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationsControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsControllerUpdateInput,
    outputSchema: ApplicationsControllerUpdateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
