---
title: read-firewall-actions-by-project
product: vercel
url: /docs/rest-api/security/read-firewall-actions-by-project
canonical_url: "https://vercel.com/docs/rest-api/security/read-firewall-actions-by-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about read-firewall-actions-by-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Read Firewall Actions by Project

```http
GET /v1/security/firewall/events
```

Retrieve firewall actions for a project

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `startTimestamp` | number | No |  |
| `endTimestamp` | number | No |  |
| `hosts` | string | No |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "actions"
  ],
  "properties": {
    "actions": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "action_type",
          "count",
          "endTime",
          "host",
          "isActive",
          "public_ip",
          "startTime"
        ],
        "properties": {
          "startTime": {
            "type": "string"
          },
          "endTime": {
            "type": "string"
          },
          "isActive": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "action_type": {
            "type": "string"
          },
          "host": {
            "type": "string"
          },
          "public_ip": {
            "type": "string"
          },
          "count": {
            "type": "number"
          }
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

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
