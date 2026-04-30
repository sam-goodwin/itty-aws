import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation jobRun {\n  jobRun\n}";

// Input Schema (GraphQL variables)
export const JobRunInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "jobRun",
    type: "mutation",
  }),
);
export type JobRunInput = typeof JobRunInput.Type;

// Output Schema (GraphQL selection set)
export const JobRunOutput = Schema.Unknown;
export type JobRunOutput = typeof JobRunOutput.Type;

/**
 * Mutations that modify an EAS Build
 */
export const jobRun = API.make(() => ({
  inputSchema: JobRunInput,
  outputSchema: JobRunOutput,
}));
