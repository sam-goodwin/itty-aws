// ==========================================================================
// Blogger API (blogger v3)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "blogger",
  version: "v3",
  rootUrl: "https://blogger.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Comment {
  /** RFC 3339 date-time when this comment was published. */
  published?: string;
  /** RFC 3339 date-time when this comment was last updated. */
  updated?: string;
  /** The author of this Comment. */
  author?: {
    image?: { url?: string };
    id?: string;
    displayName?: string;
    url?: string;
  };
  /** The kind of this entry. Always blogger#comment. */
  kind?: string;
  /** The actual content of the comment. May include HTML markup. */
  content?: string;
  /** Data about the comment this is in reply to. */
  inReplyTo?: { id?: string };
  /** Data about the post containing this comment. */
  post?: { id?: string };
  /** The status of the comment (only populated for admin users). */
  status?: "LIVE" | "EMPTIED" | "PENDING" | "SPAM" | (string & {});
  /** Data about the blog containing this comment. */
  blog?: { id?: string };
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The identifier for this resource. */
  id?: string;
}

export const Comment: Schema.Schema<Comment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    published: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    author: Schema.optional(
      Schema.Struct({
        image: Schema.optional(
          Schema.Struct({ url: Schema.optional(Schema.String) }),
        ),
        id: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    inReplyTo: Schema.optional(
      Schema.Struct({ id: Schema.optional(Schema.String) }),
    ),
    post: Schema.optional(
      Schema.Struct({ id: Schema.optional(Schema.String) }),
    ),
    status: Schema.optional(Schema.String),
    blog: Schema.optional(
      Schema.Struct({ id: Schema.optional(Schema.String) }),
    ),
    selfLink: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Comment" });

export interface Post {
  /** Data about the blog containing this Post. */
  blog?: { id?: string };
  /** RFC 3339 date-time when this Post was last trashed. */
  trashed?: string;
  /** The title of the Post. */
  title?: string;
  /** The content of the Post. May contain HTML markup. */
  content?: string;
  /** The JSON meta-data for the Post. */
  customMetaData?: string;
  /** The location for geotagged posts. */
  location?: { lat?: number; lng?: number; span?: string; name?: string };
  /** The list of labels this Post was tagged with. */
  labels?: ReadonlyArray<string>;
  /** Etag of the resource. */
  etag?: string;
  /** RFC 3339 date-time when this Post was last updated. */
  updated?: string;
  /** The author of this Post. */
  author?: {
    displayName?: string;
    url?: string;
    id?: string;
    image?: { url?: string };
  };
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The identifier of this Post. */
  id?: string;
  /** Display image for the Post. */
  images?: ReadonlyArray<{ url?: string }>;
  /** Status of the post. Only set for admin-level requests. */
  status?: "LIVE" | "DRAFT" | "SCHEDULED" | "SOFT_TRASHED" | (string & {});
  /** The kind of this entity. Always blogger#post. */
  kind?: string;
  /** The container of comments on this Post. */
  replies?: {
    totalItems?: string;
    items?: ReadonlyArray<Comment>;
    selfLink?: string;
  };
  /** The URL where this Post is displayed. */
  url?: string;
  /** The title link URL, similar to atom's related link. */
  titleLink?: string;
  /** Comment control and display setting for readers of this post. */
  readerComments?:
    | "ALLOW"
    | "DONT_ALLOW_SHOW_EXISTING"
    | "DONT_ALLOW_HIDE_EXISTING"
    | (string & {});
  /** RFC 3339 date-time when this Post was published. */
  published?: string;
}

export const Post: Schema.Schema<Post> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blog: Schema.optional(
      Schema.Struct({ id: Schema.optional(Schema.String) }),
    ),
    trashed: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    customMetaData: Schema.optional(Schema.String),
    location: Schema.optional(
      Schema.Struct({
        lat: Schema.optional(Schema.Number),
        lng: Schema.optional(Schema.Number),
        span: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    author: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        image: Schema.optional(
          Schema.Struct({ url: Schema.optional(Schema.String) }),
        ),
      }),
    ),
    selfLink: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    images: Schema.optional(
      Schema.Array(Schema.Struct({ url: Schema.optional(Schema.String) })),
    ),
    status: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    replies: Schema.optional(
      Schema.Struct({
        totalItems: Schema.optional(Schema.String),
        items: Schema.optional(Schema.Array(Comment)),
        selfLink: Schema.optional(Schema.String),
      }),
    ),
    url: Schema.optional(Schema.String),
    titleLink: Schema.optional(Schema.String),
    readerComments: Schema.optional(Schema.String),
    published: Schema.optional(Schema.String),
  }).annotate({ identifier: "Post" });

export interface Blog {
  /** The status of the blog. */
  status?: "LIVE" | "DELETED" | (string & {});
  /** The identifier for this resource. */
  id?: string;
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** RFC 3339 date-time when this blog was published. */
  published?: string;
  /** The container of pages in this blog. */
  pages?: { totalItems?: number; selfLink?: string };
  /** The URL where this blog is published. */
  url?: string;
  /** The kind of this entry. Always blogger#blog. */
  kind?: string;
  /** The locale this Blog is set to. */
  locale?: { country?: string; language?: string; variant?: string };
  /** The description of this blog. This is displayed underneath the title. */
  description?: string;
  /** RFC 3339 date-time when this blog was last updated. */
  updated?: string;
  /** The name of this blog. This is displayed as the title. */
  name?: string;
  /** The container of posts in this blog. */
  posts?: {
    selfLink?: string;
    totalItems?: number;
    items?: ReadonlyArray<Post>;
  };
  /** The JSON custom meta-data for the Blog. */
  customMetaData?: string;
}

export const Blog: Schema.Schema<Blog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    published: Schema.optional(Schema.String),
    pages: Schema.optional(
      Schema.Struct({
        totalItems: Schema.optional(Schema.Number),
        selfLink: Schema.optional(Schema.String),
      }),
    ),
    url: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    locale: Schema.optional(
      Schema.Struct({
        country: Schema.optional(Schema.String),
        language: Schema.optional(Schema.String),
        variant: Schema.optional(Schema.String),
      }),
    ),
    description: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    posts: Schema.optional(
      Schema.Struct({
        selfLink: Schema.optional(Schema.String),
        totalItems: Schema.optional(Schema.Number),
        items: Schema.optional(Schema.Array(Post)),
      }),
    ),
    customMetaData: Schema.optional(Schema.String),
  }).annotate({ identifier: "Blog" });

export interface BlogPerUserInfo {
  /** The kind of this entity. Always blogger#blogPerUserInfo. */
  kind?: string;
  /** The Photo Album Key for the user when adding photos to the blog. */
  photosAlbumKey?: string;
  /** Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER). */
  role?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  /** ID of the User. */
  userId?: string;
  /** ID of the Blog resource. */
  blogId?: string;
  /** True if the user has Admin level access to the blog. */
  hasAdminAccess?: boolean;
}

export const BlogPerUserInfo: Schema.Schema<BlogPerUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    photosAlbumKey: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    blogId: Schema.optional(Schema.String),
    hasAdminAccess: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BlogPerUserInfo" });

export interface BlogUserInfo {
  /** The kind of this entity. Always blogger#blogUserInfo. */
  kind?: string;
  /** The Blog resource. */
  blog?: Blog;
  /** Information about a User for the Blog. */
  blog_user_info?: BlogPerUserInfo;
}

export const BlogUserInfo: Schema.Schema<BlogUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    blog: Schema.optional(Blog),
    blog_user_info: Schema.optional(BlogPerUserInfo),
  }).annotate({ identifier: "BlogUserInfo" });

export interface CommentList {
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** Pagination token to fetch the previous page, if one exists. */
  prevPageToken?: string;
  /** The kind of this entry. Always blogger#commentList. */
  kind?: string;
  /** The List of Comments for a Post. */
  items?: ReadonlyArray<Comment>;
  /** Etag of the response. */
  etag?: string;
}

export const CommentList: Schema.Schema<CommentList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Comment)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommentList" });

export interface BlogList {
  /** The list of Blogs this user has Authorship or Admin rights over. */
  items?: ReadonlyArray<Blog>;
  /** Admin level list of blog per-user information. */
  blogUserInfos?: ReadonlyArray<BlogUserInfo>;
  /** The kind of this entity. Always blogger#blogList. */
  kind?: string;
}

export const BlogList: Schema.Schema<BlogList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Blog)),
    blogUserInfos: Schema.optional(Schema.Array(BlogUserInfo)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlogList" });

export interface PostPerUserInfo {
  /** ID of the User. */
  userId?: string;
  /** ID of the Blog that the post resource belongs to. */
  blogId?: string;
  /** True if the user has Author level access to the post. */
  hasEditAccess?: boolean;
  /** ID of the Post resource. */
  postId?: string;
  /** The kind of this entity. Always blogger#postPerUserInfo. */
  kind?: string;
}

export const PostPerUserInfo: Schema.Schema<PostPerUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String),
    blogId: Schema.optional(Schema.String),
    hasEditAccess: Schema.optional(Schema.Boolean),
    postId: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostPerUserInfo" });

export interface PostUserInfo {
  /** The kind of this entity. Always blogger#postUserInfo. */
  kind?: string;
  /** The Post resource. */
  post?: Post;
  /** Information about a User for the Post. */
  post_user_info?: PostPerUserInfo;
}

export const PostUserInfo: Schema.Schema<PostUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    post: Schema.optional(Post),
    post_user_info: Schema.optional(PostPerUserInfo),
  }).annotate({ identifier: "PostUserInfo" });

export interface PostUserInfosList {
  /** The list of Posts with User information for the post, for this Blog. */
  items?: ReadonlyArray<PostUserInfo>;
  /** The kind of this entity. Always blogger#postList. */
  kind?: string;
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
}

export const PostUserInfosList: Schema.Schema<PostUserInfosList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(PostUserInfo)),
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostUserInfosList" });

export interface Page {
  /** The kind of this entity. Always blogger#page. */
  kind?: string;
  /** The URL that this Page is displayed at. */
  url?: string;
  /** RFC 3339 date-time when this Page was published. */
  published?: string;
  /** The identifier for this resource. */
  id?: string;
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The status of the page for admin resources (either LIVE or DRAFT). */
  status?: "LIVE" | "DRAFT" | "SOFT_TRASHED" | (string & {});
  /** The body content of this Page, in HTML. */
  content?: string;
  /** Etag of the resource. */
  etag?: string;
  /** RFC 3339 date-time when this Page was last updated. */
  updated?: string;
  /** The author of this Page. */
  author?: {
    image?: { url?: string };
    id?: string;
    displayName?: string;
    url?: string;
  };
  /** Data about the blog containing this Page. */
  blog?: { id?: string };
  /** The title of this entity. This is the name displayed in the Admin user interface. */
  title?: string;
  /** RFC 3339 date-time when this Page was trashed. */
  trashed?: string;
}

export const Page: Schema.Schema<Page> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    published: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    author: Schema.optional(
      Schema.Struct({
        image: Schema.optional(
          Schema.Struct({ url: Schema.optional(Schema.String) }),
        ),
        id: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
    blog: Schema.optional(
      Schema.Struct({ id: Schema.optional(Schema.String) }),
    ),
    title: Schema.optional(Schema.String),
    trashed: Schema.optional(Schema.String),
  }).annotate({ identifier: "Page" });

export interface PageList {
  /** The kind of this entity. Always blogger#pageList. */
  kind?: string;
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** Etag of the response. */
  etag?: string;
  /** The list of Pages for a Blog. */
  items?: ReadonlyArray<Page>;
}

export const PageList: Schema.Schema<PageList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Page)),
  }).annotate({ identifier: "PageList" });

export interface User {
  /** The container of blogs for this user. */
  blogs?: { selfLink?: string };
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The display name. */
  displayName?: string;
  /** The identifier for this User. */
  id?: string;
  /** The timestamp of when this profile was created, in seconds since epoch. */
  created?: string;
  /** This user's locale */
  locale?: { country?: string; language?: string; variant?: string };
  /** The kind of this entity. Always blogger#user. */
  kind?: string;
  /** The user's profile page. */
  url?: string;
  /** Profile summary information. */
  about?: string;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blogs: Schema.optional(
      Schema.Struct({ selfLink: Schema.optional(Schema.String) }),
    ),
    selfLink: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    locale: Schema.optional(
      Schema.Struct({
        country: Schema.optional(Schema.String),
        language: Schema.optional(Schema.String),
        variant: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    about: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface PostList {
  /** The kind of this entity. Always blogger#postList. */
  kind?: string;
  /** Etag of the response. */
  etag?: string;
  /** The list of Posts for this Blog. */
  items?: ReadonlyArray<Post>;
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** Pagination token to fetch the previous page, if one exists. */
  prevPageToken?: string;
}

export const PostList: Schema.Schema<PostList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Post)),
    nextPageToken: Schema.optional(Schema.String),
    prevPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostList" });

export interface Pageviews {
  /** The kind of this entry. Always blogger#page_views. */
  kind?: string;
  /** Blog Id. */
  blogId?: string;
  /** The container of posts in this blog. */
  counts?: ReadonlyArray<{
    timeRange?: "ALL_TIME" | "THIRTY_DAYS" | "SEVEN_DAYS" | (string & {});
    count?: string;
  }>;
}

export const Pageviews: Schema.Schema<Pageviews> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    blogId: Schema.optional(Schema.String),
    counts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          timeRange: Schema.optional(Schema.String),
          count: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).annotate({ identifier: "Pageviews" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GetCommentsRequest {
  commentId: string;
  blogId: string;
  postId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const GetCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({
    method: "GET",
    path: "v3/blogs/{blogId}/posts/{postId}/comments/{commentId}",
  }),
  svc,
) as unknown as Schema.Schema<GetCommentsRequest>;

export type GetCommentsResponse = Comment;
export const GetCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type GetCommentsError = DefaultErrors | NotFound | Forbidden;

/** Gets a comment by id. */
export const getComments: API.OperationMethod<
  GetCommentsRequest,
  GetCommentsResponse,
  GetCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCommentsRequest,
  output: GetCommentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListByBlogCommentsRequest {
  startDate?: string;
  fetchBodies?: boolean;
  endDate?: string;
  blogId: string;
  maxResults?: number;
  pageToken?: string;
  status?: "LIVE" | "EMPTIED" | "PENDING" | "SPAM" | (string & {})[];
}

export const ListByBlogCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
    fetchBodies: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("fetchBodies"),
    ),
    endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/blogs/{blogId}/comments" }),
    svc,
  ) as unknown as Schema.Schema<ListByBlogCommentsRequest>;

export type ListByBlogCommentsResponse = CommentList;
export const ListByBlogCommentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommentList;

export type ListByBlogCommentsError = DefaultErrors | NotFound | Forbidden;

/** Lists comments by blog. */
export const listByBlogComments: API.PaginatedOperationMethod<
  ListByBlogCommentsRequest,
  ListByBlogCommentsResponse,
  ListByBlogCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListByBlogCommentsRequest,
  output: ListByBlogCommentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ApproveCommentsRequest {
  blogId: string;
  postId: string;
  commentId: string;
}

export const ApproveCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    postId: Schema.String.pipe(T.HttpPath("postId")),
    commentId: Schema.String.pipe(T.HttpPath("commentId")),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ApproveCommentsRequest>;

export type ApproveCommentsResponse = Comment;
export const ApproveCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type ApproveCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks a comment as not spam by blog id, post id and comment id. */
export const approveComments: API.OperationMethod<
  ApproveCommentsRequest,
  ApproveCommentsResponse,
  ApproveCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveCommentsRequest,
  output: ApproveCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCommentsRequest {
  status?: "LIVE" | "EMPTIED" | "PENDING" | "SPAM" | (string & {});
  endDate?: string;
  startDate?: string;
  fetchBodies?: boolean;
  blogId: string;
  maxResults?: number;
  pageToken?: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  postId: string;
}

export const ListCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
  endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
  startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/{postId}/comments" }),
  svc,
) as unknown as Schema.Schema<ListCommentsRequest>;

export type ListCommentsResponse = CommentList;
export const ListCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ CommentList;

export type ListCommentsError = DefaultErrors | NotFound | Forbidden;

/** Lists comments. */
export const listComments: API.PaginatedOperationMethod<
  ListCommentsRequest,
  ListCommentsResponse,
  ListCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCommentsRequest,
  output: ListCommentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface RemoveContentCommentsRequest {
  commentId: string;
  blogId: string;
  postId: string;
}

export const RemoveContentCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commentId: Schema.String.pipe(T.HttpPath("commentId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    postId: Schema.String.pipe(T.HttpPath("postId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveContentCommentsRequest>;

export type RemoveContentCommentsResponse = Comment;
export const RemoveContentCommentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Comment;

export type RemoveContentCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes the content of a comment by blog id, post id and comment id. */
export const removeContentComments: API.OperationMethod<
  RemoveContentCommentsRequest,
  RemoveContentCommentsResponse,
  RemoveContentCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveContentCommentsRequest,
  output: RemoveContentCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkAsSpamCommentsRequest {
  commentId: string;
  blogId: string;
  postId: string;
}

export const MarkAsSpamCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commentId: Schema.String.pipe(T.HttpPath("commentId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    postId: Schema.String.pipe(T.HttpPath("postId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MarkAsSpamCommentsRequest>;

export type MarkAsSpamCommentsResponse = Comment;
export const MarkAsSpamCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type MarkAsSpamCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks a comment as spam by blog id, post id and comment id. */
export const markAsSpamComments: API.OperationMethod<
  MarkAsSpamCommentsRequest,
  MarkAsSpamCommentsResponse,
  MarkAsSpamCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAsSpamCommentsRequest,
  output: MarkAsSpamCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteCommentsRequest {
  commentId: string;
  blogId: string;
  postId: string;
}

export const DeleteCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "v3/blogs/{blogId}/posts/{postId}/comments/{commentId}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteCommentsRequest>;

export interface DeleteCommentsResponse {}
export const DeleteCommentsResponse: Schema.Schema<DeleteCommentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeleteCommentsResponse>;

export type DeleteCommentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a comment by blog id, post id and comment id. */
export const deleteComments: API.OperationMethod<
  DeleteCommentsRequest,
  DeleteCommentsResponse,
  DeleteCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCommentsRequest,
  output: DeleteCommentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetByUrlBlogsRequest {
  url: string;
  /** Unspecified is interpreted as READER. */
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const GetByUrlBlogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String.pipe(T.HttpQuery("url")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/byurl" }),
  svc,
) as unknown as Schema.Schema<GetByUrlBlogsRequest>;

export type GetByUrlBlogsResponse = Blog;
export const GetByUrlBlogsResponse = /*@__PURE__*/ /*#__PURE__*/ Blog;

export type GetByUrlBlogsError = DefaultErrors | NotFound | Forbidden;

/** Gets a blog by url. */
export const getByUrlBlogs: API.OperationMethod<
  GetByUrlBlogsRequest,
  GetByUrlBlogsResponse,
  GetByUrlBlogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetByUrlBlogsRequest,
  output: GetByUrlBlogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetBlogsRequest {
  blogId: string;
  maxPosts?: number;
  /** Unspecified is interpreted as READER. */
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const GetBlogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  maxPosts: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxPosts")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}" }),
  svc,
) as unknown as Schema.Schema<GetBlogsRequest>;

export type GetBlogsResponse = Blog;
export const GetBlogsResponse = /*@__PURE__*/ /*#__PURE__*/ Blog;

export type GetBlogsError = DefaultErrors | NotFound | Forbidden;

/** Gets a blog by id. */
export const getBlogs: API.OperationMethod<
  GetBlogsRequest,
  GetBlogsResponse,
  GetBlogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBlogsRequest,
  output: GetBlogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListByUserBlogsRequest {
  userId: string;
  /** Unspecified is interpreted as the user's role on the blog. */
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  role?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {})[];
  /** Default value of status is LIVE. */
  status?: "LIVE" | "DELETED" | (string & {})[];
  fetchUserInfo?: boolean;
}

export const ListByUserBlogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    userId: Schema.String.pipe(T.HttpPath("userId")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    role: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("role"),
    ),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
    fetchUserInfo: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("fetchUserInfo"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "v3/users/{userId}/blogs" }),
  svc,
) as unknown as Schema.Schema<ListByUserBlogsRequest>;

export type ListByUserBlogsResponse = BlogList;
export const ListByUserBlogsResponse = /*@__PURE__*/ /*#__PURE__*/ BlogList;

export type ListByUserBlogsError = DefaultErrors | NotFound | Forbidden;

/** Lists blogs by user. */
export const listByUserBlogs: API.OperationMethod<
  ListByUserBlogsRequest,
  ListByUserBlogsResponse,
  ListByUserBlogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListByUserBlogsRequest,
  output: ListByUserBlogsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetUsersRequest {
  userId: string;
}

export const GetUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.HttpPath("userId")),
}).pipe(
  T.Http({ method: "GET", path: "v3/users/{userId}" }),
  svc,
) as unknown as Schema.Schema<GetUsersRequest>;

export type GetUsersResponse = User;
export const GetUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type GetUsersError = DefaultErrors | NotFound | Forbidden;

/** Gets one user by user_id. */
export const getUsers: API.OperationMethod<
  GetUsersRequest,
  GetUsersResponse,
  GetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersRequest,
  output: GetUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdatePostsRequest {
  maxComments?: number;
  postId: string;
  revert?: boolean;
  fetchBody?: boolean;
  fetchImages?: boolean;
  blogId: string;
  publish?: boolean;
  /** Request body */
  body?: Post;
}

export const UpdatePostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
  body: Schema.optional(Post).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "v3/blogs/{blogId}/posts/{postId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdatePostsRequest>;

export type UpdatePostsResponse = Post;
export const UpdatePostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type UpdatePostsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a post by blog id and post id. */
export const updatePosts: API.OperationMethod<
  UpdatePostsRequest,
  UpdatePostsResponse,
  UpdatePostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePostsRequest,
  output: UpdatePostsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchPostsRequest {
  fetchBodies?: boolean;
  orderBy?: "ORDER_BY_UNSPECIFIED" | "PUBLISHED" | "UPDATED" | (string & {});
  blogId: string;
  q: string;
}

export const SearchPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  q: Schema.String.pipe(T.HttpQuery("q")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/search" }),
  svc,
) as unknown as Schema.Schema<SearchPostsRequest>;

export type SearchPostsResponse = PostList;
export const SearchPostsResponse = /*@__PURE__*/ /*#__PURE__*/ PostList;

export type SearchPostsError = DefaultErrors | NotFound | Forbidden;

/** Searches for posts matching given query terms in the specified blog. */
export const searchPosts: API.OperationMethod<
  SearchPostsRequest,
  SearchPostsResponse,
  SearchPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchPostsRequest,
  output: SearchPostsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeletePostsRequest {
  blogId: string;
  postId: string;
  /** Move to Trash if possible */
  useTrash?: boolean;
}

export const DeletePostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  useTrash: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("useTrash")),
}).pipe(
  T.Http({ method: "DELETE", path: "v3/blogs/{blogId}/posts/{postId}" }),
  svc,
) as unknown as Schema.Schema<DeletePostsRequest>;

export interface DeletePostsResponse {}
export const DeletePostsResponse: Schema.Schema<DeletePostsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePostsResponse>;

export type DeletePostsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a post by blog id and post id. */
export const deletePosts: API.OperationMethod<
  DeletePostsRequest,
  DeletePostsResponse,
  DeletePostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePostsRequest,
  output: DeletePostsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPostsRequest {
  orderBy?: "ORDER_BY_UNSPECIFIED" | "PUBLISHED" | "UPDATED" | (string & {});
  endDate?: string;
  fetchBodies?: boolean;
  fetchImages?: boolean;
  startDate?: string;
  status?: "LIVE" | "DRAFT" | "SCHEDULED" | "SOFT_TRASHED" | (string & {})[];
  labels?: string;
  /** Sort direction applied to post list. */
  sortOption?:
    | "SORT_OPTION_UNSPECIFIED"
    | "DESCENDING"
    | "ASCENDING"
    | (string & {});
  blogId: string;
  maxResults?: number;
  pageToken?: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const ListPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
  status: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("status"),
  ),
  labels: Schema.optional(Schema.String).pipe(T.HttpQuery("labels")),
  sortOption: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOption")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts" }),
  svc,
) as unknown as Schema.Schema<ListPostsRequest>;

export type ListPostsResponse = PostList;
export const ListPostsResponse = /*@__PURE__*/ /*#__PURE__*/ PostList;

export type ListPostsError = DefaultErrors | NotFound | Forbidden;

/** Lists posts. */
export const listPosts: API.PaginatedOperationMethod<
  ListPostsRequest,
  ListPostsResponse,
  ListPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPostsRequest,
  output: ListPostsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface PublishPostsRequest {
  blogId: string;
  postId: string;
  publishDate?: string;
}

export const PublishPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  publishDate: Schema.optional(Schema.String).pipe(T.HttpQuery("publishDate")),
}).pipe(
  T.Http({
    method: "POST",
    path: "v3/blogs/{blogId}/posts/{postId}/publish",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PublishPostsRequest>;

export type PublishPostsResponse = Post;
export const PublishPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type PublishPostsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Publishes a post. */
export const publishPosts: API.OperationMethod<
  PublishPostsRequest,
  PublishPostsResponse,
  PublishPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishPostsRequest,
  output: PublishPostsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPostsRequest {
  fetchBody?: boolean;
  fetchImages?: boolean;
  blogId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  maxComments?: number;
  postId: string;
}

export const GetPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/{postId}" }),
  svc,
) as unknown as Schema.Schema<GetPostsRequest>;

export type GetPostsResponse = Post;
export const GetPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type GetPostsError = DefaultErrors | NotFound | Forbidden;

/** Gets a post by blog id and post id */
export const getPosts: API.OperationMethod<
  GetPostsRequest,
  GetPostsResponse,
  GetPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPostsRequest,
  output: GetPostsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetByPathPostsRequest {
  blogId: string;
  path: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  maxComments?: number;
}

export const GetByPathPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  path: Schema.String.pipe(T.HttpQuery("path")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/bypath" }),
  svc,
) as unknown as Schema.Schema<GetByPathPostsRequest>;

export type GetByPathPostsResponse = Post;
export const GetByPathPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type GetByPathPostsError = DefaultErrors | NotFound | Forbidden;

/** Gets a post by path. */
export const getByPathPosts: API.OperationMethod<
  GetByPathPostsRequest,
  GetByPathPostsResponse,
  GetByPathPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetByPathPostsRequest,
  output: GetByPathPostsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchPostsRequest {
  fetchImages?: boolean;
  fetchBody?: boolean;
  blogId: string;
  publish?: boolean;
  maxComments?: number;
  postId: string;
  revert?: boolean;
  /** Request body */
  body?: Post;
}

export const PatchPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
  body: Schema.optional(Post).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "v3/blogs/{blogId}/posts/{postId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchPostsRequest>;

export type PatchPostsResponse = Post;
export const PatchPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type PatchPostsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches a post. */
export const patchPosts: API.OperationMethod<
  PatchPostsRequest,
  PatchPostsResponse,
  PatchPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPostsRequest,
  output: PatchPostsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertPostsRequest {
  blogId: string;
  postId: string;
}

export const RevertPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "v3/blogs/{blogId}/posts/{postId}/revert",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<RevertPostsRequest>;

export type RevertPostsResponse = Post;
export const RevertPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type RevertPostsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts a published or scheduled post to draft state. */
export const revertPosts: API.OperationMethod<
  RevertPostsRequest,
  RevertPostsResponse,
  RevertPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertPostsRequest,
  output: RevertPostsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPostsRequest {
  blogId: string;
  isDraft?: boolean;
  fetchImages?: boolean;
  fetchBody?: boolean;
  /** Request body */
  body?: Post;
}

export const InsertPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  isDraft: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("isDraft")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  body: Schema.optional(Post).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v3/blogs/{blogId}/posts", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertPostsRequest>;

export type InsertPostsResponse = Post;
export const InsertPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type InsertPostsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a post. */
export const insertPosts: API.OperationMethod<
  InsertPostsRequest,
  InsertPostsResponse,
  InsertPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPostsRequest,
  output: InsertPostsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPostUserInfosRequest {
  userId: string;
  blogId: string;
  postId: string;
  maxComments?: number;
}

export const GetPostUserInfosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.HttpPath("userId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    postId: Schema.String.pipe(T.HttpPath("postId")),
    maxComments: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("maxComments"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v3/users/{userId}/blogs/{blogId}/posts/{postId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetPostUserInfosRequest>;

export type GetPostUserInfosResponse = PostUserInfo;
export const GetPostUserInfosResponse =
  /*@__PURE__*/ /*#__PURE__*/ PostUserInfo;

export type GetPostUserInfosError = DefaultErrors | NotFound | Forbidden;

/** Gets one post and user info pair, by post_id and user_id. */
export const getPostUserInfos: API.OperationMethod<
  GetPostUserInfosRequest,
  GetPostUserInfosResponse,
  GetPostUserInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPostUserInfosRequest,
  output: GetPostUserInfosResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListPostUserInfosRequest {
  labels?: string;
  userId: string;
  blogId: string;
  maxResults?: number;
  pageToken?: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  orderBy?: "ORDER_BY_UNSPECIFIED" | "PUBLISHED" | "UPDATED" | (string & {});
  status?: "LIVE" | "DRAFT" | "SCHEDULED" | "SOFT_TRASHED" | (string & {})[];
  endDate?: string;
  startDate?: string;
  fetchBodies?: boolean;
}

export const ListPostUserInfosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.String).pipe(T.HttpQuery("labels")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
    endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
    startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
    fetchBodies: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("fetchBodies"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v3/users/{userId}/blogs/{blogId}/posts" }),
    svc,
  ) as unknown as Schema.Schema<ListPostUserInfosRequest>;

export type ListPostUserInfosResponse = PostUserInfosList;
export const ListPostUserInfosResponse =
  /*@__PURE__*/ /*#__PURE__*/ PostUserInfosList;

export type ListPostUserInfosError = DefaultErrors | NotFound | Forbidden;

/** Lists post and user info pairs. */
export const listPostUserInfos: API.PaginatedOperationMethod<
  ListPostUserInfosRequest,
  ListPostUserInfosResponse,
  ListPostUserInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPostUserInfosRequest,
  output: ListPostUserInfosResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface GetPageViewsRequest {
  blogId: string;
  range?: "all" | "30DAYS" | "7DAYS" | (string & {})[];
}

export const GetPageViewsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  range: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("range"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/pageviews" }),
  svc,
) as unknown as Schema.Schema<GetPageViewsRequest>;

export type GetPageViewsResponse = Pageviews;
export const GetPageViewsResponse = /*@__PURE__*/ /*#__PURE__*/ Pageviews;

export type GetPageViewsError = DefaultErrors | NotFound | Forbidden;

/** Gets page views by blog id. */
export const getPageViews: API.OperationMethod<
  GetPageViewsRequest,
  GetPageViewsResponse,
  GetPageViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPageViewsRequest,
  output: GetPageViewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListPagesRequest {
  fetchBodies?: boolean;
  blogId: string;
  maxResults?: number;
  pageToken?: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  status?: "LIVE" | "DRAFT" | "SOFT_TRASHED" | (string & {})[];
}

export const ListPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  status: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("status"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/pages" }),
  svc,
) as unknown as Schema.Schema<ListPagesRequest>;

export type ListPagesResponse = PageList;
export const ListPagesResponse = /*@__PURE__*/ /*#__PURE__*/ PageList;

export type ListPagesError = DefaultErrors | NotFound | Forbidden;

/** Lists pages. */
export const listPages: API.PaginatedOperationMethod<
  ListPagesRequest,
  ListPagesResponse,
  ListPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPagesRequest,
  output: ListPagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface PublishPagesRequest {
  blogId: string;
  pageId: string;
}

export const PublishPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "v3/blogs/{blogId}/pages/{pageId}/publish",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PublishPagesRequest>;

export type PublishPagesResponse = Page;
export const PublishPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type PublishPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Publishes a page. */
export const publishPages: API.OperationMethod<
  PublishPagesRequest,
  PublishPagesResponse,
  PublishPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishPagesRequest,
  output: PublishPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdatePagesRequest {
  blogId: string;
  publish?: boolean;
  revert?: boolean;
  pageId: string;
  /** Request body */
  body?: Page;
}

export const UpdatePagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  body: Schema.optional(Page).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "v3/blogs/{blogId}/pages/{pageId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdatePagesRequest>;

export type UpdatePagesResponse = Page;
export const UpdatePagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type UpdatePagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a page by blog id and page id. */
export const updatePages: API.OperationMethod<
  UpdatePagesRequest,
  UpdatePagesResponse,
  UpdatePagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePagesRequest,
  output: UpdatePagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPagesRequest {
  blogId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  pageId: string;
}

export const GetPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/pages/{pageId}" }),
  svc,
) as unknown as Schema.Schema<GetPagesRequest>;

export type GetPagesResponse = Page;
export const GetPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type GetPagesError = DefaultErrors | NotFound | Forbidden;

/** Gets a page by blog id and page id. */
export const getPages: API.OperationMethod<
  GetPagesRequest,
  GetPagesResponse,
  GetPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPagesRequest,
  output: GetPagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface RevertPagesRequest {
  blogId: string;
  pageId: string;
}

export const RevertPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
}).pipe(
  T.Http({
    method: "POST",
    path: "v3/blogs/{blogId}/pages/{pageId}/revert",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<RevertPagesRequest>;

export type RevertPagesResponse = Page;
export const RevertPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type RevertPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverts a published or scheduled page to draft state. */
export const revertPages: API.OperationMethod<
  RevertPagesRequest,
  RevertPagesResponse,
  RevertPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertPagesRequest,
  output: RevertPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertPagesRequest {
  isDraft?: boolean;
  blogId: string;
  /** Request body */
  body?: Page;
}

export const InsertPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isDraft: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("isDraft")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  body: Schema.optional(Page).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v3/blogs/{blogId}/pages", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertPagesRequest>;

export type InsertPagesResponse = Page;
export const InsertPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type InsertPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a page. */
export const insertPages: API.OperationMethod<
  InsertPagesRequest,
  InsertPagesResponse,
  InsertPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPagesRequest,
  output: InsertPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePagesRequest {
  pageId: string;
  /** Move to Trash if possible */
  useTrash?: boolean;
  blogId: string;
}

export const DeletePagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  useTrash: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("useTrash")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
}).pipe(
  T.Http({ method: "DELETE", path: "v3/blogs/{blogId}/pages/{pageId}" }),
  svc,
) as unknown as Schema.Schema<DeletePagesRequest>;

export interface DeletePagesResponse {}
export const DeletePagesResponse: Schema.Schema<DeletePagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePagesResponse>;

export type DeletePagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a page by blog id and page id. */
export const deletePages: API.OperationMethod<
  DeletePagesRequest,
  DeletePagesResponse,
  DeletePagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePagesRequest,
  output: DeletePagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchPagesRequest {
  blogId: string;
  publish?: boolean;
  revert?: boolean;
  pageId: string;
  /** Request body */
  body?: Page;
}

export const PatchPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  body: Schema.optional(Page).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "v3/blogs/{blogId}/pages/{pageId}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchPagesRequest>;

export type PatchPagesResponse = Page;
export const PatchPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type PatchPagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patches a page. */
export const patchPages: API.OperationMethod<
  PatchPagesRequest,
  PatchPagesResponse,
  PatchPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPagesRequest,
  output: PatchPagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBlogUserInfosRequest {
  userId: string;
  blogId: string;
  maxPosts?: number;
}

export const GetBlogUserInfosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.HttpPath("userId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    maxPosts: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxPosts")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/users/{userId}/blogs/{blogId}" }),
    svc,
  ) as unknown as Schema.Schema<GetBlogUserInfosRequest>;

export type GetBlogUserInfosResponse = BlogUserInfo;
export const GetBlogUserInfosResponse =
  /*@__PURE__*/ /*#__PURE__*/ BlogUserInfo;

export type GetBlogUserInfosError = DefaultErrors | NotFound | Forbidden;

/** Gets one blog and user info pair by blog id and user id. */
export const getBlogUserInfos: API.OperationMethod<
  GetBlogUserInfosRequest,
  GetBlogUserInfosResponse,
  GetBlogUserInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBlogUserInfosRequest,
  output: GetBlogUserInfosResponse,
  errors: [NotFound, Forbidden],
}));
