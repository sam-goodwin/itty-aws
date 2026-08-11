---
title: list-team-project-flag-settings
product: vercel
url: /docs/rest-api/feature-flags/list-team-project-flag-settings
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/list-team-project-flag-settings"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-team-project-flag-settings on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List team project flag settings

```http
GET /v1/teams/{teamId}/feature-flags/settings
```

Retrieve feature flag settings for projects in a team.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | integer. min: 1; max: 100; default: 20 | No | Maximum number of settings to return. |
| `cursor` | string | No | Pagination cursor to continue from. |
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
        "data",
        "pagination"
      ],
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "enabled",
              "entities",
              "environments",
              "metadata",
              "projectId",
              "typeName"
            ]
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
  ]
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
