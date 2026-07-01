import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface GetV1IntegrationsByIdInput {
  id: string;
}
export const GetV1IntegrationsByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/integrations/{id}" }),
  ) as unknown as Schema.Codec<GetV1IntegrationsByIdInput>;

// Output Schema
export interface GetV1IntegrationsByIdOutput {
  data: {
    id: string;
    url: string;
    createdAt: string;
    scopes: string[];
    client: { id: string; name: string; createdAt: string };
    createdByUser: { id: string; email: string; displayName: string | null };
  };
}
export const GetV1IntegrationsByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      url: Schema.String,
      createdAt: Schema.String,
      scopes: Schema.Array(Schema.String),
      client: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        createdAt: Schema.String,
      }),
      createdByUser: Schema.Struct({
        id: Schema.String,
        email: Schema.String,
        displayName: Schema.NullOr(Schema.String),
      }),
    }),
  }) as unknown as Schema.Codec<GetV1IntegrationsByIdOutput>;

// The operation
/**
 * Get integration by ID
 *
 * Returns a single integration by its ID.
 */
export const getV1IntegrationsById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1IntegrationsByIdInput,
    outputSchema: GetV1IntegrationsByIdOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
