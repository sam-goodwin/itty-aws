---
title: list-members-of-an-access-group
product: vercel
url: /docs/rest-api/access-groups/list-members-of-an-access-group
canonical_url: "https://vercel.com/docs/rest-api/access-groups/list-members-of-an-access-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-members-of-an-access-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List members of an access group

```http
GET /v1/access-groups/{idOrName}/members
```

List members of an access group

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The ID or name of the Access Group. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | integer. min: 1; max: 100 | No | Limit how many access group members should be returned. |
| `next` | string | No | Continuation cursor to retrieve the next page of results. |
| `search` | string | No | Search project members by their name, username, and email. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "members",
    "pagination"
  ],
  "properties": {
    "members": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "email",
          "teamRole",
          "uid",
          "username"
        ],
        "properties": {
          "avatar": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "createdAt": {
            "type": "string"
          },
          "teamRole": {
            "type": "string",
            "enum": [
              "BILLING",
              "CONTRIBUTOR",
              "DEVELOPER",
              "MEMBER",
              "OWNER",
              "SECURITY",
              "VIEWER",
              "VIEWER_FOR_PLUS"
            ]
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
