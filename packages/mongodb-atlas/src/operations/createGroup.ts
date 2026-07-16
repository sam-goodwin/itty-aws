import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface CreateGroupInput {
  envelope?: boolean;
  pretty?: boolean;
  projectOwnerId?: string;
}
export const CreateGroupInput = /*@__PURE__*/ Schema.Struct({
  envelope: Schema.optional(Schema.Boolean),
  pretty: Schema.optional(Schema.Boolean),
  projectOwnerId: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/api/atlas/v2/groups" }),
) as unknown as Schema.Codec<CreateGroupInput>;

// Output Schema
export type CreateGroupOutput = void;
export const CreateGroupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreateGroupOutput>;

// The operation
/**
 * Create One Project
 *
 * Creates one project. Projects group clusters into logical collections that support an application environment, workload, or both. Each project can have its own users, teams, security, tags, and alert settings.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param projectOwnerId - Unique 24-hexadecimal digit string that identifies the MongoDB Cloud user to whom to grant the Project Owner role on the specified project. If you set this parameter, it overrides the default value of the oldest Organization Owner.
 */
export const createGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateGroupInput,
  outputSchema: CreateGroupOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
