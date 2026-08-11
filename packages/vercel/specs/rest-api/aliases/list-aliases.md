---
title: list-aliases
product: vercel
url: /docs/rest-api/aliases/list-aliases
canonical_url: "https://vercel.com/docs/rest-api/aliases/list-aliases"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-aliases on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List aliases

```http
GET /v4/aliases
```

Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | object | No | Get only aliases of the given domain name |
| `from` | number | No | Get only aliases created after the provided timestamp |
| `limit` | number | No | Maximum number of aliases to list from a request |
| `projectId` | string | No | Filter aliases from the given `projectId` |
| `since` | number | No | Get aliases created after this JavaScript timestamp |
| `until` | number | No | Get aliases created before this JavaScript timestamp |
| `rollbackDeploymentId` | string | No | Get aliases that would be rolled back for the given deployment |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The paginated list of aliases

Content-Type: `application/json`

```json
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
          "created",
          "deploymentId",
          "projectId",
          "uid"
        ],
        "properties": {
          "alias": {
            "type": "string",
            "description": "The alias name, it could be a `.vercel.app` subdomain or a custom domain"
          },
          "created": {
            "type": "string",
            "description": "The date when the alias was created",
            "format": "date-time"
          },
          "createdAt": {
            "type": "number",
            "description": "The date when the alias was created in milliseconds since the UNIX epoch"
          },
          "creator": {
            "type": "object",
            "description": "Information of the user who created the alias",
            "required": [
              "email",
              "uid",
              "username"
            ]
          },
          "deletedAt": {
            "type": "number",
            "description": "The date when the alias was deleted in milliseconds since the UNIX epoch",
            "nullable": true
          },
          "deployment": {
            "type": "object",
            "description": "A map with the deployment ID, URL and metadata",
            "required": [
              "id",
              "url"
            ]
          },
          "deploymentId": {
            "type": "string",
            "description": "The deployment ID",
            "nullable": true
          },
          "projectId": {
            "type": "string",
            "description": "The unique identifier of the project",
            "nullable": true
          },
          "redirect": {
            "type": "string",
            "description": "Target destination domain for redirect when the alias is a redirect",
            "nullable": true
          },
          "redirectStatusCode": {
            "type": "number",
            "description": "Status code to be used on redirect",
            "enum": [
              301,
              302,
              307,
              308,
              null
            ],
            "nullable": true
          },
          "uid": {
            "type": "string",
            "description": "The unique identifier of the alias"
          },
          "updatedAt": {
            "type": "number",
            "description": "The date when the alias was updated in milliseconds since the UNIX epoch"
          },
          "protectionBypass": {
            "type": "object",
            "description": "The protection bypass for the alias"
          },
          "microfrontends": {
            "type": "object",
            "description": "The microfrontends for the alias including the routing configuration",
            "required": [
              "applications",
              "defaultApp"
            ]
          }
        }
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

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [aliases endpoints](/docs/rest-api#aliases)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
