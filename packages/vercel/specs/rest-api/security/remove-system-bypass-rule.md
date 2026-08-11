---
title: remove-system-bypass-rule
product: vercel
url: /docs/rest-api/security/remove-system-bypass-rule
canonical_url: "https://vercel.com/docs/rest-api/security/remove-system-bypass-rule"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about remove-system-bypass-rule on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Remove System Bypass Rule

```http
DELETE /v1/security/firewall/bypass
```

Remove system bypass rules

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "pattern": "([a-z]+[a-z.]+)$",
      "maxLength": 2544
    },
    "projectScope": {
      "type": "boolean"
    },
    "sourceIp": {
      "type": "string"
    },
    "allSources": {
      "type": "boolean"
    },
    "note": {
      "type": "string",
      "maxLength": 500
    }
  },
  "oneOf": [
    {
      "required": [
        "domain"
      ]
    },
    {
      "required": [
        "projectScope"
      ]
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
    "ok"
  ],
  "properties": {
    "ok": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
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

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
