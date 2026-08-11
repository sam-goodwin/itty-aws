---
title: list-all-teams
product: vercel
url: /docs/rest-api/teams/list-all-teams
canonical_url: "https://vercel.com/docs/rest-api/teams/list-all-teams"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-all-teams on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List all teams

```http
GET /v2/teams
```

Get a paginated list of all the Teams the authenticated User is a member of.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | number | No | Maximum number of Teams which may be returned. |
| `since` | number | No | Timestamp (in milliseconds) to only include Teams created since then. |
| `until` | number | No | Timestamp (in milliseconds) to only include Teams created until then. |


## Responses

### 200: A paginated list of teams.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "A paginated list of teams.",
  "required": [
    "pagination",
    "teams"
  ],
  "properties": {
    "teams": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "description": "Data representing a Team.",
            "required": [
              "avatar",
              "billing",
              "createdAt",
              "creatorId",
              "description",
              "id",
              "name",
              "slug",
              "stagingPrefix",
              "updatedAt"
            ]
          },
          {
            "type": "object",
            "description": "A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data.",
            "required": [
              "avatar",
              "createdAt",
              "id",
              "limited",
              "limitedBy",
              "name",
              "slug"
            ]
          }
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
```

### 400: One of the provided values in the request query is invalid.

### 401: No description

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
