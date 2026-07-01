import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateProjectTransferRequestInput {
  project_id: string;
  ttl_seconds?: number;
}
export const CreateProjectTransferRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ttl_seconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/transfer_requests",
    }),
  ) as unknown as Schema.Codec<CreateProjectTransferRequestInput>;

// Output Schema
export interface CreateProjectTransferRequestOutput {
  id: string;
  project_id: string;
  created_at: string;
  expires_at: string;
}
export const CreateProjectTransferRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    project_id: Schema.String,
    created_at: Schema.String,
    expires_at: Schema.String,
  }) as unknown as Schema.Codec<CreateProjectTransferRequestOutput>;

// The operation
/**
 * Create a project transfer request
 *
 * Creates a transfer request for the specified project. The request expires after a set period.
 * To accept the request, the recipient calls `PUT /projects/{project_id}/transfer_requests/{request_id}`
 * or uses the Neon Console claim link.
 * The optional `ru` parameter redirects the recipient after acceptance.
 *
 * @param project_id - The Neon project ID
 */
export const createProjectTransferRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateProjectTransferRequestInput,
    outputSchema: CreateProjectTransferRequestOutput,
  }));
