---
title: delete-a-drive
product: vercel
url: /docs/rest-api/sandboxes/delete-a-drive
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/delete-a-drive"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-drive on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a drive

```http
DELETE /v2/sandboxes/drives/{name}
```

Deletes a drive by project and name. Attached drives cannot be deleted. Stop or replace the session currently using the drive before retrying deletion. Drives are in private beta. Register your interest to get access: https://vercel.com/changelog/drives-for-vercel-sandbox-in-private-beta

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `name` | string. maxLength: 64; pattern: `^[a-zA-Z0-9_-]+$` | Yes | Name for the drive. Must be unique per project and URL-safe (alphanumeric, hyphens, underscores). |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | No | The project ID or name associated with the drive. Required unless using a Vercel OIDC token scoped to a project. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "drive"
  ],
  "properties": {
    "drive": {
      "type": "object",
      "description": "This object contains information related to a Vercel Sandbox Drive.",
      "required": [
        "createdAt",
        "maxSizeBytes",
        "name",
        "projectId",
        "region",
        "updatedAt"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The unique drive name within the project."
        },
        "projectId": {
          "type": "string",
          "description": "The project that owns the drive."
        },
        "maxSizeBytes": {
          "type": "number",
          "description": "The maximum drive size in bytes."
        },
        "region": {
          "type": "string",
          "description": "The region where the drive is stored."
        },
        "currentSessionId": {
          "type": "string",
          "description": "Current session ID the drive is attached to, if any."
        },
        "currentSandboxName": {
          "type": "string",
          "description": "Current sandbox name the drive is attached to, if any."
        },
        "createdAt": {
          "type": "number",
          "description": "The time when the drive was created, in milliseconds since the epoch."
        },
        "updatedAt": {
          "type": "number",
          "description": "The last time the drive was updated, in milliseconds since the epoch."
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

### 409: No description

### 410: No description

### 429: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
