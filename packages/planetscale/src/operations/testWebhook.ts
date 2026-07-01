import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface TestWebhookInput {
  organization: string;
  database: string;
  id: string;
}
export const TestWebhookInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/databases/{database}/webhooks/{id}/test",
  }),
) as unknown as Schema.Codec<TestWebhookInput>;

// Output Schema
export type TestWebhookOutput = void;
export const TestWebhookOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TestWebhookOutput>;

// The operation
/**
 * Test a webhook
 *
 * Sends a test event to the webhook
 *
 * @param organization - The name of the organization
 * @param database - The name of the database
 * @param id - The ID of the webhook
 */
export const testWebhook = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestWebhookInput,
  outputSchema: TestWebhookOutput,
  errors: [Forbidden, NotFound] as const,
}));
