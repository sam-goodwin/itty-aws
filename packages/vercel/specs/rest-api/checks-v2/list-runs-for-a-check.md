---
title: list-runs-for-a-check
product: vercel
url: /docs/rest-api/checks-v2/list-runs-for-a-check
canonical_url: "https://vercel.com/docs/rest-api/checks-v2/list-runs-for-a-check"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-runs-for-a-check on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List runs for a check

```http
GET /v2/projects/{projectIdOrName}/checks/{checkId}/runs
```

List all runs associated with a given check.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes |  |
| `checkId` | string | Yes | The ID of the resource that will be updated. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "runs"
  ],
  "properties": {
    "runs": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "description": "Check run backed by a project-level `check` definition.",
            "required": [
              "checkId",
              "createdAt",
              "deploymentId",
              "id",
              "name",
              "ownerId",
              "source",
              "status",
              "timeout",
              "updatedAt"
            ]
          },
          {
            "type": "object",
            "description": "Vercel CI check run without a parent `check` (no `checkId` field).",
            "required": [
              "createdAt",
              "deploymentId",
              "id",
              "name",
              "ownerId",
              "source",
              "status",
              "timeout",
              "updatedAt"
            ]
          }
        ]
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [checks-v2 endpoints](/docs/rest-api#checks-v2)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
