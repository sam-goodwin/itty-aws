# @distilled.cloud/typesense

Effect-native Typesense SDK generated from the [Typesense OpenAPI specification](https://github.com/typesense/typesense-api-spec). Manage collections, documents, search, synonyms, curation, analytics, API keys, and cluster operations with exhaustive error typing.

## Installation

```bash
npm install @distilled.cloud/typesense effect
```

## Quick Start

```typescript
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { getCollections } from "@distilled.cloud/typesense/Operations";
import { CredentialsFromEnv } from "@distilled.cloud/typesense";

const program = Effect.gen(function* () {
  const collections = yield* getCollections({});
  return collections;
});

const TypesenseLive = Layer.mergeAll(FetchHttpClient.layer, CredentialsFromEnv);

program.pipe(Effect.provide(TypesenseLive), Effect.runPromise);
```

## Configuration

Set the following environment variables:

```bash
TYPESENSE_API_KEY=your-api-key
TYPESENSE_API_URL=http://localhost:8108
```

`TYPESENSE_API_URL` should point to your Typesense server (e.g. `http://localhost:8108` for self-hosted, or your per-cluster URL for [Typesense Cloud](https://cloud.typesense.org)). Authentication uses the `X-TYPESENSE-API-KEY` header.

## Error Handling

```typescript
import { Effect } from "effect";
import { getCollection } from "@distilled.cloud/typesense/Operations";
import { UnknownTypesenseError } from "@distilled.cloud/typesense/Errors";

getCollection({ collectionName: "missing" }).pipe(
  Effect.catchTags({
    NotFound: () => Effect.succeed(null),
    UnknownTypesenseError: (e) =>
      Effect.fail(new Error(`Unknown: ${e.message}`)),
  }),
);
```

## Services

- **Collections** — `getCollections`, `createCollection`, `getCollection`, `updateCollection`, `deleteCollection`
- **Documents** — `indexDocument`, `getDocument`, `updateDocument`, `deleteDocument`, `updateDocuments`, `deleteDocuments`, `importDocuments`, `exportDocuments`
- **Search** — `searchCollection`, `multiSearch`
- **Aliases** — `getAliases`, `getAlias`, `upsertAlias`, `deleteAlias`
- **Synonyms** — `retrieveSynonymSets`, `upsertSynonymSet`, `retrieveSynonymSet`, `deleteSynonymSet`, plus per-item operations
- **Curation Sets** — `retrieveCurationSets`, `upsertCurationSet`, `retrieveCurationSet`, `deleteCurationSet`, plus per-item operations
- **Presets** — `retrieveAllPresets`, `upsertPreset`, `retrievePreset`, `deletePreset`
- **Stopwords** — `retrieveStopwordsSets`, `upsertStopwordsSet`, `retrieveStopwordsSet`, `deleteStopwordsSet`
- **Stemming** — `listStemmingDictionaries`, `getStemmingDictionary`, `importStemmingDictionary`
- **Analytics** — `retrieveAnalyticsRules`, `upsertAnalyticsRule`, `retrieveAnalyticsRule`, `deleteAnalyticsRule`, `createAnalyticsEvent`, `getAnalyticsEvents`, `getAnalyticsStatus`, `flushAnalytics`
- **API Keys** — `getKeys`, `createKey`, `getKey`, `deleteKey`
- **NL Search Models** — `retrieveAllNLSearchModels`, `createNLSearchModel`, `retrieveNLSearchModel`, `updateNLSearchModel`, `deleteNLSearchModel`
- **Conversation Models** — `retrieveAllConversationModels`, `createConversationModel`, `retrieveConversationModel`, `updateConversationModel`, `deleteConversationModel`
- **Cluster Operations** — `health`, `retrieveMetrics`, `retrieveAPIStats`, `clearCache`, `compactDb`, `takeSnapshot`, `toggleSlowRequestLog`, `getSchemaChanges`, `vote`, `debug`

## License

MIT
