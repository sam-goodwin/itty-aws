---
title: delete-an-authentication-token
product: vercel
url: /docs/rest-api/authentication/delete-an-authentication-token
canonical_url: "https://vercel.com/docs/rest-api/authentication/delete-an-authentication-token"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-authentication-token on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an authentication token

```http
DELETE /v3/user/tokens/{tokenId}
```

Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `tokenId` | string | Yes | The identifier of the token to invalidate. The special value "current" may be supplied, which invalidates the token that the HTTP request was authenticated with. |


## Responses

### 200: Authentication token successfully deleted.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Authentication token successfully deleted.",
  "required": [
    "tokenId"
  ],
  "properties": {
    "tokenId": {
      "type": "string",
      "description": "The unique identifier of the token that was deleted."
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: No description

### 403: You do not have permission to access this resource.

### 404: Token not found with the requested `tokenId`.

### 410: No description

---

## Related

- [authentication endpoints](/docs/rest-api#authentication)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
