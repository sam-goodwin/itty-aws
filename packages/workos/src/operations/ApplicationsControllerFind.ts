import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ApplicationsControllerFindInput {
  id: string;
}
export const ApplicationsControllerFindInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/connect/applications/{id}" }),
  ) as unknown as Schema.Codec<ApplicationsControllerFindInput>;

// Output Schema
export interface ApplicationsControllerFindOutput {
  object: string;
  id: string;
  client_id: string;
  description: string | null;
  name: string;
  scopes: ReadonlyArray<string>;
  created_at: string;
  updated_at: string;
}
export const ApplicationsControllerFindOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    client_id: Schema.String,
    description: Schema.NullOr(Schema.String),
    name: Schema.String,
    scopes: Schema.Array(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<ApplicationsControllerFindOutput>;

// The operation
/**
 * Get a Connect Application
 *
 * Retrieve details for a specific Connect Application by ID or client ID.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationsControllerFind = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsControllerFindInput,
  outputSchema: ApplicationsControllerFindOutput,
  errors: [NotFound] as const,
}));
