---
title: list-all-flags-for-a-team-1
product: vercel
url: /docs/rest-api/feature-flags/list-all-flags-for-a-team-1
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/list-all-flags-for-a-team-1"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-all-flags-for-a-team-1 on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List all flags for a team

```http
GET /v1/teams/{teamId}/feature-flags/flags
```

Retrieve all feature flags for a team across all projects. The list can be filtered by state and supports pagination.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `state` | string. enum: active, archived | No | The state of the flags to retrieve. Defaults to `active`. |
| `withMetadata` | boolean | No | Deprecated. Whether to include creator metadata in each flag in the response. Resolve creator identity client-side (e.g. via the team members endpoint) instead; this parameter will be removed in a future release. |
| `limit` | integer. min: 1; max: 100; default: 20 | No | Maximum number of flags to return. |
| `cursor` | string | No | Pagination cursor to continue from. |
| `search` | string. maxLength: 256 | No | Search flags by their slug or description. Case-insensitive. |
| `kind` | string. enum: boolean, string, number, json | No | The kind of flags to retrieve. |
| `tags` | array | No | Filter flags by tag. Repeat the parameter for multiple tags (all must match). |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "data",
    "pagination"
  ],
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "createdBy",
          "environments",
          "id",
          "kind",
          "ownerId",
          "projectId",
          "revision",
          "seed",
          "slug",
          "state",
          "typeName",
          "updatedAt",
          "variants"
        ],
        "properties": {
          "description": {
            "type": "string"
          },
          "maintainerIds": {
            "type": "array"
          },
          "permanent": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "tags": {
            "type": "array"
          },
          "experiment": {
            "type": "object",
            "required": [
              "allocationUnit",
              "primaryMetrics",
              "status"
            ]
          },
          "updatedBy": {
            "type": "string"
          },
          "variants": {
            "type": "array"
          },
          "id": {
            "type": "string"
          },
          "environments": {
            "type": "object"
          },
          "kind": {
            "type": "string",
            "enum": [
              "boolean",
              "json",
              "number",
              "string"
            ]
          },
          "revision": {
            "type": "number"
          },
          "seed": {
            "type": "number"
          },
          "state": {
            "type": "string",
            "enum": [
              "active",
              "archived"
            ]
          },
          "slug": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "updatedAt": {
            "type": "number"
          },
          "createdBy": {
            "type": "string"
          },
          "ownerId": {
            "type": "string"
          },
          "projectId": {
            "type": "string"
          },
          "typeName": {
            "type": "string",
            "enum": [
              "flag"
            ]
          },
          "metadata": {
            "type": "object"
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "next"
      ],
      "properties": {
        "next": {
          "type": "string",
          "nullable": true
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
