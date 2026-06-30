import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateProjectTransferRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ttl_seconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/transfer_requests",
    }),
  );
export type CreateProjectTransferRequestInput =
  typeof CreateProjectTransferRequestInput.Type;

// Output Schema
export const CreateProjectTransferRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    project_id: Schema.String,
    created_at: Schema.String,
    expires_at: Schema.String,
  });
export type CreateProjectTransferRequestOutput =
  typeof CreateProjectTransferRequestOutput.Type;

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
