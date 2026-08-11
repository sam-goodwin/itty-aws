---
title: restore-global-config-backup
product: vercel
url: /docs/rest-api/global-config/restore-global-config-backup
canonical_url: "https://vercel.com/docs/rest-api/global-config/restore-global-config-backup"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about restore-global-config-backup on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Restore Global Config backup

```http
POST /v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}/restore
```

Restores a Global Config backup.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string. pattern: `^ecfg_` | Yes |  |
| `edgeConfigBackupVersionId` | string | Yes |  |


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
  "type": "object",
  "required": [
    "digest",
    "previousDigest",
    "restoredFrom",
    "status"
  ],
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "ok"
      ]
    },
    "restoredFrom": {
      "type": "string"
    },
    "previousDigest": {
      "type": "string"
    },
    "digest": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 412: No description

---

## Related

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
