import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteV1IntegrationsByIdInput {
  id: string;
}
export const DeleteV1IntegrationsByIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/integrations/{id}" }),
  ) as unknown as Schema.Codec<DeleteV1IntegrationsByIdInput>;

// Output Schema
export type DeleteV1IntegrationsByIdOutput = void;
export const DeleteV1IntegrationsByIdOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1IntegrationsByIdOutput>;

// The operation
/**
 * Delete integration
 *
 * Revokes the integration tokens by integration ID.
 */
export const deleteV1IntegrationsById = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteV1IntegrationsByIdInput,
  outputSchema: DeleteV1IntegrationsByIdOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
