---
title: get-a-list-of-webhooks
product: vercel
url: /docs/rest-api/webhooks/get-a-list-of-webhooks
canonical_url: "https://vercel.com/docs/rest-api/webhooks/get-a-list-of-webhooks"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-list-of-webhooks on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a list of webhooks

```http
GET /v1/webhooks
```

Get a list of webhooks

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string. pattern: `^[a-zA-z0-9_]+$` | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "events",
          "id",
          "ownerId",
          "projectsMetadata",
          "updatedAt",
          "url"
        ],
        "properties": {
          "projectsMetadata": {
            "type": "array",
            "nullable": true
          },
          "events": {
            "type": "array",
            "description": "The webhooks events"
          },
          "id": {
            "type": "string",
            "description": "The webhook id"
          },
          "url": {
            "type": "string",
            "description": "A string with the URL of the webhook"
          },
          "ownerId": {
            "type": "string",
            "description": "The unique ID of the team the webhook belongs to"
          },
          "createdAt": {
            "type": "number",
            "description": "A number containing the date when the webhook was created in in milliseconds"
          },
          "updatedAt": {
            "type": "number",
            "description": "A number containing the date when the webhook was updated in in milliseconds"
          },
          "projectIds": {
            "type": "array",
            "description": "The ID of the projects the webhook is associated with"
          }
        }
      }
    },
    {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "events",
          "id",
          "ownerId",
          "updatedAt",
          "url"
        ],
        "properties": {
          "events": {
            "type": "array",
            "description": "The webhooks events"
          },
          "id": {
            "type": "string",
            "description": "The webhook id"
          },
          "url": {
            "type": "string",
            "description": "A string with the URL of the webhook"
          },
          "ownerId": {
            "type": "string",
            "description": "The unique ID of the team the webhook belongs to"
          },
          "createdAt": {
            "type": "number",
            "description": "A number containing the date when the webhook was created in in milliseconds"
          },
          "updatedAt": {
            "type": "number",
            "description": "A number containing the date when the webhook was updated in in milliseconds"
          },
          "projectIds": {
            "type": "array",
            "description": "The ID of the projects the webhook is associated with"
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

- [webhooks endpoints](/docs/rest-api#webhooks)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
