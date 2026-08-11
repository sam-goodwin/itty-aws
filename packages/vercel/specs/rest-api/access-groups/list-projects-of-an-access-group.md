---
title: list-projects-of-an-access-group
product: vercel
url: /docs/rest-api/access-groups/list-projects-of-an-access-group
canonical_url: "https://vercel.com/docs/rest-api/access-groups/list-projects-of-an-access-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-projects-of-an-access-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List projects of an access group

```http
GET /v1/access-groups/{idOrName}/projects
```

List projects of an access group

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The ID or name of the Access Group. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | integer. min: 1; max: 100 | No | Limit how many access group projects should be returned. |
| `next` | string | No | Continuation cursor to retrieve the next page of results. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "pagination",
    "projects"
  ],
  "properties": {
    "projects": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "project",
          "projectId",
          "role",
          "updatedAt"
        ],
        "properties": {
          "projectId": {
            "type": "string"
          },
          "role": {
            "type": "string",
            "enum": [
              "ADMIN",
              "PROJECT_DEVELOPER",
              "PROJECT_GUEST",
              "PROJECT_VIEWER"
            ]
          },
          "createdAt": {
            "type": "string"
          },
          "updatedAt": {
            "type": "string"
          },
          "project": {
            "type": "object"
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "count",
        "next"
      ],
      "properties": {
        "count": {
          "type": "number"
        },
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

- [access-groups endpoints](/docs/rest-api#access-groups)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
