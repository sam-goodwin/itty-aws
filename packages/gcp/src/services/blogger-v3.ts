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

export interface PostPerUserInfo {
  /** True if the user has Author level access to the post. */
  hasEditAccess?: boolean;
  /** ID of the User. */
  userId?: string;
  /** The kind of this entity. Always blogger#postPerUserInfo. */
  kind?: string;
  /** ID of the Post resource. */
  postId?: string;
  /** ID of the Blog that the post resource belongs to. */
  blogId?: string;
}

export const PostPerUserInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hasEditAccess: Schema.optional(Schema.Boolean),
  userId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  postId: Schema.optional(Schema.String),
  blogId: Schema.optional(Schema.String),
}).annotate({ identifier: "PostPerUserInfo" });

export interface Comment {
  /** The status of the comment (only populated for admin users). */
  status?: "LIVE" | "EMPTIED" | "PENDING" | "SPAM" | (string & {});
  /** Data about the comment this is in reply to. */
  inReplyTo?: { id?: string };
  /** The actual content of the comment. May include HTML markup. */
  content?: string;
  /** Data about the post containing this comment. */
  post?: { id?: string };
  /** RFC 3339 date-time when this comment was last updated. */
  updated?: string;
  /** The kind of this entry. Always blogger#comment. */
  kind?: string;
  /** Data about the blog containing this comment. */
  blog?: { id?: string };
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The identifier for this resource. */
  id?: string;
  /** RFC 3339 date-time when this comment was published. */
  published?: string;
  /** The author of this Comment. */
  author?: {
    id?: string;
    url?: string;
    displayName?: string;
    image?: { url?: string };
  };
}

export const Comment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  inReplyTo: Schema.optional(
    Schema.Struct({ id: Schema.optional(Schema.String) }),
  ),
  content: Schema.optional(Schema.String),
  post: Schema.optional(Schema.Struct({ id: Schema.optional(Schema.String) })),
  updated: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  blog: Schema.optional(Schema.Struct({ id: Schema.optional(Schema.String) })),
  selfLink: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  published: Schema.optional(Schema.String),
  author: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      url: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      image: Schema.optional(
        Schema.Struct({ url: Schema.optional(Schema.String) }),
      ),
    }),
  ),
}).annotate({ identifier: "Comment" });

export interface Post {
  /** The identifier of this Post. */
  id?: string;
  /** The container of comments on this Post. */
  replies?: {
    selfLink?: string;
    totalItems?: string;
    items?: ReadonlyArray<Comment>;
  };
  /** The title link URL, similar to atom's related link. */
  titleLink?: string;
  /** Status of the post. Only set for admin-level requests. */
  status?: "LIVE" | "DRAFT" | "SCHEDULED" | "SOFT_TRASHED" | (string & {});
  /** The content of the Post. May contain HTML markup. */
  content?: string;
  /** The kind of this entity. Always blogger#post. */
  kind?: string;
  /** Data about the blog containing this Post. */
  blog?: { id?: string };
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The JSON meta-data for the Post. */
  customMetaData?: string;
  /** Comment control and display setting for readers of this post. */
  readerComments?:
    | "ALLOW"
    | "DONT_ALLOW_SHOW_EXISTING"
    | "DONT_ALLOW_HIDE_EXISTING"
    | (string & {});
  /** RFC 3339 date-time when this Post was published. */
  published?: string;
  /** Display image for the Post. */
  images?: ReadonlyArray<{ url?: string }>;
  /** The author of this Post. */
  author?: {
    id?: string;
    url?: string;
    displayName?: string;
    image?: { url?: string };
  };
  /** The URL where this Post is displayed. */
  url?: string;
  /** The list of labels this Post was tagged with. */
  labels?: ReadonlyArray<string>;
  /** RFC 3339 date-time when this Post was last trashed. */
  trashed?: string;
  /** The title of the Post. */
  title?: string;
  /** Etag of the resource. */
  etag?: string;
  /** RFC 3339 date-time when this Post was last updated. */
  updated?: string;
  /** The location for geotagged posts. */
  location?: { name?: string; span?: string; lat?: number; lng?: number };
}

export const Post = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  replies: Schema.optional(
    Schema.Struct({
      selfLink: Schema.optional(Schema.String),
      totalItems: Schema.optional(Schema.String),
      items: Schema.optional(Schema.Array(Comment)),
    }),
  ),
  titleLink: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  content: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  blog: Schema.optional(Schema.Struct({ id: Schema.optional(Schema.String) })),
  selfLink: Schema.optional(Schema.String),
  customMetaData: Schema.optional(Schema.String),
  readerComments: Schema.optional(Schema.String),
  published: Schema.optional(Schema.String),
  images: Schema.optional(
    Schema.Array(Schema.Struct({ url: Schema.optional(Schema.String) })),
  ),
  author: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      url: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      image: Schema.optional(
        Schema.Struct({ url: Schema.optional(Schema.String) }),
      ),
    }),
  ),
  url: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Array(Schema.String)),
  trashed: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  location: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      span: Schema.optional(Schema.String),
      lat: Schema.optional(Schema.Number),
      lng: Schema.optional(Schema.Number),
    }),
  ),
}).annotate({ identifier: "Post" });

export interface PostUserInfo {
  /** The kind of this entity. Always blogger#postUserInfo. */
  kind?: string;
  /** Information about a User for the Post. */
  post_user_info?: PostPerUserInfo;
  /** The Post resource. */
  post?: Post;
}

export const PostUserInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  post_user_info: Schema.optional(PostPerUserInfo),
  post: Schema.optional(Post),
}).annotate({ identifier: "PostUserInfo" });

export interface User {
  /** The identifier for this User. */
  id?: string;
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The user's profile page. */
  url?: string;
  /** Profile summary information. */
  about?: string;
  /** This user's locale */
  locale?: { language?: string; country?: string; variant?: string };
  /** The timestamp of when this profile was created, in seconds since epoch. */
  created?: string;
  /** The display name. */
  displayName?: string;
  /** The container of blogs for this user. */
  blogs?: { selfLink?: string };
  /** The kind of this entity. Always blogger#user. */
  kind?: string;
}

export const User = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  about: Schema.optional(Schema.String),
  locale: Schema.optional(
    Schema.Struct({
      language: Schema.optional(Schema.String),
      country: Schema.optional(Schema.String),
      variant: Schema.optional(Schema.String),
    }),
  ),
  created: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  blogs: Schema.optional(
    Schema.Struct({ selfLink: Schema.optional(Schema.String) }),
  ),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "User" });

export interface Page {
  /** The title of this entity. This is the name displayed in the Admin user interface. */
  title?: string;
  /** Etag of the resource. */
  etag?: string;
  /** RFC 3339 date-time when this Page was last updated. */
  updated?: string;
  /** RFC 3339 date-time when this Page was trashed. */
  trashed?: string;
  /** The author of this Page. */
  author?: {
    displayName?: string;
    image?: { url?: string };
    id?: string;
    url?: string;
  };
  /** The URL that this Page is displayed at. */
  url?: string;
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** RFC 3339 date-time when this Page was published. */
  published?: string;
  /** The kind of this entity. Always blogger#page. */
  kind?: string;
  /** Data about the blog containing this Page. */
  blog?: { id?: string };
  /** The status of the page for admin resources (either LIVE or DRAFT). */
  status?: "LIVE" | "DRAFT" | "SOFT_TRASHED" | (string & {});
  /** The body content of this Page, in HTML. */
  content?: string;
  /** The identifier for this resource. */
  id?: string;
}

export const Page = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  title: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  trashed: Schema.optional(Schema.String),
  author: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      image: Schema.optional(
        Schema.Struct({ url: Schema.optional(Schema.String) }),
      ),
      id: Schema.optional(Schema.String),
      url: Schema.optional(Schema.String),
    }),
  ),
  url: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  published: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  blog: Schema.optional(Schema.Struct({ id: Schema.optional(Schema.String) })),
  status: Schema.optional(Schema.String),
  content: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "Page" });

export interface PageList {
  /** The list of Pages for a Blog. */
  items?: ReadonlyArray<Page>;
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** Etag of the response. */
  etag?: string;
  /** The kind of this entity. Always blogger#pageList. */
  kind?: string;
}

export const PageList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(Page)),
  nextPageToken: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "PageList" });

export interface Blog {
  /** The status of the blog. */
  status?: "LIVE" | "DELETED" | (string & {});
  /** The name of this blog. This is displayed as the title. */
  name?: string;
  /** The kind of this entry. Always blogger#blog. */
  kind?: string;
  /** The identifier for this resource. */
  id?: string;
  /** The description of this blog. This is displayed underneath the title. */
  description?: string;
  /** The locale this Blog is set to. */
  locale?: { language?: string; country?: string; variant?: string };
  /** The container of posts in this blog. */
  posts?: {
    selfLink?: string;
    totalItems?: number;
    items?: ReadonlyArray<Post>;
  };
  /** RFC 3339 date-time when this blog was last updated. */
  updated?: string;
  /** RFC 3339 date-time when this blog was published. */
  published?: string;
  /** The API REST URL to fetch this resource from. */
  selfLink?: string;
  /** The JSON custom meta-data for the Blog. */
  customMetaData?: string;
  /** The container of pages in this blog. */
  pages?: { totalItems?: number; selfLink?: string };
  /** The URL where this blog is published. */
  url?: string;
}

export const Blog = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  locale: Schema.optional(
    Schema.Struct({
      language: Schema.optional(Schema.String),
      country: Schema.optional(Schema.String),
      variant: Schema.optional(Schema.String),
    }),
  ),
  posts: Schema.optional(
    Schema.Struct({
      selfLink: Schema.optional(Schema.String),
      totalItems: Schema.optional(Schema.Number),
      items: Schema.optional(Schema.Array(Post)),
    }),
  ),
  updated: Schema.optional(Schema.String),
  published: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  customMetaData: Schema.optional(Schema.String),
  pages: Schema.optional(
    Schema.Struct({
      totalItems: Schema.optional(Schema.Number),
      selfLink: Schema.optional(Schema.String),
    }),
  ),
  url: Schema.optional(Schema.String),
}).annotate({ identifier: "Blog" });

export interface PostUserInfosList {
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** The list of Posts with User information for the post, for this Blog. */
  items?: ReadonlyArray<PostUserInfo>;
  /** The kind of this entity. Always blogger#postList. */
  kind?: string;
}

export const PostUserInfosList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(PostUserInfo)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "PostUserInfosList" });

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

export const Pageviews = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export interface BlogPerUserInfo {
  /** ID of the User. */
  userId?: string;
  /** True if the user has Admin level access to the blog. */
  hasAdminAccess?: boolean;
  /** The kind of this entity. Always blogger#blogPerUserInfo. */
  kind?: string;
  /** Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER). */
  role?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  /** The Photo Album Key for the user when adding photos to the blog. */
  photosAlbumKey?: string;
  /** ID of the Blog resource. */
  blogId?: string;
}

export const BlogPerUserInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.optional(Schema.String),
  hasAdminAccess: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  role: Schema.optional(Schema.String),
  photosAlbumKey: Schema.optional(Schema.String),
  blogId: Schema.optional(Schema.String),
}).annotate({ identifier: "BlogPerUserInfo" });

export interface BlogUserInfo {
  /** Information about a User for the Blog. */
  blog_user_info?: BlogPerUserInfo;
  /** The Blog resource. */
  blog?: Blog;
  /** The kind of this entity. Always blogger#blogUserInfo. */
  kind?: string;
}

export const BlogUserInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blog_user_info: Schema.optional(BlogPerUserInfo),
  blog: Schema.optional(Blog),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "BlogUserInfo" });

export interface BlogList {
  /** The list of Blogs this user has Authorship or Admin rights over. */
  items?: ReadonlyArray<Blog>;
  /** Admin level list of blog per-user information. */
  blogUserInfos?: ReadonlyArray<BlogUserInfo>;
  /** The kind of this entity. Always blogger#blogList. */
  kind?: string;
}

export const BlogList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(Blog)),
  blogUserInfos: Schema.optional(Schema.Array(BlogUserInfo)),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "BlogList" });

export interface CommentList {
  /** The List of Comments for a Post. */
  items?: ReadonlyArray<Comment>;
  /** The kind of this entry. Always blogger#commentList. */
  kind?: string;
  /** Etag of the response. */
  etag?: string;
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** Pagination token to fetch the previous page, if one exists. */
  prevPageToken?: string;
}

export const CommentList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.optional(Schema.Array(Comment)),
  kind: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  prevPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "CommentList" });

export interface PostList {
  /** Etag of the response. */
  etag?: string;
  /** Pagination token to fetch the next page, if one exists. */
  nextPageToken?: string;
  /** Pagination token to fetch the previous page, if one exists. */
  prevPageToken?: string;
  /** The kind of this entity. Always blogger#postList. */
  kind?: string;
  /** The list of Posts for this Blog. */
  items?: ReadonlyArray<Post>;
}

export const PostList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  nextPageToken: Schema.optional(Schema.String),
  prevPageToken: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Post)),
}).annotate({ identifier: "PostList" });

// ==========================================================================
// Operations
// ==========================================================================

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

export type GetPageViewsError = DefaultErrors;

/** Gets page views by blog id. */
export const getPageViews: API.OperationMethod<
  GetPageViewsRequest,
  GetPageViewsResponse,
  GetPageViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPageViewsRequest,
  output: GetPageViewsResponse,
  errors: [],
}));

export interface GetPostUserInfosRequest {
  userId: string;
  blogId: string;
  maxComments?: number;
  postId: string;
}

export const GetPostUserInfosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.HttpPath("userId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    maxComments: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("maxComments"),
    ),
    postId: Schema.String.pipe(T.HttpPath("postId")),
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

export type GetPostUserInfosError = DefaultErrors;

/** Gets one post and user info pair, by post_id and user_id. */
export const getPostUserInfos: API.OperationMethod<
  GetPostUserInfosRequest,
  GetPostUserInfosResponse,
  GetPostUserInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPostUserInfosRequest,
  output: GetPostUserInfosResponse,
  errors: [],
}));

export interface ListPostUserInfosRequest {
  userId: string;
  endDate?: string;
  labels?: string;
  fetchBodies?: boolean;
  maxResults?: number;
  startDate?: string;
  pageToken?: string;
  status?: "LIVE" | "DRAFT" | "SCHEDULED" | "SOFT_TRASHED" | (string & {})[];
  orderBy?: "ORDER_BY_UNSPECIFIED" | "PUBLISHED" | "UPDATED" | (string & {});
  blogId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const ListPostUserInfosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String.pipe(T.HttpPath("userId")),
    endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
    labels: Schema.optional(Schema.String).pipe(T.HttpQuery("labels")),
    fetchBodies: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("fetchBodies"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/users/{userId}/blogs/{blogId}/posts" }),
    svc,
  ) as unknown as Schema.Schema<ListPostUserInfosRequest>;

export type ListPostUserInfosResponse = PostUserInfosList;
export const ListPostUserInfosResponse =
  /*@__PURE__*/ /*#__PURE__*/ PostUserInfosList;

export type ListPostUserInfosError = DefaultErrors;

/** Lists post and user info pairs. */
export const listPostUserInfos: API.PaginatedOperationMethod<
  ListPostUserInfosRequest,
  ListPostUserInfosResponse,
  ListPostUserInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPostUserInfosRequest,
  output: ListPostUserInfosResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface InsertPostsRequest {
  fetchBody?: boolean;
  fetchImages?: boolean;
  blogId: string;
  isDraft?: boolean;
  /** Request body */
  body?: Post;
}

export const InsertPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  isDraft: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("isDraft")),
  body: Schema.optional(Post).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v3/blogs/{blogId}/posts", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertPostsRequest>;

export type InsertPostsResponse = Post;
export const InsertPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type InsertPostsError = DefaultErrors;

/** Inserts a post. */
export const insertPosts: API.OperationMethod<
  InsertPostsRequest,
  InsertPostsResponse,
  InsertPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPostsRequest,
  output: InsertPostsResponse,
  errors: [],
}));

export interface PatchPostsRequest {
  blogId: string;
  fetchImages?: boolean;
  revert?: boolean;
  postId: string;
  fetchBody?: boolean;
  maxComments?: number;
  publish?: boolean;
  /** Request body */
  body?: Post;
}

export const PatchPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
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

export type PatchPostsError = DefaultErrors;

/** Patches a post. */
export const patchPosts: API.OperationMethod<
  PatchPostsRequest,
  PatchPostsResponse,
  PatchPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPostsRequest,
  output: PatchPostsResponse,
  errors: [],
}));

export interface GetByPathPostsRequest {
  path: string;
  blogId: string;
  maxComments?: number;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const GetByPathPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.String.pipe(T.HttpQuery("path")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/bypath" }),
  svc,
) as unknown as Schema.Schema<GetByPathPostsRequest>;

export type GetByPathPostsResponse = Post;
export const GetByPathPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type GetByPathPostsError = DefaultErrors;

/** Gets a post by path. */
export const getByPathPosts: API.OperationMethod<
  GetByPathPostsRequest,
  GetByPathPostsResponse,
  GetByPathPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetByPathPostsRequest,
  output: GetByPathPostsResponse,
  errors: [],
}));

export interface RevertPostsRequest {
  postId: string;
  blogId: string;
}

export const RevertPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postId: Schema.String.pipe(T.HttpPath("postId")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
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

export type RevertPostsError = DefaultErrors;

/** Reverts a published or scheduled post to draft state. */
export const revertPosts: API.OperationMethod<
  RevertPostsRequest,
  RevertPostsResponse,
  RevertPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertPostsRequest,
  output: RevertPostsResponse,
  errors: [],
}));

export interface UpdatePostsRequest {
  maxComments?: number;
  publish?: boolean;
  fetchImages?: boolean;
  blogId: string;
  postId: string;
  fetchBody?: boolean;
  revert?: boolean;
  /** Request body */
  body?: Post;
}

export const UpdatePostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
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

export type UpdatePostsError = DefaultErrors;

/** Updates a post by blog id and post id. */
export const updatePosts: API.OperationMethod<
  UpdatePostsRequest,
  UpdatePostsResponse,
  UpdatePostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePostsRequest,
  output: UpdatePostsResponse,
  errors: [],
}));

export interface GetPostsRequest {
  postId: string;
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
}

export const GetPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postId: Schema.String.pipe(T.HttpPath("postId")),
  fetchBody: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBody")),
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  maxComments: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxComments")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/{postId}" }),
  svc,
) as unknown as Schema.Schema<GetPostsRequest>;

export type GetPostsResponse = Post;
export const GetPostsResponse = /*@__PURE__*/ /*#__PURE__*/ Post;

export type GetPostsError = DefaultErrors;

/** Gets a post by blog id and post id */
export const getPosts: API.OperationMethod<
  GetPostsRequest,
  GetPostsResponse,
  GetPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPostsRequest,
  output: GetPostsResponse,
  errors: [],
}));

export interface ListPostsRequest {
  fetchImages?: boolean;
  fetchBodies?: boolean;
  maxResults?: number;
  labels?: string;
  endDate?: string;
  blogId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  orderBy?: "ORDER_BY_UNSPECIFIED" | "PUBLISHED" | "UPDATED" | (string & {});
  pageToken?: string;
  startDate?: string;
  status?: "LIVE" | "DRAFT" | "SCHEDULED" | "SOFT_TRASHED" | (string & {})[];
  /** Sort direction applied to post list. */
  sortOption?:
    | "SORT_OPTION_UNSPECIFIED"
    | "DESCENDING"
    | "ASCENDING"
    | (string & {});
}

export const ListPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fetchImages: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchImages")),
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  labels: Schema.optional(Schema.String).pipe(T.HttpQuery("labels")),
  endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
  status: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("status"),
  ),
  sortOption: Schema.optional(Schema.String).pipe(T.HttpQuery("sortOption")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts" }),
  svc,
) as unknown as Schema.Schema<ListPostsRequest>;

export type ListPostsResponse = PostList;
export const ListPostsResponse = /*@__PURE__*/ /*#__PURE__*/ PostList;

export type ListPostsError = DefaultErrors;

/** Lists posts. */
export const listPosts: API.PaginatedOperationMethod<
  ListPostsRequest,
  ListPostsResponse,
  ListPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPostsRequest,
  output: ListPostsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface DeletePostsRequest {
  postId: string;
  /** Move to Trash if possible */
  useTrash?: boolean;
  blogId: string;
}

export const DeletePostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postId: Schema.String.pipe(T.HttpPath("postId")),
  useTrash: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("useTrash")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
}).pipe(
  T.Http({ method: "DELETE", path: "v3/blogs/{blogId}/posts/{postId}" }),
  svc,
) as unknown as Schema.Schema<DeletePostsRequest>;

export interface DeletePostsResponse {}
export const DeletePostsResponse: Schema.Schema<DeletePostsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePostsResponse>;

export type DeletePostsError = DefaultErrors;

/** Deletes a post by blog id and post id. */
export const deletePosts: API.OperationMethod<
  DeletePostsRequest,
  DeletePostsResponse,
  DeletePostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePostsRequest,
  output: DeletePostsResponse,
  errors: [],
}));

export interface PublishPostsRequest {
  postId: string;
  publishDate?: string;
  blogId: string;
}

export const PublishPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postId: Schema.String.pipe(T.HttpPath("postId")),
  publishDate: Schema.optional(Schema.String).pipe(T.HttpQuery("publishDate")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
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

export type PublishPostsError = DefaultErrors;

/** Publishes a post. */
export const publishPosts: API.OperationMethod<
  PublishPostsRequest,
  PublishPostsResponse,
  PublishPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishPostsRequest,
  output: PublishPostsResponse,
  errors: [],
}));

export interface SearchPostsRequest {
  q: string;
  orderBy?: "ORDER_BY_UNSPECIFIED" | "PUBLISHED" | "UPDATED" | (string & {});
  blogId: string;
  fetchBodies?: boolean;
}

export const SearchPostsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  q: Schema.String.pipe(T.HttpQuery("q")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/search" }),
  svc,
) as unknown as Schema.Schema<SearchPostsRequest>;

export type SearchPostsResponse = PostList;
export const SearchPostsResponse = /*@__PURE__*/ /*#__PURE__*/ PostList;

export type SearchPostsError = DefaultErrors;

/** Searches for posts matching given query terms in the specified blog. */
export const searchPosts: API.OperationMethod<
  SearchPostsRequest,
  SearchPostsResponse,
  SearchPostsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchPostsRequest,
  output: SearchPostsResponse,
  errors: [],
}));

export interface GetBlogUserInfosRequest {
  blogId: string;
  userId: string;
  maxPosts?: number;
}

export const GetBlogUserInfosRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    maxPosts: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxPosts")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/users/{userId}/blogs/{blogId}" }),
    svc,
  ) as unknown as Schema.Schema<GetBlogUserInfosRequest>;

export type GetBlogUserInfosResponse = BlogUserInfo;
export const GetBlogUserInfosResponse =
  /*@__PURE__*/ /*#__PURE__*/ BlogUserInfo;

export type GetBlogUserInfosError = DefaultErrors;

/** Gets one blog and user info pair by blog id and user id. */
export const getBlogUserInfos: API.OperationMethod<
  GetBlogUserInfosRequest,
  GetBlogUserInfosResponse,
  GetBlogUserInfosError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBlogUserInfosRequest,
  output: GetBlogUserInfosResponse,
  errors: [],
}));

export interface UpdatePagesRequest {
  revert?: boolean;
  blogId: string;
  pageId: string;
  publish?: boolean;
  /** Request body */
  body?: Page;
}

export const UpdatePagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
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

export type UpdatePagesError = DefaultErrors;

/** Updates a page by blog id and page id. */
export const updatePages: API.OperationMethod<
  UpdatePagesRequest,
  UpdatePagesResponse,
  UpdatePagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePagesRequest,
  output: UpdatePagesResponse,
  errors: [],
}));

export interface InsertPagesRequest {
  blogId: string;
  isDraft?: boolean;
  /** Request body */
  body?: Page;
}

export const InsertPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  isDraft: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("isDraft")),
  body: Schema.optional(Page).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v3/blogs/{blogId}/pages", hasBody: true }),
  svc,
) as unknown as Schema.Schema<InsertPagesRequest>;

export type InsertPagesResponse = Page;
export const InsertPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type InsertPagesError = DefaultErrors;

/** Inserts a page. */
export const insertPages: API.OperationMethod<
  InsertPagesRequest,
  InsertPagesResponse,
  InsertPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertPagesRequest,
  output: InsertPagesResponse,
  errors: [],
}));

export interface PatchPagesRequest {
  blogId: string;
  pageId: string;
  publish?: boolean;
  revert?: boolean;
  /** Request body */
  body?: Page;
}

export const PatchPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  publish: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("publish")),
  revert: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("revert")),
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

export type PatchPagesError = DefaultErrors;

/** Patches a page. */
export const patchPages: API.OperationMethod<
  PatchPagesRequest,
  PatchPagesResponse,
  PatchPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPagesRequest,
  output: PatchPagesResponse,
  errors: [],
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

export type RevertPagesError = DefaultErrors;

/** Reverts a published or scheduled page to draft state. */
export const revertPages: API.OperationMethod<
  RevertPagesRequest,
  RevertPagesResponse,
  RevertPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertPagesRequest,
  output: RevertPagesResponse,
  errors: [],
}));

export interface DeletePagesRequest {
  blogId: string;
  pageId: string;
  /** Move to Trash if possible */
  useTrash?: boolean;
}

export const DeletePagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  useTrash: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("useTrash")),
}).pipe(
  T.Http({ method: "DELETE", path: "v3/blogs/{blogId}/pages/{pageId}" }),
  svc,
) as unknown as Schema.Schema<DeletePagesRequest>;

export interface DeletePagesResponse {}
export const DeletePagesResponse: Schema.Schema<DeletePagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
    {},
  ) as any as Schema.Schema<DeletePagesResponse>;

export type DeletePagesError = DefaultErrors;

/** Deletes a page by blog id and page id. */
export const deletePages: API.OperationMethod<
  DeletePagesRequest,
  DeletePagesResponse,
  DeletePagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePagesRequest,
  output: DeletePagesResponse,
  errors: [],
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

export type PublishPagesError = DefaultErrors;

/** Publishes a page. */
export const publishPages: API.OperationMethod<
  PublishPagesRequest,
  PublishPagesResponse,
  PublishPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishPagesRequest,
  output: PublishPagesResponse,
  errors: [],
}));

export interface GetPagesRequest {
  blogId: string;
  pageId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const GetPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  pageId: Schema.String.pipe(T.HttpPath("pageId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/pages/{pageId}" }),
  svc,
) as unknown as Schema.Schema<GetPagesRequest>;

export type GetPagesResponse = Page;
export const GetPagesResponse = /*@__PURE__*/ /*#__PURE__*/ Page;

export type GetPagesError = DefaultErrors;

/** Gets a page by blog id and page id. */
export const getPages: API.OperationMethod<
  GetPagesRequest,
  GetPagesResponse,
  GetPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPagesRequest,
  output: GetPagesResponse,
  errors: [],
}));

export interface ListPagesRequest {
  blogId: string;
  fetchBodies?: boolean;
  maxResults?: number;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  pageToken?: string;
  status?: "LIVE" | "DRAFT" | "SOFT_TRASHED" | (string & {})[];
}

export const ListPagesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  status: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("status"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/pages" }),
  svc,
) as unknown as Schema.Schema<ListPagesRequest>;

export type ListPagesResponse = PageList;
export const ListPagesResponse = /*@__PURE__*/ /*#__PURE__*/ PageList;

export type ListPagesError = DefaultErrors;

/** Lists pages. */
export const listPages: API.PaginatedOperationMethod<
  ListPagesRequest,
  ListPagesResponse,
  ListPagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPagesRequest,
  output: ListPagesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListByBlogCommentsRequest {
  blogId: string;
  maxResults?: number;
  fetchBodies?: boolean;
  startDate?: string;
  pageToken?: string;
  status?: "LIVE" | "EMPTIED" | "PENDING" | "SPAM" | (string & {})[];
  endDate?: string;
}

export const ListByBlogCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    fetchBodies: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("fetchBodies"),
    ),
    startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
    endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/blogs/{blogId}/comments" }),
    svc,
  ) as unknown as Schema.Schema<ListByBlogCommentsRequest>;

export type ListByBlogCommentsResponse = CommentList;
export const ListByBlogCommentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommentList;

export type ListByBlogCommentsError = DefaultErrors;

/** Lists comments by blog. */
export const listByBlogComments: API.PaginatedOperationMethod<
  ListByBlogCommentsRequest,
  ListByBlogCommentsResponse,
  ListByBlogCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListByBlogCommentsRequest,
  output: ListByBlogCommentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListCommentsRequest {
  startDate?: string;
  pageToken?: string;
  status?: "LIVE" | "EMPTIED" | "PENDING" | "SPAM" | (string & {});
  blogId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  endDate?: string;
  postId: string;
  maxResults?: number;
  fetchBodies?: boolean;
}

export const ListCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startDate: Schema.optional(Schema.String).pipe(T.HttpQuery("startDate")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  endDate: Schema.optional(Schema.String).pipe(T.HttpQuery("endDate")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  fetchBodies: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("fetchBodies")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}/posts/{postId}/comments" }),
  svc,
) as unknown as Schema.Schema<ListCommentsRequest>;

export type ListCommentsResponse = CommentList;
export const ListCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ CommentList;

export type ListCommentsError = DefaultErrors;

/** Lists comments. */
export const listComments: API.PaginatedOperationMethod<
  ListCommentsRequest,
  ListCommentsResponse,
  ListCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCommentsRequest,
  output: ListCommentsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface RemoveContentCommentsRequest {
  blogId: string;
  commentId: string;
  postId: string;
}

export const RemoveContentCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    commentId: Schema.String.pipe(T.HttpPath("commentId")),
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

export type RemoveContentCommentsError = DefaultErrors;

/** Removes the content of a comment by blog id, post id and comment id. */
export const removeContentComments: API.OperationMethod<
  RemoveContentCommentsRequest,
  RemoveContentCommentsResponse,
  RemoveContentCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveContentCommentsRequest,
  output: RemoveContentCommentsResponse,
  errors: [],
}));

export interface ApproveCommentsRequest {
  postId: string;
  blogId: string;
  commentId: string;
}

export const ApproveCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    postId: Schema.String.pipe(T.HttpPath("postId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
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

export type ApproveCommentsError = DefaultErrors;

/** Marks a comment as not spam by blog id, post id and comment id. */
export const approveComments: API.OperationMethod<
  ApproveCommentsRequest,
  ApproveCommentsResponse,
  ApproveCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveCommentsRequest,
  output: ApproveCommentsResponse,
  errors: [],
}));

export interface GetCommentsRequest {
  blogId: string;
  commentId: string;
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
  postId: string;
}

export const GetCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  postId: Schema.String.pipe(T.HttpPath("postId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "v3/blogs/{blogId}/posts/{postId}/comments/{commentId}",
  }),
  svc,
) as unknown as Schema.Schema<GetCommentsRequest>;

export type GetCommentsResponse = Comment;
export const GetCommentsResponse = /*@__PURE__*/ /*#__PURE__*/ Comment;

export type GetCommentsError = DefaultErrors;

/** Gets a comment by id. */
export const getComments: API.OperationMethod<
  GetCommentsRequest,
  GetCommentsResponse,
  GetCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCommentsRequest,
  output: GetCommentsResponse,
  errors: [],
}));

export interface DeleteCommentsRequest {
  postId: string;
  blogId: string;
  commentId: string;
}

export const DeleteCommentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postId: Schema.String.pipe(T.HttpPath("postId")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  commentId: Schema.String.pipe(T.HttpPath("commentId")),
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

export type DeleteCommentsError = DefaultErrors;

/** Deletes a comment by blog id, post id and comment id. */
export const deleteComments: API.OperationMethod<
  DeleteCommentsRequest,
  DeleteCommentsResponse,
  DeleteCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCommentsRequest,
  output: DeleteCommentsResponse,
  errors: [],
}));

export interface MarkAsSpamCommentsRequest {
  postId: string;
  blogId: string;
  commentId: string;
}

export const MarkAsSpamCommentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postId: Schema.String.pipe(T.HttpPath("postId")),
    blogId: Schema.String.pipe(T.HttpPath("blogId")),
    commentId: Schema.String.pipe(T.HttpPath("commentId")),
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

export type MarkAsSpamCommentsError = DefaultErrors;

/** Marks a comment as spam by blog id, post id and comment id. */
export const markAsSpamComments: API.OperationMethod<
  MarkAsSpamCommentsRequest,
  MarkAsSpamCommentsResponse,
  MarkAsSpamCommentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MarkAsSpamCommentsRequest,
  output: MarkAsSpamCommentsResponse,
  errors: [],
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

export type GetByUrlBlogsError = DefaultErrors;

/** Gets a blog by url. */
export const getByUrlBlogs: API.OperationMethod<
  GetByUrlBlogsRequest,
  GetByUrlBlogsResponse,
  GetByUrlBlogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetByUrlBlogsRequest,
  output: GetByUrlBlogsResponse,
  errors: [],
}));

export interface GetBlogsRequest {
  maxPosts?: number;
  blogId: string;
  /** Unspecified is interpreted as READER. */
  view?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "READER"
    | "AUTHOR"
    | "ADMIN"
    | (string & {});
}

export const GetBlogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maxPosts: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxPosts")),
  blogId: Schema.String.pipe(T.HttpPath("blogId")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v3/blogs/{blogId}" }),
  svc,
) as unknown as Schema.Schema<GetBlogsRequest>;

export type GetBlogsResponse = Blog;
export const GetBlogsResponse = /*@__PURE__*/ /*#__PURE__*/ Blog;

export type GetBlogsError = DefaultErrors;

/** Gets a blog by id. */
export const getBlogs: API.OperationMethod<
  GetBlogsRequest,
  GetBlogsResponse,
  GetBlogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBlogsRequest,
  output: GetBlogsResponse,
  errors: [],
}));

export interface ListByUserBlogsRequest {
  fetchUserInfo?: boolean;
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
  userId: string;
  /** Default value of status is LIVE. */
  status?: "LIVE" | "DELETED" | (string & {})[];
}

export const ListByUserBlogsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    fetchUserInfo: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("fetchUserInfo"),
    ),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    role: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("role"),
    ),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    status: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("status"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "v3/users/{userId}/blogs" }),
  svc,
) as unknown as Schema.Schema<ListByUserBlogsRequest>;

export type ListByUserBlogsResponse = BlogList;
export const ListByUserBlogsResponse = /*@__PURE__*/ /*#__PURE__*/ BlogList;

export type ListByUserBlogsError = DefaultErrors;

/** Lists blogs by user. */
export const listByUserBlogs: API.OperationMethod<
  ListByUserBlogsRequest,
  ListByUserBlogsResponse,
  ListByUserBlogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListByUserBlogsRequest,
  output: ListByUserBlogsResponse,
  errors: [],
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

export type GetUsersError = DefaultErrors;

/** Gets one user by user_id. */
export const getUsers: API.OperationMethod<
  GetUsersRequest,
  GetUsersResponse,
  GetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersRequest,
  output: GetUsersResponse,
  errors: [],
}));
