---
title: gets-a-list-of-aliases-with-status-for-the-current-promote
product: vercel
url: /docs/rest-api/projects/gets-a-list-of-aliases-with-status-for-the-current-promote
canonical_url: "https://vercel.com/docs/rest-api/projects/gets-a-list-of-aliases-with-status-for-the-current-promote"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about gets-a-list-of-aliases-with-status-for-the-current-promote on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Gets a list of aliases with status for the current promote

```http
GET /v1/projects/{projectId}/promote/aliases
```

Get a list of aliases related to the last promote request with their mapping status

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | number. max: 100 | No | Maximum number of aliases to list from a request (max 100). |
| `since` | number | No | Get aliases created after this epoch timestamp. |
| `until` | number | No | Get aliases created before this epoch timestamp. |
| `failedOnly` | boolean | No | Filter results down to aliases that failed to map to the requested deployment |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object"
    },
    {
      "type": "object",
      "required": [
        "aliases",
        "pagination"
      ],
      "properties": {
        "aliases": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "alias",
              "id",
              "status"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
          "required": [
            "count",
            "next",
            "prev"
          ],
          "properties": {
            "count": {
              "type": "number",
              "description": "Amount of items in the current page."
            },
            "next": {
              "type": "number",
              "description": "Timestamp that must be used to request the next page.",
              "nullable": true
            },
            "prev": {
              "type": "number",
              "description": "Timestamp that must be used to request the previous page.",
              "nullable": true
            }
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
