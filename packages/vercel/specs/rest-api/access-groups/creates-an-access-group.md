---
title: creates-an-access-group
product: vercel
url: /docs/rest-api/access-groups/creates-an-access-group
canonical_url: "https://vercel.com/docs/rest-api/access-groups/creates-an-access-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about creates-an-access-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Creates an access group

```http
POST /v1/access-groups
```

Allows to create an access group

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the access group",
      "pattern": "^[A-z0-9_ -]+$",
      "maxLength": 50
    },
    "projects": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "role",
          "projectId"
        ],
        "properties": {
          "projectId": {
            "type": "string",
            "description": "The ID of the project.",
            "maxLength": 256
          },
          "role": {
            "type": "string",
            "description": "The project role that will be added to this Access Group. \"null\" will remove this project level role.",
            "enum": [
              "ADMIN",
              "PROJECT_VIEWER",
              "PROJECT_DEVELOPER",
              null
            ],
            "nullable": true
          }
        }
      }
    },
    "membersToAdd": {
      "type": "array",
      "description": "List of members to add to the access group.",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "accessGroupId",
    "createdAt",
    "entitlements",
    "membersCount",
    "name",
    "projectsCount",
    "teamId",
    "updatedAt"
  ],
  "properties": {
    "entitlements": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "v0"
        ]
      }
    },
    "membersCount": {
      "type": "number"
    },
    "projectsCount": {
      "type": "number"
    },
    "name": {
      "type": "string",
      "description": "The name of this access group."
    },
    "createdAt": {
      "type": "string",
      "description": "Timestamp in milliseconds when the access group was created."
    },
    "teamId": {
      "type": "string",
      "description": "ID of the team that this access group belongs to."
    },
    "updatedAt": {
      "type": "string",
      "description": "Timestamp in milliseconds when the access group was last updated."
    },
    "accessGroupId": {
      "type": "string",
      "description": "ID of the access group."
    },
    "teamRoles": {
      "type": "array",
      "description": "Roles that the team has in the access group.",
      "items": {
        "type": "string"
      }
    },
    "teamPermissions": {
      "type": "array",
      "description": "Permissions that the team has in the access group.",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

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
