import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteServiceTokenInput {
  organization: string;
  id: string;
}
export const DeleteServiceTokenInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/service-tokens/{id}",
    }),
  ) as unknown as Schema.Codec<DeleteServiceTokenInput>;

// Output Schema
export type DeleteServiceTokenOutput = void;
export const DeleteServiceTokenOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteServiceTokenOutput>;

// The operation
/**
 * Delete a service token
 *
 * Delete a service token from the organization.
 *
 * @param organization - The name of the organization
 * @param id - The ID of the service token
 */
export const deleteServiceToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteServiceTokenInput,
  outputSchema: DeleteServiceTokenOutput,
  errors: [Forbidden, NotFound] as const,
}));
