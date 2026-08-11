---
title: update-a-microfrontends-group
product: vercel
url: /docs/rest-api/teams/update-a-microfrontends-group
canonical_url: "https://vercel.com/docs/rest-api/teams/update-a-microfrontends-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-a-microfrontends-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update a microfrontends group

```http
PATCH /v1/teams/{teamId}/microfrontends/{groupId}
```

Updates the name (and slug) of a microfrontends group.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `groupId` | string | Yes |  |
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The new name for the existing microfrontends group."
    },
    "fallbackEnvironment": {
      "type": "string",
      "description": "The new fallback environment for the microfrontends group. Must be \"SAME_ENV\", \"PRODUCTION\", or a valid custom environment slug from the default app."
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
    "updatedMicrofrontendsGroup"
  ],
  "properties": {
    "updatedMicrofrontendsGroup": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "fallbackEnvironment": {
          "type": "string"
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
