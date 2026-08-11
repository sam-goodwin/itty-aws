---
title: update-attack-challenge-mode
product: vercel
url: /docs/rest-api/security/update-attack-challenge-mode
canonical_url: "https://vercel.com/docs/rest-api/security/update-attack-challenge-mode"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-attack-challenge-mode on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Attack Challenge mode

```http
POST /v1/security/attack-mode
```

Update the setting for determining if the project has Attack Challenge mode enabled.

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
  "oneOf": [
    {
      "required": [
        "projectId",
        "attackModeEnabled",
        "attackModeActiveUntil"
      ],
      "properties": {
        "projectId": {
          "type": "string"
        },
        "attackModeEnabled": {
          "type": "boolean"
        },
        "attackModeActiveUntil": {
          "type": "number"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "projectId",
        "attackModeEnabled"
      ],
      "properties": {
        "projectId": {
          "type": "string"
        },
        "attackModeEnabled": {
          "type": "boolean"
        }
      }
    }
  ]
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "attackModeEnabled",
    "attackModeUpdatedAt"
  ],
  "properties": {
    "attackModeEnabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "attackModeUpdatedAt": {
      "type": "number"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
