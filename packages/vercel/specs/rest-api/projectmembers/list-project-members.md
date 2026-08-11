---
title: list-project-members
product: vercel
url: /docs/rest-api/projectmembers/list-project-members
canonical_url: "https://vercel.com/docs/rest-api/projectmembers/list-project-members"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-project-members on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List project members

```http
GET /v1/projects/{idOrName}/members
```

Lists all members of a project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The ID or name of the Project. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | integer. min: 1; max: 100 | No | Limit how many project members should be returned |
| `since` | integer | No | Timestamp in milliseconds to only include members added since then. |
| `until` | integer | No | Timestamp in milliseconds to only include members added until then. |
| `search` | string | No | Search project members by their name, username, and email. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Paginated list of members for the project.

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object"
    },
    {
      "type": "object",
      "description": "Paginated list of members for the project.",
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
              "computedProjectRole",
              "createdAt",
              "email",
              "role",
              "teamRole",
              "uid",
              "username"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "required": [
            "count",
            "hasNext",
            "next",
            "prev"
          ],
          "properties": {
            "hasNext": {
              "type": "boolean",
              "enum": [
                false,
                true
              ]
            },
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

### 410: No description

---

## Related

- [projectMembers endpoints](/docs/rest-api#projectmembers)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
