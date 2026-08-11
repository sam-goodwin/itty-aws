---
title: get-blob-upload-status
product: vercel
url: /docs/rest-api/vcr/get-blob-upload-status
canonical_url: "https://vercel.com/docs/rest-api/vcr/get-blob-upload-status"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-blob-upload-status on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get blob upload status

```http
GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}
```

GET /v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid Query the status of an in-progress blob upload. Used by clients to resume a partial upload after an interruption.

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository team slug component. |
| `projectSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository project slug component. |
| `repositoryName` | string. maxLength: 255; pattern: `^[a-z0-9]+(?:(?:\\.|_|__|-+)[a-z0-9]+)*$` | Yes | Single Docker repository name component. |
| `uuid` | string. maxLength: 40; pattern: `^[a-f0-9]{40}$` | Yes | Blob upload session identifier. |


## Responses

### 204: No description

Content-Type: `application/json`

```json
{
  "nullable": true
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [vcr endpoints](/docs/rest-api#vcr)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
