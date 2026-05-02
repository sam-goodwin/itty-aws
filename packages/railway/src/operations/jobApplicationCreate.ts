import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation jobApplicationCreate($input: JobApplicationCreateInput!, $resume: Upload!) {\n  jobApplicationCreate(input: $input, resume: $resume)\n}";

// Input Schema (GraphQL variables)
export const JobApplicationCreateInput = Schema.Struct({
  input: Schema.Struct({
    email: Schema.String,
    jobId: Schema.String,
    name: Schema.String,
    why: Schema.String,
  }),
  resume: Schema.Unknown,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "jobApplicationCreate",
    type: "mutation",
  }),
);
export type JobApplicationCreateInput = typeof JobApplicationCreateInput.Type;

// Output Schema (GraphQL selection set)
export const JobApplicationCreateOutput = Schema.Boolean.pipe(
  T.ResponsePath("jobApplicationCreate"),
);
export type JobApplicationCreateOutput = typeof JobApplicationCreateOutput.Type;

/**
 * Creates a new job application.
 */
export const jobApplicationCreate = API.make(() => ({
  inputSchema: JobApplicationCreateInput,
  outputSchema: JobApplicationCreateOutput,
}));
