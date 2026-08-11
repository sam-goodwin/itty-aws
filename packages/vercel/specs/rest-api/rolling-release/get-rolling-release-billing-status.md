---
title: get-rolling-release-billing-status
product: vercel
url: /docs/rest-api/rolling-release/get-rolling-release-billing-status
canonical_url: "https://vercel.com/docs/rest-api/rolling-release/get-rolling-release-billing-status"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-rolling-release-billing-status on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get rolling release billing status

```http
GET /v1/projects/{idOrName}/rolling-release/billing
```

Get the Rolling Releases billing status for a project. The team level billing status is used to determine if the project can be configured for rolling releases.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | Project ID or project name (URL-encoded) |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "availableSlots",
        "message",
        "reason"
      ],
      "properties": {
        "availableSlots": {
          "type": "number",
          "enum": [
            0
          ]
        },
        "reason": {
          "type": "string",
          "enum": [
            "plan_not_supported"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "availableSlots",
        "message",
        "reason"
      ],
      "properties": {
        "availableSlots": {
          "type": "string",
          "enum": [
            "unlimited"
          ]
        },
        "reason": {
          "type": "string",
          "enum": [
            "unlimited_slots"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "required": [
        "availableSlots",
        "enabledProjects",
        "message",
        "reason"
      ],
      "properties": {
        "availableSlots": {
          "type": "number",
          "enum": [
            0
          ]
        },
        "reason": {
          "type": "string",
          "enum": [
            "no_available_slots"
          ]
        },
        "message": {
          "type": "string"
        },
        "enabledProjects": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "availableSlots",
        "message",
        "reason"
      ],
      "properties": {
        "availableSlots": {
          "type": "number"
        },
        "reason": {
          "type": "string",
          "enum": [
            "available_slots"
          ]
        },
        "message": {
          "type": "string"
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [rolling-release endpoints](/docs/rest-api#rolling-release)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
