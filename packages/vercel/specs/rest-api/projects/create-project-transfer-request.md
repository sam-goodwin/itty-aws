---
title: create-project-transfer-request
product: vercel
url: /docs/rest-api/projects/create-project-transfer-request
canonical_url: "https://vercel.com/docs/rest-api/projects/create-project-transfer-request"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-project-transfer-request on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create project transfer request

```http
POST /projects/{idOrName}/transfer-request
```

Initiates a project transfer request from one team to another. <br/> Returns a `code` that remains valid for 24 hours and can be used to accept the transfer request by another team using the `PUT /projects/transfer-request/:code` endpoint. <br/> Users can also accept the project transfer request using the claim URL: `https://vercel.com/claim-deployment?code=<code>&returnUrl=<returnUrl>`. <br/> The `code` parameter specifies the project transfer request code generated using this endpoint. <br/> The `returnUrl` parameter redirects users to a specific page of the application if the claim URL is invalid or expired.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The ID or name of the project to transfer. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "callbackUrl": {
      "type": "string",
      "description": "The URL to send a webhook to when the transfer is accepted."
    },
    "callbackSecret": {
      "type": "string",
      "description": "The secret to use to sign the webhook payload with HMAC-SHA256."
    }
  }
}
```

## Responses

### 200: The project transfer request has been initiated successfully.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "code"
  ],
  "properties": {
    "code": {
      "type": "string",
      "description": "Code that can be used to accept the project transfer request."
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
