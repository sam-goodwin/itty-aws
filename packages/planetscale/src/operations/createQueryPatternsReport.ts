import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CreateQueryPatternsReportInput {
  organization: string;
  database: string;
  branch: string;
}
export const CreateQueryPatternsReportInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/query-patterns",
    }),
  ) as unknown as Schema.Codec<CreateQueryPatternsReportInput>;

// Output Schema
export interface CreateQueryPatternsReportOutput {
  id: string;
  state: "pending" | "completed" | "failed";
  created_at: string;
  finished_at: string | null;
  url: string;
  download_url: string;
  actor: { id: string; display_name: string; avatar_url: string };
}
export const CreateQueryPatternsReportOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    state: Schema.Literals(["pending", "completed", "failed"]),
    created_at: Schema.String,
    finished_at: Schema.NullOr(Schema.String),
    url: Schema.String,
    download_url: Schema.String,
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
  }) as unknown as Schema.Codec<CreateQueryPatternsReportOutput>;

// The operation
/**
 * Create a new query patterns report
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 */
export const createQueryPatternsReport = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateQueryPatternsReportInput,
  outputSchema: CreateQueryPatternsReportOutput,
  errors: [Forbidden, NotFound] as const,
}));
