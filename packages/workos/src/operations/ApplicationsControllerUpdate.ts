import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface ApplicationsControllerUpdateInput {
  id: string;
  name?: string;
  description?: string | null;
  scopes?: string[] | null;
  redirect_uris?: { uri?: string; default?: boolean | null }[] | null;
}
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
            uri: Schema.optional(Schema.String),
            default: Schema.optional(Schema.NullOr(Schema.Boolean)),
          }),
        ),
      ),
    ),
  }).pipe(
    T.Http({ method: "PUT", path: "/connect/applications/{id}" }),
  ) as unknown as Schema.Codec<ApplicationsControllerUpdateInput>;

// Output Schema
export interface ApplicationsControllerUpdateOutput {
  object: string;
  id: string;
  client_id: string;
  description: string | null;
  name: string;
  scopes: string[];
  created_at: string;
  updated_at: string;
}
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
  }) as unknown as Schema.Codec<ApplicationsControllerUpdateOutput>;

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
