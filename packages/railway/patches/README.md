# Railway Error Patches

Railway's GraphQL schema does not declare errors. Typed errors are discovered
by live testing and recorded here, one patch file per operation:
`patches/{operationName}.json` (the operation's generated function name, e.g.
`deleteProject.json` — note operations are renamed verb-first, see
`scripts/generate.ts`).

## Workflow

1. Run the failing test with `DEBUG=1` to inspect the raw GraphQL error
   (an `UnknownRailwayError` carries the raw envelope in `body`).
2. Add (or extend) `patches/{operationName}.json` with a matcher for the
   observed error.
3. Regenerate: `bun run generate`.
4. Import the new typed error from `@distilled.cloud/railway` and assert on it
   in the test.

## Format

```json
{
  "errors": {
    "ProjectNotFound": {
      "category": "notFound",
      "description": "The referenced project does not exist.",
      "matchers": [
        { "message": { "includes": "Project not found" } }
      ]
    }
  }
}
```

- The key (`ProjectNotFound`) becomes a `Schema.TaggedErrorClass` exported
  from `src/operations/errors.ts` and is added to the operation's typed error
  channel (`errors: [...]` in `API.make`).
- The same error name may be reused across operations as long as the
  definition is identical — the class is emitted once and shared.

### `category`

Drives retry behavior and semantic grouping (see
`@distilled.cloud/core/category`). One of:

| Category | Meaning |
|---|---|
| `notFound` | Resource does not exist |
| `auth` | Missing/insufficient permissions |
| `badRequest` | Invalid input |
| `conflict` | State conflict |
| `alreadyExists` | Resource already exists (conflict subcategory) |
| `throttling` | Rate limited (retryable) |
| `server` | Transient backend failure (retryable) |

### `matchers`

A list of matchers tested against the observed error (OR semantics — any
matcher may match; the most specific match across all candidate errors wins).
Each matcher ANDs its fields:

- `code` — exact match against `errors[0].extensions.code`
- `message` — exact string, or `{ "includes": "substring" }`, against
  `errors[0].message`
- `status` — exact match against the HTTP status code
