import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Unauthorized } from "../errors.ts";
import { Session } from "../schemas.ts";

// Input Schema
export interface ListSessionsInput {}
export const ListSessionsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/list-sessions" }),
) as unknown as Schema.Codec<ListSessionsInput>;

// Output Schema
export type ListSessionsOutput = Session[];
export const ListSessionsOutput = /*@__PURE__*/ Schema.Array(
  Session,
) as unknown as Schema.Codec<ListSessionsOutput>;

/**
 * List the current user's active sessions.
 *
 * Requires an authenticated session. Returns an array of session objects.
 */
export const listSessions = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListSessionsInput,
  outputSchema: ListSessionsOutput,
  errors: [Unauthorized] as const,
}));
