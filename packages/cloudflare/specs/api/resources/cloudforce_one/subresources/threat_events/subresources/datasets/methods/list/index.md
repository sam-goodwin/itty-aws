## Lists all datasets in an account

**get** `/accounts/{account_id}/cloudforce-one/events/dataset`

Lists all datasets in an account

### Path Parameters

- `account_id: string`

  Account ID.

### Returns

- `isPublic: boolean`

- `name: string`

- `uuid: string`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/cloudforce-one/events/dataset \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
[
  {
    "isPublic": true,
    "name": "friendly dataset name",
    "uuid": "12345678-1234-1234-1234-1234567890ab"
  }
]
```
