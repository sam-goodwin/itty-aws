## Send an email

**post** `/accounts/{account_id}/email/sending/send`

Send an email

### Path Parameters

- `account_id: string`

  Identifier of the account.

### Body Parameters

- `from: string or object { address, name }`

  Sender email address. Either a plain string or an object with address and name.

  - `EmailSendingEmailAddressString = string`

    An email address as a plain string.

  - `EmailSendingEmailAddressObject object { address, name }`

    - `address: string`

      Email address (e.g., 'user@example.com').

    - `name: string`

      Display name for the email address (e.g., 'John Doe').

- `subject: string`

  Email subject line.

- `attachments: optional array of object { content, content_id, disposition, 2 more }  or object { content, disposition, filename, type }`

  File attachments and inline images.

  - `Inline object { content, content_id, disposition, 2 more }`

    - `content: string`

      Base64-encoded content of the attachment.

    - `content_id: string`

      Content ID used to reference this attachment in HTML via cid: URI (e.g., <img src="cid:logo">).

    - `disposition: "inline"`

      Must be 'inline'. Indicates the attachment is embedded in the email body.

      - `"inline"`

    - `filename: string`

      Filename for the attachment.

    - `type: string`

      MIME type of the attachment (e.g., 'image/png', 'text/plain').

  - `Attachment object { content, disposition, filename, type }`

    - `content: string`

      Base64-encoded content of the attachment.

    - `disposition: "attachment"`

      Must be 'attachment'. Indicates a standard file attachment.

      - `"attachment"`

    - `filename: string`

      Filename for the attachment.

    - `type: string`

      MIME type of the attachment (e.g., 'application/pdf', 'text/plain').

- `bcc: optional string or array of string`

  BCC recipient(s). A single email string or an array of email strings.

  - `EmailSendingEmailAddressString = string`

    An email address as a plain string.

  - `EmailSendingEmailAddressList = array of string`

    A list of email address strings.

- `cc: optional string or array of string`

  CC recipient(s). A single email string or an array of email strings.

  - `EmailSendingEmailAddressString = string`

    An email address as a plain string.

  - `EmailSendingEmailAddressList = array of string`

    A list of email address strings.

- `headers: optional map[string]`

  Custom email headers as key-value pairs.

- `html: optional string`

  HTML body of the email. At least one of text or html must be provided (non-empty).

- `reply_to: optional string or object { address, name }`

  Reply-to address. Either a plain string or an object with address and name.

  - `EmailSendingEmailAddressString = string`

    An email address as a plain string.

  - `EmailSendingEmailAddressObject object { address, name }`

    - `address: string`

      Email address (e.g., 'user@example.com').

    - `name: string`

      Display name for the email address (e.g., 'John Doe').

- `text: optional string`

  Plain text body of the email. At least one of text or html must be provided (non-empty).

- `to: optional string or array of string`

  Recipient(s). Optional if cc or bcc is provided. A single email string or an array of email strings.

  - `EmailSendingEmailAddressString = string`

    An email address as a plain string.

  - `EmailSendingEmailAddressList = array of string`

    A list of email address strings.

### Returns

- `errors: array of object { code, message }`

  - `code: number`

  - `message: string`

- `messages: array of object { code, message }`

  - `code: number`

  - `message: string`

- `result: object { delivered, message_id, permanent_bounces, queued }`

  - `delivered: array of string`

    Email addresses to which the message was delivered immediately.

  - `message_id: string`

    Message ID of the sent email.

  - `permanent_bounces: array of string`

    Email addresses that permanently bounced.

  - `queued: array of string`

    Email addresses for which delivery was queued for later.

- `success: true`

  - `true`

- `result_info: optional object { count, per_page, total_count, 2 more }`

  - `count: number`

  - `per_page: number`

  - `total_count: number`

  - `cursor: optional string`

  - `page: optional number`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/email/sending/send \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -d '{
          "from": "sender@example.com",
          "subject": "Monthly Report",
          "headers": {
            "X-Custom-Header": "value"
          },
          "html": "<h1>Hello</h1><p>Please find your report attached.</p>",
          "text": "Hello\\n\\nPlease find your report attached."
        }'
```

#### Response

```json
{
  "errors": [
    {
      "code": 0,
      "message": "message"
    }
  ],
  "messages": [
    {
      "code": 0,
      "message": "message"
    }
  ],
  "result": {
    "delivered": [
      "recipient@example.com"
    ],
    "message_id": "<aB3xK9mP2qR5sT8uV0wX1yZ4cD6fG7hJ9kL0@example.com>",
    "permanent_bounces": [
      "string"
    ],
    "queued": [
      "string"
    ]
  },
  "success": true,
  "result_info": {
    "count": 0,
    "per_page": 0,
    "total_count": 0,
    "cursor": "cursor",
    "page": 0
  }
}
```
