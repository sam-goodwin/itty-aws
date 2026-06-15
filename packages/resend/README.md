# @distilled.cloud/resend

Effect-native Resend SDK generated from the [Resend OpenAPI specification](https://github.com/resend/resend-openapi). Send transactional and broadcast email, manage domains, audiences, contacts, templates, webhooks, and more — with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/resend effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { listEmails } from "@distilled.cloud/resend/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/resend";

const program = Effect.gen(function* () {
  const emails = yield* listEmails({ limit: 20 });
  return emails.data ?? [];
});

const ResendLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(ResendLive), Effect.runPromise);
```

## Configuration

Set the following environment variable:

```bash
RESEND_API_KEY=re_your_api_key
```

Create an API key in the [Resend dashboard](https://resend.com/api-keys) under **API Keys**.

`RESEND_API_BASE_URL` is also recognized and overrides the default `https://api.resend.com` for self-hosted or proxied deployments.

## Error Handling

```typescript
import { Effect } from "effect";
import { getEmail } from "@distilled.cloud/resend/Operations";

getEmail({ email_id: "missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownResendError: (e) => Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

- **Emails** — `createEmail`, `listEmails`, `getEmail`, `updateEmail`, `cancelEmail`, `batchEmail`, plus receiving / attachment operations
- **Domains** — `createDomain`, `listDomains`, `getDomain`, `updateDomain`, `deleteDomain`, `verifyDomain`
- **API Keys** — `createApiKey`, `listApiKeys`, `deleteApiKey`
- **Audiences / Segments / Topics** — list / create / get / update / delete operations for each
- **Contacts** — `createContact`, `listContacts`, `getContact`, `updateContact`, `deleteContact`, contact imports and contact-property operations
- **Templates** — `createTemplate`, `listTemplates`, `getTemplate`, `updateTemplate`, `deleteTemplate`, `publishTemplate`, `duplicateTemplate`
- **Broadcasts** — `createBroadcast`, `listBroadcasts`, `getBroadcast`, `updateBroadcast`, `deleteBroadcast`, `sendBroadcast`
- **Webhooks** — `createWebhook`, `listWebhooks`, `getWebhook`, `updateWebhook`, `deleteWebhook`
- **Automations** — `createAutomation`, `listAutomations`, `getAutomation`, `updateAutomation`, `deleteAutomation`, `stopAutomation`, `listAutomationRuns`, `getAutomationRun`
- **Events** — `createEvent`, `sendEvent`, `listEvents`, `getEvent`, `updateEvent`, `deleteEvent`
- **Logs** — `listLogs`, `getLog`

## License

MIT
