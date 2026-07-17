import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface StopGroupStreamProcessorInput {
  groupId: string;
  tenantName: string;
  processorName: string;
  envelope?: boolean;
  pretty?: boolean;
}
export const StopGroupStreamProcessorInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    tenantName: Schema.String.pipe(T.PathParam()),
    processorName: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor/{processorName}:stop",
    }),
  ) as unknown as Schema.Codec<StopGroupStreamProcessorInput>;

// Output Schema
export type StopGroupStreamProcessorOutput = void;
export const StopGroupStreamProcessorOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StopGroupStreamProcessorOutput>;

// The operation
/**
 * Stop One Stream Processor
 *
 * Stop a Stream Processor within the specified stream workspace.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param tenantName - Label that identifies the stream workspace.
 * @param processorName - Label that identifies the stream processor.
 */
export const stopGroupStreamProcessor = /*@__PURE__*/ API.make(() => ({
  inputSchema: StopGroupStreamProcessorInput,
  outputSchema: StopGroupStreamProcessorOutput,
  errors: [Forbidden, NotFound] as const,
}));
