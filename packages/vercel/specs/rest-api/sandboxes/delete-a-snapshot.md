---
title: delete-a-snapshot
product: vercel
url: /docs/rest-api/sandboxes/delete-a-snapshot
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/delete-a-snapshot"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-snapshot on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a snapshot

```http
DELETE /v2/sandboxes/snapshots/{snapshotId}
```

Permanently deletes a snapshot and frees its associated storage. This action cannot be undone. After deletion, the snapshot can no longer be used to create new sessions.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `snapshotId` | string | Yes | The unique identifier of the snapshot to delete. |


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
    "snapshot"
  ],
  "properties": {
    "snapshot": {
      "type": "object",
      "description": "This object contains information related to a Snapshot of a Vercel Sandbox session (v2 API).",
      "required": [
        "createdAt",
        "id",
        "lastUsedAt",
        "sizeBytes",
        "sourceSessionId",
        "status",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The unique identifier of the snapshot."
        },
        "sourceSessionId": {
          "type": "string",
          "description": "The unique identifier of the session from which the snapshot was created."
        },
        "region": {
          "type": "string",
          "description": "The region where the snapshot is stored."
        },
        "status": {
          "type": "string",
          "description": "The status of the snapshot.",
          "enum": [
            "created",
            "deleted",
            "failed"
          ]
        },
        "sizeBytes": {
          "type": "number",
          "description": "The size of the snapshot in bytes."
        },
        "expiresAt": {
          "type": "number",
          "description": "The time when the snapshot will expire, in milliseconds since the epoch. If not set, the snapshot does not have any expiration."
        },
        "createdAt": {
          "type": "number",
          "description": "The time when the snapshot was created, in milliseconds since the epoch."
        },
        "updatedAt": {
          "type": "number",
          "description": "The last time the snapshot was updated, in milliseconds since the epoch."
        },
        "lastUsedAt": {
          "type": "number",
          "description": "The last time the snapshot was used (e.g. to resume or create a sandbox), in milliseconds since the epoch. Falls back to `createdAt` for older snapshots that predate this field."
        },
        "creationMethod": {
          "type": "string",
          "description": "The method used to create the snapshot.",
          "enum": [
            "automatic",
            "manual"
          ]
        },
        "parentId": {
          "type": "string",
          "description": "The unique identifier of the parent snapshot, if this snapshot was created from another snapshot."
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

### 429: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
