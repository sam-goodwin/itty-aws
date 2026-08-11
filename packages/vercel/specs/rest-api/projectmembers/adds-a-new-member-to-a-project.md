---
title: adds-a-new-member-to-a-project
product: vercel
url: /docs/rest-api/projectmembers/adds-a-new-member-to-a-project
canonical_url: "https://vercel.com/docs/rest-api/projectmembers/adds-a-new-member-to-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about adds-a-new-member-to-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Adds a new member to a project.

```http
POST /v1/projects/{idOrName}/members
```

Adds a new member to the project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The ID or name of the Project. |


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
    "role"
  ],
  "properties": {
    "uid": {
      "type": "string",
      "description": "The ID of the team member that should be added to this project.",
      "maxLength": 256
    },
    "username": {
      "type": "string",
      "description": "The username of the team member that should be added to this project.",
      "maxLength": 256
    },
    "email": {
      "type": "string",
      "description": "The email of the team member that should be added to this project.",
      "format": "email"
    },
    "role": {
      "type": "string",
      "description": "The project role of the member that will be added.",
      "enum": [
        "ADMIN",
        "PROJECT_VIEWER",
        "PROJECT_DEVELOPER"
      ]
    }
  },
  "oneOf": [
    {
      "required": [
        "uid"
      ]
    },
    {
      "required": [
        "username"
      ]
    },
    {
      "required": [
        "email"
      ]
    }
  ]
}
```

## Responses

### 200: Responds with the project ID on success.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Responds with the project ID on success.",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [projectMembers endpoints](/docs/rest-api#projectmembers)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
