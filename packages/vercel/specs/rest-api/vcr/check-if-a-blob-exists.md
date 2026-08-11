---
title: check-if-a-blob-exists
product: vercel
url: /docs/rest-api/vcr/check-if-a-blob-exists
canonical_url: "https://vercel.com/docs/rest-api/vcr/check-if-a-blob-exists"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about check-if-a-blob-exists on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Check if a blob exists

```http
HEAD /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}
```

HEAD /v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest Check whether a blob exists. Used by the Docker client before pushing a layer to avoid re-uploading content that already exists.

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository team slug component. |
| `projectSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository project slug component. |
| `repositoryName` | string. maxLength: 255; pattern: `^[a-z0-9]+(?:(?:\\.|_|__|-+)[a-z0-9]+)*$` | Yes | Single Docker repository name component. |
| `digest` | string. maxLength: 255; pattern: `^[A-Za-z0-9_+.-]+:[A-Fa-f0-9]+$` | Yes | Content-addressable digest (algorithm:hex). |


## Responses

### 200: No description

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
