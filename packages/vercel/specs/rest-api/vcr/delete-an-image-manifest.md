---
title: delete-an-image-manifest
product: vercel
url: /docs/rest-api/vcr/delete-an-image-manifest
canonical_url: "https://vercel.com/docs/rest-api/vcr/delete-an-image-manifest"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-image-manifest on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an image manifest

```http
DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}
```

DELETE /v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference Reference must be a digest.

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository team slug component. |
| `projectSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository project slug component. |
| `repositoryName` | string. maxLength: 255; pattern: `^[a-z0-9]+(?:(?:\\.|_|__|-+)[a-z0-9]+)*$` | Yes | Single Docker repository name component. |
| `reference` | string. maxLength: 255; pattern: `^[A-Za-z0-9_+.-]+:[A-Fa-f0-9]+$` | Yes | Content-addressable digest (algorithm:hex). |


## Responses

### 202: No description

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
