import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation webhookTest($payload: String!, $url: String!) {\n  webhookTest(payload: $payload, url: $url) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TestWebhookInput = Schema.Struct({
  payload: Schema.String,
  url: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "webhookTest",
    type: "mutation",
  }),
);
export type TestWebhookInput = typeof TestWebhookInput.Type;

// Output Schema (GraphQL selection set)
export const TestWebhookOutput = Schema.Number.pipe(
  T.ResponsePath("webhookTest"),
);
export type TestWebhookOutput = typeof TestWebhookOutput.Type;

/**
 * Test a webhook URL by sending a sample payload. Returns the HTTP status code.
 */
export const testWebhook = API.make(() => ({
  inputSchema: TestWebhookInput,
  outputSchema: TestWebhookOutput,
}));
