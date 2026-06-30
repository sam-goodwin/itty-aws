import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export const EngineeringAnalyticsCiCardsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/ci_cards/",
    }),
  );
export type EngineeringAnalyticsCiCardsInput =
  typeof EngineeringAnalyticsCiCardsInput.Type;

// Output Schema
export const EngineeringAnalyticsCiCardsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    open_prs: Schema.Number,
    repos: Schema.Number,
    stuck: Schema.Number,
    failing_ci: Schema.Number,
  });
export type EngineeringAnalyticsCiCardsOutput =
  typeof EngineeringAnalyticsCiCardsOutput.Type;

// The operation
/**
 * Headline counts for the open-PR backlog: open PRs, distinct repos, stuck PRs (open, non-draft, non-bot, older than 7 days), and PRs with failing CI. The failing-CI count rests on the head-SHA join and can lag until late CI completions settle.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsCiCards = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EngineeringAnalyticsCiCardsInput,
    outputSchema: EngineeringAnalyticsCiCardsOutput,
    errors: [BadRequest] as const,
  }),
);
