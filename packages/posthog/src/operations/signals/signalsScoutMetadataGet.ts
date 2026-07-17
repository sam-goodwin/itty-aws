import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsScoutMetadataGetInput {
  project_id: string;
}
export const SignalsScoutMetadataGetInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/scout/metadata/current/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutMetadataGetInput>;

// Output Schema
export interface SignalsScoutMetadataGetOutput {
  enrolled: boolean;
  banner_message: string | null;
  limits: {
    max_runs_per_tick: number;
    max_runs_per_day: number | null;
    runs_today: number;
    runs_remaining_today: number | null;
  };
}
export const SignalsScoutMetadataGetOutput =
  /*@__PURE__*/ Schema.Struct({
    enrolled: Schema.Boolean,
    banner_message: Schema.NullOr(Schema.String),
    limits: Schema.Struct({
      max_runs_per_tick: Schema.Number,
      max_runs_per_day: Schema.NullOr(Schema.Number),
      runs_today: Schema.Number,
      runs_remaining_today: Schema.NullOr(Schema.Number),
    }),
  }) as unknown as Schema.Codec<SignalsScoutMetadataGetOutput>;

// The operation
/**
 * Get scout metadata
 *
 * Return the project's scout metadata: whether it is enrolled, the current announcement banner (e.g. an alpha run-limit notice, or null when unset), and the enforced run limits with current usage. Limits reflect what the coordinator actually applies at dispatch, so a user can see the real throttle rather than what they assume they set. All values come from the `signals-scout` flag payload, so the banner and caps can change with no deploy.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsScoutMetadataGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalsScoutMetadataGetInput,
  outputSchema: SignalsScoutMetadataGetOutput,
}));
