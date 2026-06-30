// ==========================================================================
// Books API (books v1)
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
  name: "books",
  version: "v1",
  rootUrl: "https://books.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DownloadAccessRestriction {
  /** Client app identifier for verification. Download access and client-validation only. */
  source?: string;
  /** If deviceAllowed, whether access was just acquired with this request. */
  justAcquired?: boolean;
  /** Whether this volume has any download access restrictions. */
  restricted?: boolean;
  /** If restricted, whether access is granted for this (user, device, volume). */
  deviceAllowed?: boolean;
  /** Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS */
  reasonCode?: string;
  /** If restricted, the number of content download licenses already acquired (including the requesting client, if licensed). */
  downloadsAcquired?: number;
  /** Identifies the volume for which this entry applies. */
  volumeId?: string;
  /** Error/warning message. */
  message?: string;
  /** Resource type. */
  kind?: string;
  /** Client nonce for verification. Download access and client-validation only. */
  nonce?: string;
  /** If restricted, the maximum number of content download licenses for this volume. */
  maxDownloadDevices?: number;
  /** Response signature. */
  signature?: string;
}

export const DownloadAccessRestriction: Schema.Schema<DownloadAccessRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    justAcquired: Schema.optional(Schema.Boolean),
    restricted: Schema.optional(Schema.Boolean),
    deviceAllowed: Schema.optional(Schema.Boolean),
    reasonCode: Schema.optional(Schema.String),
    downloadsAcquired: Schema.optional(Schema.Number),
    volumeId: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    nonce: Schema.optional(Schema.String),
    maxDownloadDevices: Schema.optional(Schema.Number),
    signature: Schema.optional(Schema.String),
  }).annotate({ identifier: "DownloadAccessRestriction" });

export interface ConcurrentAccessRestriction {
  /** Whether this volume has any concurrent access restrictions. */
  restricted?: boolean;
  /** Client app identifier for verification. Download access and client-validation only. */
  source?: string;
  /** Time in seconds for license auto-expiration. */
  timeWindowSeconds?: number;
  /** Whether access is granted for this (user, device, volume). */
  deviceAllowed?: boolean;
  /** Error/warning reason code. */
  reasonCode?: string;
  /** Identifies the volume for which this entry applies. */
  volumeId?: string;
  /** The maximum number of concurrent access licenses for this volume. */
  maxConcurrentDevices?: number;
  /** Response signature. */
  signature?: string;
  /** Client nonce for verification. Download access and client-validation only. */
  nonce?: string;
  /** Error/warning message. */
  message?: string;
  /** Resource type. */
  kind?: string;
}

export const ConcurrentAccessRestriction: Schema.Schema<ConcurrentAccessRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restricted: Schema.optional(Schema.Boolean),
    source: Schema.optional(Schema.String),
    timeWindowSeconds: Schema.optional(Schema.Number),
    deviceAllowed: Schema.optional(Schema.Boolean),
    reasonCode: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    maxConcurrentDevices: Schema.optional(Schema.Number),
    signature: Schema.optional(Schema.String),
    nonce: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConcurrentAccessRestriction" });

export interface RequestAccessData {
  /** A download access response. */
  downloadAccess?: DownloadAccessRestriction;
  /** A concurrent access response. */
  concurrentAccess?: ConcurrentAccessRestriction;
  /** Resource type. */
  kind?: string;
}

export const RequestAccessData: Schema.Schema<RequestAccessData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    downloadAccess: Schema.optional(DownloadAccessRestriction),
    concurrentAccess: Schema.optional(ConcurrentAccessRestriction),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestAccessData" });

export interface BooksCloudloadingResource {
  volumeId?: string;
  title?: string;
  author?: string;
  processingState?: string;
}

export const BooksCloudloadingResource: Schema.Schema<BooksCloudloadingResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeId: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    processingState: Schema.optional(Schema.String),
  }).annotate({ identifier: "BooksCloudloadingResource" });

export interface Metadata {
  /** Resource type. */
  kind?: string;
  /** A list of offline dictionary metadata. */
  items?: ReadonlyArray<{
    language?: string;
    encrypted_key?: string;
    version?: string;
    download_url?: string;
    size?: string;
  }>;
}

export const Metadata: Schema.Schema<Metadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          language: Schema.optional(Schema.String),
          encrypted_key: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          download_url: Schema.optional(Schema.String),
          size: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).annotate({ identifier: "Metadata" });

export interface Usersettings {
  /** Resource type. */
  kind?: string;
  /** User settings in sub-objects, each for different purposes. */
  notesExport?: { folderName?: string; isEnabled?: boolean };
  notification?: {
    moreFromSeries?: { opted_state?: string };
    moreFromAuthors?: { opted_state?: string };
    matchMyInterests?: { opted_state?: string };
    priceDrop?: { opted_state?: string };
    rewardExpirations?: { opted_state?: string };
  };
}

export const Usersettings: Schema.Schema<Usersettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    notesExport: Schema.optional(
      Schema.Struct({
        folderName: Schema.optional(Schema.String),
        isEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
    notification: Schema.optional(
      Schema.Struct({
        moreFromSeries: Schema.optional(
          Schema.Struct({ opted_state: Schema.optional(Schema.String) }),
        ),
        moreFromAuthors: Schema.optional(
          Schema.Struct({ opted_state: Schema.optional(Schema.String) }),
        ),
        matchMyInterests: Schema.optional(
          Schema.Struct({ opted_state: Schema.optional(Schema.String) }),
        ),
        priceDrop: Schema.optional(
          Schema.Struct({ opted_state: Schema.optional(Schema.String) }),
        ),
        rewardExpirations: Schema.optional(
          Schema.Struct({ opted_state: Schema.optional(Schema.String) }),
        ),
      }),
    ),
  }).annotate({ identifier: "Usersettings" });

export interface BooksAnnotationsRange {
  /** The offset from the starting position. */
  startOffset?: string;
  /** The ending position for the range. */
  endPosition?: string;
  /** The starting position for the range. */
  startPosition?: string;
  /** The offset from the ending position. */
  endOffset?: string;
}

export const BooksAnnotationsRange: Schema.Schema<BooksAnnotationsRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startOffset: Schema.optional(Schema.String),
    endPosition: Schema.optional(Schema.String),
    startPosition: Schema.optional(Schema.String),
    endOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "BooksAnnotationsRange" });

export interface Volumeannotation {
  /** The Volume this annotation is for. */
  volumeId?: string;
  /** Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format). */
  updated?: string;
  /** Resource Type */
  kind?: string;
  /** Data for this annotation. */
  data?: string;
  /** Indicates that this annotation is deleted. */
  deleted?: boolean;
  /** Link to get data for this annotation. */
  annotationDataLink?: string;
  /** URL to this resource. */
  selfLink?: string;
  /** Pages the annotation spans. */
  pageIds?: ReadonlyArray<string>;
  /** The type of annotation this is. */
  annotationType?: string;
  /** The Layer this annotation is for. */
  layerId?: string;
  /** Excerpt from the volume. */
  selectedText?: string;
  /** The content ranges to identify the selected text. */
  contentRanges?: {
    cfiRange?: BooksAnnotationsRange;
    contentVersion?: string;
    gbTextRange?: BooksAnnotationsRange;
    gbImageRange?: BooksAnnotationsRange;
  };
  /** Unique id of this volume annotation. */
  id?: string;
  /** The annotation data id for this volume annotation. */
  annotationDataId?: string;
}

export const Volumeannotation: Schema.Schema<Volumeannotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeId: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    annotationDataLink: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    pageIds: Schema.optional(Schema.Array(Schema.String)),
    annotationType: Schema.optional(Schema.String),
    layerId: Schema.optional(Schema.String),
    selectedText: Schema.optional(Schema.String),
    contentRanges: Schema.optional(
      Schema.Struct({
        cfiRange: Schema.optional(BooksAnnotationsRange),
        contentVersion: Schema.optional(Schema.String),
        gbTextRange: Schema.optional(BooksAnnotationsRange),
        gbImageRange: Schema.optional(BooksAnnotationsRange),
      }),
    ),
    id: Schema.optional(Schema.String),
    annotationDataId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volumeannotation" });

export interface ReadingPosition {
  /** Volume id associated with this reading position. */
  volumeId?: string;
  /** Position in a volume for image-based content. */
  gbImagePosition?: string;
  /** Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution). */
  updated?: string;
  /** Position in a volume for text-based content. */
  gbTextPosition?: string;
  /** Position in a PDF file. */
  pdfPosition?: string;
  /** Resource type for a reading position. */
  kind?: string;
  /** Position in an EPUB as a CFI. */
  epubCfiPosition?: string;
}

export const ReadingPosition: Schema.Schema<ReadingPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeId: Schema.optional(Schema.String),
    gbImagePosition: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    gbTextPosition: Schema.optional(Schema.String),
    pdfPosition: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    epubCfiPosition: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadingPosition" });

export interface Review {
  /** Date of this review. */
  date?: string;
  /** Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED. */
  rating?: string;
  /** Resource type for a review. */
  kind?: string;
  /** URL for the full review text, for reviews gathered from the web. */
  fullTextUrl?: string;
  /** Volume that this review is for. */
  volumeId?: string;
  /** Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER. */
  type?: string;
  /** Title for this review. */
  title?: string;
  /** Author of this review. */
  author?: { displayName?: string };
  /** Review text. */
  content?: string;
  /** Information regarding the source of this review, when the review is not from a Google Books user. */
  source?: { description?: string; url?: string; extraDescription?: string };
}

export const Review: Schema.Schema<Review> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Schema.String),
    rating: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    fullTextUrl: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    author: Schema.optional(
      Schema.Struct({ displayName: Schema.optional(Schema.String) }),
    ),
    content: Schema.optional(Schema.String),
    source: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
        extraDescription: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "Review" });

export interface Volumeseriesinfo {
  volumeSeries?: ReadonlyArray<{
    seriesBookType?: string;
    issue?: ReadonlyArray<{
      issueOrderNumber?: number;
      issueDisplayNumber?: string;
    }>;
    orderNumber?: number;
    seriesId?: string;
  }>;
  /** The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber. */
  bookDisplayNumber?: string;
  /** Resource type. */
  kind?: string;
  /** Short book title in the context of the series. */
  shortSeriesBookTitle?: string;
}

export const Volumeseriesinfo: Schema.Schema<Volumeseriesinfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeSeries: Schema.optional(
      Schema.Array(
        Schema.Struct({
          seriesBookType: Schema.optional(Schema.String),
          issue: Schema.optional(
            Schema.Array(
              Schema.Struct({
                issueOrderNumber: Schema.optional(Schema.Number),
                issueDisplayNumber: Schema.optional(Schema.String),
              }),
            ),
          ),
          orderNumber: Schema.optional(Schema.Number),
          seriesId: Schema.optional(Schema.String),
        }),
      ),
    ),
    bookDisplayNumber: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    shortSeriesBookTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volumeseriesinfo" });

export interface Volume {
  /** Opaque identifier for a specific version of a volume resource. (In LITE projection) */
  etag?: string;
  /** Recommendation related information for this volume. */
  recommendedInfo?: { explanation?: string };
  /** Search result information related to this volume. */
  searchInfo?: { textSnippet?: string };
  /** Resource type for a volume. (In LITE projection.) */
  kind?: string;
  /** Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.). */
  accessInfo?: {
    viewability?: string;
    quoteSharingAllowed?: boolean;
    accessViewStatus?: string;
    explicitOfflineLicenseManagement?: boolean;
    pdf?: {
      acsTokenLink?: string;
      isAvailable?: boolean;
      downloadLink?: string;
    };
    embeddable?: boolean;
    country?: string;
    driveImportedContentLink?: string;
    downloadAccess?: DownloadAccessRestriction;
    textToSpeechPermission?: string;
    viewOrderUrl?: string;
    epub?: {
      downloadLink?: string;
      acsTokenLink?: string;
      isAvailable?: boolean;
    };
    webReaderLink?: string;
    publicDomain?: boolean;
  };
  /** Unique identifier for a volume. (In LITE projection.) */
  id?: string;
  /** What layers exist in this volume and high level information about them. */
  layerInfo?: {
    layers?: ReadonlyArray<{
      layerId?: string;
      volumeAnnotationsVersion?: string;
    }>;
  };
  /** User specific information related to this volume. (e.g. page this user last read or whether they purchased this book) */
  userInfo?: {
    rentalState?: string;
    acquisitionType?: number;
    isFamilySharedFromUser?: boolean;
    isPreordered?: boolean;
    updated?: string;
    rentalPeriod?: { endUtcSec?: string; startUtcSec?: string };
    copy?: {
      remainingCharacterCount?: number;
      limitType?: string;
      allowedCharacterCount?: number;
      updated?: string;
    };
    readingPosition?: ReadingPosition;
    review?: Review;
    acquiredTime?: string;
    isFamilySharingAllowed?: boolean;
    entitlementType?: number;
    isInMyBooks?: boolean;
    familySharing?: {
      familyRole?: string;
      isSharingAllowed?: boolean;
      isSharingDisabledByFop?: boolean;
    };
    isFamilySharedToUser?: boolean;
    isPurchased?: boolean;
    isFamilySharingDisabledByFop?: boolean;
    isUploaded?: boolean;
    userUploadedVolumeInfo?: { processingState?: string };
  };
  /** Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries). */
  saleInfo?: {
    retailPrice?: { amount?: number; currencyCode?: string };
    buyLink?: string;
    offers?: ReadonlyArray<{
      giftable?: boolean;
      rentalDuration?: { unit?: string; count?: number };
      retailPrice?: { currencyCode?: string; amountInMicros?: number };
      finskyOfferType?: number;
      listPrice?: { currencyCode?: string; amountInMicros?: number };
    }>;
    country?: string;
    onSaleDate?: string;
    listPrice?: { currencyCode?: string; amount?: number };
    saleability?: string;
    isEbook?: boolean;
  };
  /** General volume information. */
  volumeInfo?: {
    allowAnonLogging?: boolean;
    subtitle?: string;
    maturityRating?: string;
    authors?: ReadonlyArray<string>;
    printedPageCount?: number;
    pageCount?: number;
    dimensions?: { thickness?: string; height?: string; width?: string };
    publisher?: string;
    mainCategory?: string;
    publishedDate?: string;
    language?: string;
    seriesInfo?: Volumeseriesinfo;
    infoLink?: string;
    samplePageCount?: number;
    averageRating?: number;
    readingModes?: { text?: boolean; image?: boolean };
    categories?: ReadonlyArray<string>;
    printType?: string;
    previewLink?: string;
    title?: string;
    imageLinks?: {
      large?: string;
      medium?: string;
      small?: string;
      smallThumbnail?: string;
      thumbnail?: string;
      extraLarge?: string;
    };
    comicsContent?: boolean;
    industryIdentifiers?: ReadonlyArray<{ type?: string; identifier?: string }>;
    contentVersion?: string;
    canonicalVolumeLink?: string;
    description?: string;
    ratingsCount?: number;
    panelizationSummary?: {
      containsEpubBubbles?: boolean;
      containsImageBubbles?: boolean;
      epubBubbleVersion?: string;
      imageBubbleVersion?: string;
    };
  };
  /** URL to this resource. (In LITE projection.) */
  selfLink?: string;
}

export const Volume: Schema.Schema<Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    recommendedInfo: Schema.optional(
      Schema.Struct({ explanation: Schema.optional(Schema.String) }),
    ),
    searchInfo: Schema.optional(
      Schema.Struct({ textSnippet: Schema.optional(Schema.String) }),
    ),
    kind: Schema.optional(Schema.String),
    accessInfo: Schema.optional(
      Schema.Struct({
        viewability: Schema.optional(Schema.String),
        quoteSharingAllowed: Schema.optional(Schema.Boolean),
        accessViewStatus: Schema.optional(Schema.String),
        explicitOfflineLicenseManagement: Schema.optional(Schema.Boolean),
        pdf: Schema.optional(
          Schema.Struct({
            acsTokenLink: Schema.optional(Schema.String),
            isAvailable: Schema.optional(Schema.Boolean),
            downloadLink: Schema.optional(Schema.String),
          }),
        ),
        embeddable: Schema.optional(Schema.Boolean),
        country: Schema.optional(Schema.String),
        driveImportedContentLink: Schema.optional(Schema.String),
        downloadAccess: Schema.optional(DownloadAccessRestriction),
        textToSpeechPermission: Schema.optional(Schema.String),
        viewOrderUrl: Schema.optional(Schema.String),
        epub: Schema.optional(
          Schema.Struct({
            downloadLink: Schema.optional(Schema.String),
            acsTokenLink: Schema.optional(Schema.String),
            isAvailable: Schema.optional(Schema.Boolean),
          }),
        ),
        webReaderLink: Schema.optional(Schema.String),
        publicDomain: Schema.optional(Schema.Boolean),
      }),
    ),
    id: Schema.optional(Schema.String),
    layerInfo: Schema.optional(
      Schema.Struct({
        layers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              layerId: Schema.optional(Schema.String),
              volumeAnnotationsVersion: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    userInfo: Schema.optional(
      Schema.Struct({
        rentalState: Schema.optional(Schema.String),
        acquisitionType: Schema.optional(Schema.Number),
        isFamilySharedFromUser: Schema.optional(Schema.Boolean),
        isPreordered: Schema.optional(Schema.Boolean),
        updated: Schema.optional(Schema.String),
        rentalPeriod: Schema.optional(
          Schema.Struct({
            endUtcSec: Schema.optional(Schema.String),
            startUtcSec: Schema.optional(Schema.String),
          }),
        ),
        copy: Schema.optional(
          Schema.Struct({
            remainingCharacterCount: Schema.optional(Schema.Number),
            limitType: Schema.optional(Schema.String),
            allowedCharacterCount: Schema.optional(Schema.Number),
            updated: Schema.optional(Schema.String),
          }),
        ),
        readingPosition: Schema.optional(ReadingPosition),
        review: Schema.optional(Review),
        acquiredTime: Schema.optional(Schema.String),
        isFamilySharingAllowed: Schema.optional(Schema.Boolean),
        entitlementType: Schema.optional(Schema.Number),
        isInMyBooks: Schema.optional(Schema.Boolean),
        familySharing: Schema.optional(
          Schema.Struct({
            familyRole: Schema.optional(Schema.String),
            isSharingAllowed: Schema.optional(Schema.Boolean),
            isSharingDisabledByFop: Schema.optional(Schema.Boolean),
          }),
        ),
        isFamilySharedToUser: Schema.optional(Schema.Boolean),
        isPurchased: Schema.optional(Schema.Boolean),
        isFamilySharingDisabledByFop: Schema.optional(Schema.Boolean),
        isUploaded: Schema.optional(Schema.Boolean),
        userUploadedVolumeInfo: Schema.optional(
          Schema.Struct({ processingState: Schema.optional(Schema.String) }),
        ),
      }),
    ),
    saleInfo: Schema.optional(
      Schema.Struct({
        retailPrice: Schema.optional(
          Schema.Struct({
            amount: Schema.optional(Schema.Number),
            currencyCode: Schema.optional(Schema.String),
          }),
        ),
        buyLink: Schema.optional(Schema.String),
        offers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              giftable: Schema.optional(Schema.Boolean),
              rentalDuration: Schema.optional(
                Schema.Struct({
                  unit: Schema.optional(Schema.String),
                  count: Schema.optional(Schema.Number),
                }),
              ),
              retailPrice: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amountInMicros: Schema.optional(Schema.Number),
                }),
              ),
              finskyOfferType: Schema.optional(Schema.Number),
              listPrice: Schema.optional(
                Schema.Struct({
                  currencyCode: Schema.optional(Schema.String),
                  amountInMicros: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        country: Schema.optional(Schema.String),
        onSaleDate: Schema.optional(Schema.String),
        listPrice: Schema.optional(
          Schema.Struct({
            currencyCode: Schema.optional(Schema.String),
            amount: Schema.optional(Schema.Number),
          }),
        ),
        saleability: Schema.optional(Schema.String),
        isEbook: Schema.optional(Schema.Boolean),
      }),
    ),
    volumeInfo: Schema.optional(
      Schema.Struct({
        allowAnonLogging: Schema.optional(Schema.Boolean),
        subtitle: Schema.optional(Schema.String),
        maturityRating: Schema.optional(Schema.String),
        authors: Schema.optional(Schema.Array(Schema.String)),
        printedPageCount: Schema.optional(Schema.Number),
        pageCount: Schema.optional(Schema.Number),
        dimensions: Schema.optional(
          Schema.Struct({
            thickness: Schema.optional(Schema.String),
            height: Schema.optional(Schema.String),
            width: Schema.optional(Schema.String),
          }),
        ),
        publisher: Schema.optional(Schema.String),
        mainCategory: Schema.optional(Schema.String),
        publishedDate: Schema.optional(Schema.String),
        language: Schema.optional(Schema.String),
        seriesInfo: Schema.optional(Volumeseriesinfo),
        infoLink: Schema.optional(Schema.String),
        samplePageCount: Schema.optional(Schema.Number),
        averageRating: Schema.optional(Schema.Number),
        readingModes: Schema.optional(
          Schema.Struct({
            text: Schema.optional(Schema.Boolean),
            image: Schema.optional(Schema.Boolean),
          }),
        ),
        categories: Schema.optional(Schema.Array(Schema.String)),
        printType: Schema.optional(Schema.String),
        previewLink: Schema.optional(Schema.String),
        title: Schema.optional(Schema.String),
        imageLinks: Schema.optional(
          Schema.Struct({
            large: Schema.optional(Schema.String),
            medium: Schema.optional(Schema.String),
            small: Schema.optional(Schema.String),
            smallThumbnail: Schema.optional(Schema.String),
            thumbnail: Schema.optional(Schema.String),
            extraLarge: Schema.optional(Schema.String),
          }),
        ),
        comicsContent: Schema.optional(Schema.Boolean),
        industryIdentifiers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              identifier: Schema.optional(Schema.String),
            }),
          ),
        ),
        contentVersion: Schema.optional(Schema.String),
        canonicalVolumeLink: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        ratingsCount: Schema.optional(Schema.Number),
        panelizationSummary: Schema.optional(
          Schema.Struct({
            containsEpubBubbles: Schema.optional(Schema.Boolean),
            containsImageBubbles: Schema.optional(Schema.Boolean),
            epubBubbleVersion: Schema.optional(Schema.String),
            imageBubbleVersion: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volume" });

export interface Volumes {
  /** Resource type. */
  kind?: string;
  /** A list of volumes. */
  items?: ReadonlyArray<Volume>;
  /** Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated. */
  totalItems?: number;
}

export const Volumes: Schema.Schema<Volumes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Volume)),
    totalItems: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Volumes" });

export interface AnnotationsSummary {
  kind?: string;
  layers?: ReadonlyArray<{
    layerId?: string;
    remainingCharacterCount?: number;
    updated?: string;
    limitType?: string;
    allowedCharacterCount?: number;
  }>;
}

export const AnnotationsSummary: Schema.Schema<AnnotationsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    layers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          layerId: Schema.optional(Schema.String),
          remainingCharacterCount: Schema.optional(Schema.Number),
          updated: Schema.optional(Schema.String),
          limitType: Schema.optional(Schema.String),
          allowedCharacterCount: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }).annotate({ identifier: "AnnotationsSummary" });

export interface Discoveryclusters {
  totalClusters?: number;
  /** Resorce type. */
  kind?: string;
  clusters?: ReadonlyArray<{
    subTitle?: string;
    volumes?: ReadonlyArray<Volume>;
    uid?: string;
    title?: string;
    banner_with_content_container?: {
      moreButtonUrl?: string;
      maskColorArgb?: string;
      imageUrl?: string;
      moreButtonText?: string;
      fillColorArgb?: string;
      textColorArgb?: string;
    };
    totalVolumes?: number;
  }>;
}

export const Discoveryclusters: Schema.Schema<Discoveryclusters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalClusters: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    clusters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          subTitle: Schema.optional(Schema.String),
          volumes: Schema.optional(Schema.Array(Volume)),
          uid: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          banner_with_content_container: Schema.optional(
            Schema.Struct({
              moreButtonUrl: Schema.optional(Schema.String),
              maskColorArgb: Schema.optional(Schema.String),
              imageUrl: Schema.optional(Schema.String),
              moreButtonText: Schema.optional(Schema.String),
              fillColorArgb: Schema.optional(Schema.String),
              textColorArgb: Schema.optional(Schema.String),
            }),
          ),
          totalVolumes: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }).annotate({ identifier: "Discoveryclusters" });

export interface Dictlayerdata {
  kind?: string;
  dict?: {
    source?: { url?: string; attribution?: string };
    words?: ReadonlyArray<{
      source?: { url?: string; attribution?: string };
      derivatives?: ReadonlyArray<{
        source?: { url?: string; attribution?: string };
        text?: string;
      }>;
      senses?: ReadonlyArray<{
        definitions?: ReadonlyArray<{
          definition?: string;
          examples?: ReadonlyArray<{
            source?: { url?: string; attribution?: string };
            text?: string;
          }>;
        }>;
        syllabification?: string;
        conjugations?: ReadonlyArray<{ value?: string; type?: string }>;
        partOfSpeech?: string;
        pronunciation?: string;
        source?: { url?: string; attribution?: string };
        synonyms?: ReadonlyArray<{
          source?: { url?: string; attribution?: string };
          text?: string;
        }>;
        pronunciationUrl?: string;
      }>;
      examples?: ReadonlyArray<{
        text?: string;
        source?: { url?: string; attribution?: string };
      }>;
    }>;
  };
  common?: { title?: string };
}

export const Dictlayerdata: Schema.Schema<Dictlayerdata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    dict: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Struct({
            url: Schema.optional(Schema.String),
            attribution: Schema.optional(Schema.String),
          }),
        ),
        words: Schema.optional(
          Schema.Array(
            Schema.Struct({
              source: Schema.optional(
                Schema.Struct({
                  url: Schema.optional(Schema.String),
                  attribution: Schema.optional(Schema.String),
                }),
              ),
              derivatives: Schema.optional(Schema.Array(Schema.Unknown)),
              senses: Schema.optional(Schema.Array(Schema.Unknown)),
              examples: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
      }),
    ),
    common: Schema.optional(
      Schema.Struct({ title: Schema.optional(Schema.String) }),
    ),
  }).annotate({
    identifier: "Dictlayerdata",
  }) as any as Schema.Schema<Dictlayerdata>;

export interface Volume2 {
  /** A list of volumes. */
  items?: ReadonlyArray<Volume>;
  nextPageToken?: string;
  /** Resource type. */
  kind?: string;
}

export const Volume2: Schema.Schema<Volume2> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Volume)),
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volume2" });

export interface Notification {
  iconUrl?: string;
  /** The list of crm experiment ids. */
  crmExperimentIds?: ReadonlyArray<string>;
  title?: string;
  timeToExpireMs?: string;
  doc_id?: string;
  is_document_mature?: boolean;
  doc_type?: string;
  dont_show_notification?: boolean;
  reason?: string;
  notification_type?: string;
  /** Resource type. */
  kind?: string;
  show_notification_settings_action?: boolean;
  notificationGroup?: string;
  body?: string;
  targetUrl?: string;
  pcampaign_id?: string;
}

export const Notification: Schema.Schema<Notification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iconUrl: Schema.optional(Schema.String),
    crmExperimentIds: Schema.optional(Schema.Array(Schema.String)),
    title: Schema.optional(Schema.String),
    timeToExpireMs: Schema.optional(Schema.String),
    doc_id: Schema.optional(Schema.String),
    is_document_mature: Schema.optional(Schema.Boolean),
    doc_type: Schema.optional(Schema.String),
    dont_show_notification: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    notification_type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    show_notification_settings_action: Schema.optional(Schema.Boolean),
    notificationGroup: Schema.optional(Schema.String),
    body: Schema.optional(Schema.String),
    targetUrl: Schema.optional(Schema.String),
    pcampaign_id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notification" });

export interface Layersummary {
  /** URL to this resource. */
  selfLink?: string;
  /** The content version this resource is for. */
  contentVersion?: string;
  /** Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format). */
  updated?: string;
  /** The volume id this resource is for. */
  volumeId?: string;
  /** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
  volumeAnnotationsVersion?: string;
  /** The number of annotations for this layer. */
  annotationCount?: number;
  /** Resource Type */
  kind?: string;
  /** Unique id of this layer summary. */
  id?: string;
  /** The list of annotation types contained for this layer. */
  annotationTypes?: ReadonlyArray<string>;
  /** The number of data items for this layer. */
  dataCount?: number;
  /** Link to get data for this annotation. */
  annotationsDataLink?: string;
  /** The layer id for this summary. */
  layerId?: string;
  /** The link to get the annotations for this layer. */
  annotationsLink?: string;
}

export const Layersummary: Schema.Schema<Layersummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    contentVersion: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    volumeAnnotationsVersion: Schema.optional(Schema.String),
    annotationCount: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    annotationTypes: Schema.optional(Schema.Array(Schema.String)),
    dataCount: Schema.optional(Schema.Number),
    annotationsDataLink: Schema.optional(Schema.String),
    layerId: Schema.optional(Schema.String),
    annotationsLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Layersummary" });

export interface Offers {
  /** Resource type. */
  kind?: string;
  /** A list of offers. */
  items?: ReadonlyArray<{
    artUrl?: string;
    items?: ReadonlyArray<{
      title?: string;
      author?: string;
      description?: string;
      volumeId?: string;
      canonicalVolumeLink?: string;
      coverUrl?: string;
    }>;
    gservicesKey?: string;
    id?: string;
  }>;
}

export const Offers: Schema.Schema<Offers> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          artUrl: Schema.optional(Schema.String),
          items: Schema.optional(
            Schema.Array(
              Schema.Struct({
                title: Schema.optional(Schema.String),
                author: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                volumeId: Schema.optional(Schema.String),
                canonicalVolumeLink: Schema.optional(Schema.String),
                coverUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
          gservicesKey: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).annotate({ identifier: "Offers" });

export interface Seriesmembership {
  nextPageToken?: string;
  member?: ReadonlyArray<Volume>;
  /** Resorce type. */
  kind?: string;
}

export const Seriesmembership: Schema.Schema<Seriesmembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    member: Schema.optional(Schema.Array(Volume)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Seriesmembership" });

export interface DownloadAccesses {
  /** A list of download access responses. */
  downloadAccessList?: ReadonlyArray<DownloadAccessRestriction>;
  /** Resource type. */
  kind?: string;
}

export const DownloadAccesses: Schema.Schema<DownloadAccesses> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    downloadAccessList: Schema.optional(
      Schema.Array(DownloadAccessRestriction),
    ),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DownloadAccesses" });

export interface BooksVolumesRecommendedRateResponse {
  consistency_token?: string;
}

export const BooksVolumesRecommendedRateResponse: Schema.Schema<BooksVolumesRecommendedRateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consistency_token: Schema.optional(Schema.String),
  }).annotate({ identifier: "BooksVolumesRecommendedRateResponse" });

export interface Geolayerdata {
  kind?: string;
  geo?: {
    longitude?: number;
    boundary?: ReadonlyArray<string>;
    countryCode?: string;
    latitude?: number;
    zoom?: number;
    viewport?: {
      lo?: { longitude?: number; latitude?: number };
      hi?: { longitude?: number; latitude?: number };
    };
    mapType?: string;
    cachePolicy?: string;
  };
  common?: {
    previewImageUrl?: string;
    snippetUrl?: string;
    snippet?: string;
    lang?: string;
    title?: string;
  };
}

export const Geolayerdata: Schema.Schema<Geolayerdata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    geo: Schema.optional(
      Schema.Struct({
        longitude: Schema.optional(Schema.Number),
        boundary: Schema.optional(Schema.Array(Schema.String)),
        countryCode: Schema.optional(Schema.String),
        latitude: Schema.optional(Schema.Number),
        zoom: Schema.optional(Schema.Number),
        viewport: Schema.optional(
          Schema.Struct({
            lo: Schema.optional(
              Schema.Struct({
                longitude: Schema.optional(Schema.Number),
                latitude: Schema.optional(Schema.Number),
              }),
            ),
            hi: Schema.optional(
              Schema.Struct({
                longitude: Schema.optional(Schema.Number),
                latitude: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        mapType: Schema.optional(Schema.String),
        cachePolicy: Schema.optional(Schema.String),
      }),
    ),
    common: Schema.optional(
      Schema.Struct({
        previewImageUrl: Schema.optional(Schema.String),
        snippetUrl: Schema.optional(Schema.String),
        snippet: Schema.optional(Schema.String),
        lang: Schema.optional(Schema.String),
        title: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "Geolayerdata" });

export interface GeoAnnotationdata {
  /** Resource Type */
  kind?: string;
  /** The Layer id for this data. * */
  layerId?: string;
  /** Base64 encoded data for this annotation data. */
  encodedData?: string;
  /** The volume id for this data. * */
  volumeId?: string;
  /** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
  updated?: string;
  /** The type of annotation this data is for. */
  annotationType?: string;
  /** URL for this resource. * */
  selfLink?: string;
  /** JSON encoded data for this geo annotation data. Emitted with name 'data' in JSON output. Either this or dict_data will be populated. */
  data?: Geolayerdata;
  /** Unique id for this annotation data. */
  id?: string;
}

export const GeoAnnotationdata: Schema.Schema<GeoAnnotationdata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    layerId: Schema.optional(Schema.String),
    encodedData: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    annotationType: Schema.optional(Schema.String),
    selfLink: Schema.optional(Schema.String),
    data: Schema.optional(Geolayerdata),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GeoAnnotationdata" });

export interface FamilyInfo {
  /** Resource type. */
  kind?: string;
  /** Family membership info of the user that made the request. */
  membership?: {
    ageGroup?: string;
    isInFamily?: boolean;
    allowedMaturityRating?: string;
    role?: string;
    acquirePermission?: string;
  };
}

export const FamilyInfo: Schema.Schema<FamilyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    membership: Schema.optional(
      Schema.Struct({
        ageGroup: Schema.optional(Schema.String),
        isInFamily: Schema.optional(Schema.Boolean),
        allowedMaturityRating: Schema.optional(Schema.String),
        role: Schema.optional(Schema.String),
        acquirePermission: Schema.optional(Schema.String),
      }),
    ),
  }).annotate({ identifier: "FamilyInfo" });

export interface Layersummaries {
  /** A list of layer summary items. */
  items?: ReadonlyArray<Layersummary>;
  /** The total number of layer summaries found. */
  totalItems?: number;
  /** Resource type. */
  kind?: string;
}

export const Layersummaries: Schema.Schema<Layersummaries> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Layersummary)),
    totalItems: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Layersummaries" });

export interface Annotationsdata {
  /** A list of Annotation Data. */
  items?: ReadonlyArray<GeoAnnotationdata>;
  /** The total number of volume annotations found. */
  totalItems?: number;
  /** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
  nextPageToken?: string;
  /** Resource type */
  kind?: string;
}

export const Annotationsdata: Schema.Schema<Annotationsdata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(GeoAnnotationdata)),
    totalItems: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Annotationsdata" });

export interface DictionaryAnnotationdata {
  /** URL for this resource. * */
  selfLink?: string;
  /** JSON encoded data for this dictionary annotation data. Emitted with name 'data' in JSON output. Either this or geo_data will be populated. */
  data?: Dictlayerdata;
  /** Unique id for this annotation data. */
  id?: string;
  /** Resource Type */
  kind?: string;
  /** The Layer id for this data. * */
  layerId?: string;
  /** Base64 encoded data for this annotation data. */
  encodedData?: string;
  /** The volume id for this data. * */
  volumeId?: string;
  /** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
  updated?: string;
  /** The type of annotation this data is for. */
  annotationType?: string;
}

export const DictionaryAnnotationdata: Schema.Schema<DictionaryAnnotationdata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    data: Schema.optional(Dictlayerdata),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    layerId: Schema.optional(Schema.String),
    encodedData: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    annotationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DictionaryAnnotationdata" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Bookshelf {
  /** Whether this bookshelf is PUBLIC or PRIVATE. */
  access?: string;
  /** Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution). */
  updated?: string;
  /** Resource type for bookshelf metadata. */
  kind?: string;
  /** Id of this bookshelf, only unique by user. */
  id?: number;
  /** Title of this bookshelf. */
  title?: string;
  /** Description of this bookshelf. */
  description?: string;
  /** Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution). */
  volumesLastUpdated?: string;
  /** Created time for this bookshelf (formatted UTC timestamp with millisecond resolution). */
  created?: string;
  /** Number of volumes in this bookshelf. */
  volumeCount?: number;
  /** URL to this resource. */
  selfLink?: string;
}

export const Bookshelf: Schema.Schema<Bookshelf> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.Number),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    volumesLastUpdated: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    volumeCount: Schema.optional(Schema.Number),
    selfLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "Bookshelf" });

export interface Category {
  /** Resource type. */
  kind?: string;
  /** A list of onboarding categories. */
  items?: ReadonlyArray<{
    categoryId?: string;
    name?: string;
    badgeUrl?: string;
  }>;
}

export const Category: Schema.Schema<Category> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    items: Schema.optional(
      Schema.Array(
        Schema.Struct({
          categoryId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          badgeUrl: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).annotate({ identifier: "Category" });

export interface Annotation {
  /** URL to this resource. */
  selfLink?: string;
  /** Timestamp for the created time of this annotation. */
  created?: string;
  /** User-created data for this annotation. */
  data?: string;
  /** Indicates that this annotation is deleted. */
  deleted?: boolean;
  /** Resource type. */
  kind?: string;
  /** Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
  beforeSelectedText?: string;
  /** The volume that this annotation belongs to. */
  volumeId?: string;
  /** The highlight style for this annotation. */
  highlightStyle?: string;
  /** Timestamp for the last time this annotation was modified. */
  updated?: string;
  layerSummary?: {
    remainingCharacterCount?: number;
    limitType?: string;
    allowedCharacterCount?: number;
  };
  /** Id of this annotation, in the form of a GUID. */
  id?: string;
  /** Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
  afterSelectedText?: string;
  /** Excerpt from the volume. */
  selectedText?: string;
  /** The layer this annotation is for. */
  layerId?: string;
  /** Selection ranges for the most recent content version. */
  currentVersionRanges?: {
    cfiRange?: BooksAnnotationsRange;
    imageCfiRange?: BooksAnnotationsRange;
    gbImageRange?: BooksAnnotationsRange;
    contentVersion?: string;
    gbTextRange?: BooksAnnotationsRange;
  };
  /** Pages that this annotation spans. */
  pageIds?: ReadonlyArray<string>;
  /** Selection ranges sent from the client. */
  clientVersionRanges?: {
    cfiRange?: BooksAnnotationsRange;
    imageCfiRange?: BooksAnnotationsRange;
    gbImageRange?: BooksAnnotationsRange;
    contentVersion?: string;
    gbTextRange?: BooksAnnotationsRange;
  };
}

export const Annotation: Schema.Schema<Annotation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    selfLink: Schema.optional(Schema.String),
    created: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    beforeSelectedText: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    highlightStyle: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    layerSummary: Schema.optional(
      Schema.Struct({
        remainingCharacterCount: Schema.optional(Schema.Number),
        limitType: Schema.optional(Schema.String),
        allowedCharacterCount: Schema.optional(Schema.Number),
      }),
    ),
    id: Schema.optional(Schema.String),
    afterSelectedText: Schema.optional(Schema.String),
    selectedText: Schema.optional(Schema.String),
    layerId: Schema.optional(Schema.String),
    currentVersionRanges: Schema.optional(
      Schema.Struct({
        cfiRange: Schema.optional(BooksAnnotationsRange),
        imageCfiRange: Schema.optional(BooksAnnotationsRange),
        gbImageRange: Schema.optional(BooksAnnotationsRange),
        contentVersion: Schema.optional(Schema.String),
        gbTextRange: Schema.optional(BooksAnnotationsRange),
      }),
    ),
    pageIds: Schema.optional(Schema.Array(Schema.String)),
    clientVersionRanges: Schema.optional(
      Schema.Struct({
        cfiRange: Schema.optional(BooksAnnotationsRange),
        imageCfiRange: Schema.optional(BooksAnnotationsRange),
        gbImageRange: Schema.optional(BooksAnnotationsRange),
        contentVersion: Schema.optional(Schema.String),
        gbTextRange: Schema.optional(BooksAnnotationsRange),
      }),
    ),
  }).annotate({ identifier: "Annotation" });

export interface Annotations {
  /** A list of annotations. */
  items?: ReadonlyArray<Annotation>;
  /** Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated. */
  totalItems?: number;
  /** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
  nextPageToken?: string;
  /** Resource type. */
  kind?: string;
}

export const Annotations: Schema.Schema<Annotations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Annotation)),
    totalItems: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Annotations" });

export interface Bookshelves {
  /** Resource type. */
  kind?: string;
  /** A list of bookshelves. */
  items?: ReadonlyArray<Bookshelf>;
}

export const Bookshelves: Schema.Schema<Bookshelves> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Bookshelf)),
  }).annotate({ identifier: "Bookshelves" });

export interface Series {
  /** Resource type. */
  kind?: string;
  series?: ReadonlyArray<{
    seriesType?: string;
    seriesFormatType?: string;
    bannerImageUrl?: string;
    title?: string;
    seriesId?: string;
    eligibleForSubscription?: boolean;
    subscriptionId?: string;
    isComplete?: boolean;
    seriesSubscriptionReleaseInfo?: {
      nextReleaseInfo?: {
        releaseNumber?: string;
        currencyCode?: string;
        amountInMicros?: number;
        releaseTime?: string;
      };
      seriesSubscriptionType?: string;
      currentReleaseInfo?: {
        amountInMicros?: number;
        releaseTime?: string;
        releaseNumber?: string;
        currencyCode?: string;
      };
      cancelTime?: string;
    };
    imageUrl?: string;
  }>;
}

export const Series: Schema.Schema<Series> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    series: Schema.optional(
      Schema.Array(
        Schema.Struct({
          seriesType: Schema.optional(Schema.String),
          seriesFormatType: Schema.optional(Schema.String),
          bannerImageUrl: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          seriesId: Schema.optional(Schema.String),
          eligibleForSubscription: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          isComplete: Schema.optional(Schema.Boolean),
          seriesSubscriptionReleaseInfo: Schema.optional(
            Schema.Struct({
              nextReleaseInfo: Schema.optional(
                Schema.Struct({
                  releaseNumber: Schema.optional(Schema.String),
                  currencyCode: Schema.optional(Schema.String),
                  amountInMicros: Schema.optional(Schema.Number),
                  releaseTime: Schema.optional(Schema.String),
                }),
              ),
              seriesSubscriptionType: Schema.optional(Schema.String),
              currentReleaseInfo: Schema.optional(
                Schema.Struct({
                  amountInMicros: Schema.optional(Schema.Number),
                  releaseTime: Schema.optional(Schema.String),
                  releaseNumber: Schema.optional(Schema.String),
                  currencyCode: Schema.optional(Schema.String),
                }),
              ),
              cancelTime: Schema.optional(Schema.String),
            }),
          ),
          imageUrl: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).annotate({ identifier: "Series" });

export interface Volumeannotations {
  /** A list of volume annotations. */
  items?: ReadonlyArray<Volumeannotation>;
  /** The total number of volume annotations found. */
  totalItems?: number;
  /** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
  nextPageToken?: string;
  /** The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book). */
  version?: string;
  /** Resource type */
  kind?: string;
}

export const Volumeannotations: Schema.Schema<Volumeannotations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Volumeannotation)),
    totalItems: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volumeannotations" });

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

export interface InsertMylibraryAnnotationsRequest {
  /** ISO-3166-1 code to override the IP-based location. */
  country?: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** Requests that only the summary of the specified layer be provided in the response. */
  showOnlySummaryInResponse?: boolean;
  /** The ID for the annotation to insert. */
  annotationId?: string;
  /** Request body */
  body?: Annotation;
}

export const InsertMylibraryAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    showOnlySummaryInResponse: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showOnlySummaryInResponse"),
    ),
    annotationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("annotationId"),
    ),
    body: Schema.optional(Annotation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/annotations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertMylibraryAnnotationsRequest>;

export type InsertMylibraryAnnotationsResponse = Annotation;
export const InsertMylibraryAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Annotation;

export type InsertMylibraryAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a new annotation. */
export const insertMylibraryAnnotations: API.OperationMethod<
  InsertMylibraryAnnotationsRequest,
  InsertMylibraryAnnotationsResponse,
  InsertMylibraryAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertMylibraryAnnotationsRequest,
  output: InsertMylibraryAnnotationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteMylibraryAnnotationsRequest {
  /** The ID for the annotation to delete. */
  annotationId: string;
  /** String to identify the originator of this request. */
  source?: string;
}

export const DeleteMylibraryAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotationId: Schema.String.pipe(T.HttpPath("annotationId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "books/v1/mylibrary/annotations/{annotationId}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteMylibraryAnnotationsRequest>;

export type DeleteMylibraryAnnotationsResponse = Empty;
export const DeleteMylibraryAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteMylibraryAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an annotation. */
export const deleteMylibraryAnnotations: API.OperationMethod<
  DeleteMylibraryAnnotationsRequest,
  DeleteMylibraryAnnotationsResponse,
  DeleteMylibraryAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteMylibraryAnnotationsRequest,
  output: DeleteMylibraryAnnotationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SummaryMylibraryAnnotationsRequest {
  /** Array of layer IDs to get the summary for. */
  layerIds: string[];
  /** Volume id to get the summary for. */
  volumeId: string;
  /** Optional. String to identify the originator of this request. */
  source?: string;
}

export const SummaryMylibraryAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    layerIds: Schema.Array(Schema.String).pipe(T.HttpQuery("layerIds")),
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/annotations/summary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SummaryMylibraryAnnotationsRequest>;

export type SummaryMylibraryAnnotationsResponse = AnnotationsSummary;
export const SummaryMylibraryAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AnnotationsSummary;

export type SummaryMylibraryAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the summary of specified layers. */
export const summaryMylibraryAnnotations: API.OperationMethod<
  SummaryMylibraryAnnotationsRequest,
  SummaryMylibraryAnnotationsResponse,
  SummaryMylibraryAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SummaryMylibraryAnnotationsRequest,
  output: SummaryMylibraryAnnotationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMylibraryAnnotationsRequest {
  /** Maximum number of results to return */
  maxResults?: number;
  /** String to identify the originator of this request. */
  source?: string;
  /** Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. */
  showDeleted?: boolean;
  /** The layer ID(s) to limit annotation by. */
  layerIds?: string[];
  /** RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). */
  updatedMax?: string;
  /** The content version for the requested volume. */
  contentVersion?: string;
  /** RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). */
  updatedMin?: string;
  /** The value of the nextToken from the previous page. */
  pageToken?: string;
  /** The volume to restrict annotations to. */
  volumeId?: string;
  /** The layer ID to limit annotation by. */
  layerId?: string;
}

export const ListMylibraryAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    layerIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("layerIds"),
    ),
    updatedMax: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMax")),
    contentVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contentVersion"),
    ),
    updatedMin: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMin")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    volumeId: Schema.optional(Schema.String).pipe(T.HttpQuery("volumeId")),
    layerId: Schema.optional(Schema.String).pipe(T.HttpQuery("layerId")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/mylibrary/annotations" }),
    svc,
  ) as unknown as Schema.Schema<ListMylibraryAnnotationsRequest>;

export type ListMylibraryAnnotationsResponse = Annotations;
export const ListMylibraryAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Annotations;

export type ListMylibraryAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of annotations, possibly filtered. */
export const listMylibraryAnnotations: API.PaginatedOperationMethod<
  ListMylibraryAnnotationsRequest,
  ListMylibraryAnnotationsResponse,
  ListMylibraryAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMylibraryAnnotationsRequest,
  output: ListMylibraryAnnotationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface UpdateMylibraryAnnotationsRequest {
  /** The ID for the annotation to update. */
  annotationId: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** Request body */
  body?: Annotation;
}

export const UpdateMylibraryAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotationId: Schema.String.pipe(T.HttpPath("annotationId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    body: Schema.optional(Annotation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "books/v1/mylibrary/annotations/{annotationId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateMylibraryAnnotationsRequest>;

export type UpdateMylibraryAnnotationsResponse = Annotation;
export const UpdateMylibraryAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Annotation;

export type UpdateMylibraryAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing annotation. */
export const updateMylibraryAnnotations: API.OperationMethod<
  UpdateMylibraryAnnotationsRequest,
  UpdateMylibraryAnnotationsResponse,
  UpdateMylibraryAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMylibraryAnnotationsRequest,
  output: UpdateMylibraryAnnotationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveVolumeMylibraryBookshelvesRequest {
  /** The reason for which the book is removed from the library. */
  reason?: "REASON_UNDEFINED" | "ONBOARDING" | (string & {});
  /** ID of bookshelf from which to remove a volume. */
  shelf: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** ID of volume to remove. */
  volumeId: string;
}

export const RemoveVolumeMylibraryBookshelvesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String).pipe(T.HttpQuery("reason")),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/bookshelves/{shelf}/removeVolume",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveVolumeMylibraryBookshelvesRequest>;

export type RemoveVolumeMylibraryBookshelvesResponse = Empty;
export const RemoveVolumeMylibraryBookshelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RemoveVolumeMylibraryBookshelvesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a volume from a bookshelf. */
export const removeVolumeMylibraryBookshelves: API.OperationMethod<
  RemoveVolumeMylibraryBookshelvesRequest,
  RemoveVolumeMylibraryBookshelvesResponse,
  RemoveVolumeMylibraryBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveVolumeMylibraryBookshelvesRequest,
  output: RemoveVolumeMylibraryBookshelvesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClearVolumesMylibraryBookshelvesRequest {
  /** String to identify the originator of this request. */
  source?: string;
  /** ID of bookshelf from which to remove a volume. */
  shelf: string;
}

export const ClearVolumesMylibraryBookshelvesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/bookshelves/{shelf}/clearVolumes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClearVolumesMylibraryBookshelvesRequest>;

export type ClearVolumesMylibraryBookshelvesResponse = Empty;
export const ClearVolumesMylibraryBookshelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ClearVolumesMylibraryBookshelvesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Clears all volumes from a bookshelf. */
export const clearVolumesMylibraryBookshelves: API.OperationMethod<
  ClearVolumesMylibraryBookshelvesRequest,
  ClearVolumesMylibraryBookshelvesResponse,
  ClearVolumesMylibraryBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClearVolumesMylibraryBookshelvesRequest,
  output: ClearVolumesMylibraryBookshelvesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveVolumeMylibraryBookshelvesRequest {
  /** String to identify the originator of this request. */
  source?: string;
  /** ID of volume to move. */
  volumeId: string;
  /** ID of bookshelf with the volume. */
  shelf: string;
  /** Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.) */
  volumePosition: number;
}

export const MoveVolumeMylibraryBookshelvesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
    volumePosition: Schema.Number.pipe(T.HttpQuery("volumePosition")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/bookshelves/{shelf}/moveVolume",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MoveVolumeMylibraryBookshelvesRequest>;

export type MoveVolumeMylibraryBookshelvesResponse = Empty;
export const MoveVolumeMylibraryBookshelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type MoveVolumeMylibraryBookshelvesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a volume within a bookshelf. */
export const moveVolumeMylibraryBookshelves: API.OperationMethod<
  MoveVolumeMylibraryBookshelvesRequest,
  MoveVolumeMylibraryBookshelvesResponse,
  MoveVolumeMylibraryBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveVolumeMylibraryBookshelvesRequest,
  output: MoveVolumeMylibraryBookshelvesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListMylibraryBookshelvesRequest {
  /** String to identify the originator of this request. */
  source?: string;
}

export const ListMylibraryBookshelvesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/mylibrary/bookshelves" }),
    svc,
  ) as unknown as Schema.Schema<ListMylibraryBookshelvesRequest>;

export type ListMylibraryBookshelvesResponse = Bookshelves;
export const ListMylibraryBookshelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Bookshelves;

export type ListMylibraryBookshelvesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of bookshelves belonging to the authenticated user. */
export const listMylibraryBookshelves: API.OperationMethod<
  ListMylibraryBookshelvesRequest,
  ListMylibraryBookshelvesResponse,
  ListMylibraryBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMylibraryBookshelvesRequest,
  output: ListMylibraryBookshelvesResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddVolumeMylibraryBookshelvesRequest {
  /** The reason for which the book is added to the library. */
  reason?:
    | "REASON_UNDEFINED"
    | "IOS_PREX"
    | "IOS_SEARCH"
    | "ONBOARDING"
    | (string & {});
  /** ID of bookshelf to which to add a volume. */
  shelf: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** ID of volume to add. */
  volumeId: string;
}

export const AddVolumeMylibraryBookshelvesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String).pipe(T.HttpQuery("reason")),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/bookshelves/{shelf}/addVolume",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddVolumeMylibraryBookshelvesRequest>;

export type AddVolumeMylibraryBookshelvesResponse = Empty;
export const AddVolumeMylibraryBookshelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type AddVolumeMylibraryBookshelvesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a volume to a bookshelf. */
export const addVolumeMylibraryBookshelves: API.OperationMethod<
  AddVolumeMylibraryBookshelvesRequest,
  AddVolumeMylibraryBookshelvesResponse,
  AddVolumeMylibraryBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddVolumeMylibraryBookshelvesRequest,
  output: AddVolumeMylibraryBookshelvesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMylibraryBookshelvesRequest {
  /** String to identify the originator of this request. */
  source?: string;
  /** ID of bookshelf to retrieve. */
  shelf: string;
}

export const GetMylibraryBookshelvesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/mylibrary/bookshelves/{shelf}" }),
    svc,
  ) as unknown as Schema.Schema<GetMylibraryBookshelvesRequest>;

export type GetMylibraryBookshelvesResponse = Bookshelf;
export const GetMylibraryBookshelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Bookshelf;

export type GetMylibraryBookshelvesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves metadata for a specific bookshelf belonging to the authenticated user. */
export const getMylibraryBookshelves: API.OperationMethod<
  GetMylibraryBookshelvesRequest,
  GetMylibraryBookshelvesResponse,
  GetMylibraryBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMylibraryBookshelvesRequest,
  output: GetMylibraryBookshelvesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListMylibraryBookshelvesVolumesRequest {
  /** Maximum number of results to return */
  maxResults?: number;
  /** String to identify the originator of this request. */
  source?: string;
  /** The bookshelf ID or name retrieve volumes for. */
  shelf: string;
  /** Full-text search query string in this bookshelf. */
  q?: string;
  /** Restrict information returned to a set of selected fields. */
  projection?: "PROJECTION_UNDEFINED" | "FULL" | "LITE" | (string & {});
  /** Set to true to show pre-ordered books. Defaults to false. */
  showPreorders?: boolean;
  /** ISO-3166-1 code to override the IP-based location. */
  country?: string;
  /** Index of the first element to return (starts at 0) */
  startIndex?: number;
}

export const ListMylibraryBookshelvesVolumesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
    q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
    projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
    showPreorders: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showPreorders"),
    ),
    country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
    startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/mylibrary/bookshelves/{shelf}/volumes",
    }),
    svc,
  ) as unknown as Schema.Schema<ListMylibraryBookshelvesVolumesRequest>;

export type ListMylibraryBookshelvesVolumesResponse = Volumes;
export const ListMylibraryBookshelvesVolumesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListMylibraryBookshelvesVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets volume information for volumes on a bookshelf. */
export const listMylibraryBookshelvesVolumes: API.OperationMethod<
  ListMylibraryBookshelvesVolumesRequest,
  ListMylibraryBookshelvesVolumesResponse,
  ListMylibraryBookshelvesVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListMylibraryBookshelvesVolumesRequest,
  output: ListMylibraryBookshelvesVolumesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetMylibraryReadingpositionsRequest {
  /** Volume content version for which this reading position is requested. */
  contentVersion?: string;
  /** ID of volume for which to retrieve a reading position. */
  volumeId: string;
  /** String to identify the originator of this request. */
  source?: string;
}

export const GetMylibraryReadingpositionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contentVersion"),
    ),
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/mylibrary/readingpositions/{volumeId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetMylibraryReadingpositionsRequest>;

export type GetMylibraryReadingpositionsResponse = ReadingPosition;
export const GetMylibraryReadingpositionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReadingPosition;

export type GetMylibraryReadingpositionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves my reading position information for a volume. */
export const getMylibraryReadingpositions: API.OperationMethod<
  GetMylibraryReadingpositionsRequest,
  GetMylibraryReadingpositionsResponse,
  GetMylibraryReadingpositionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMylibraryReadingpositionsRequest,
  output: GetMylibraryReadingpositionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetPositionMylibraryReadingpositionsRequest {
  /** Position string for the new volume reading position. */
  position: string;
  /** ID of volume for which to update the reading position. */
  volumeId: string;
  /** Action that caused this reading position to be set. */
  action?:
    | "ACTION_UNDEFINED"
    | "bookmark"
    | "chapter"
    | "next-page"
    | "prev-page"
    | "scroll"
    | "search"
    | (string & {});
  /** String to identify the originator of this request. */
  source?: string;
  /** Volume content version for which this reading position applies. */
  contentVersion?: string;
  /** Random persistent device cookie optional on set position. */
  deviceCookie?: string;
  /** RFC 3339 UTC format timestamp associated with this reading position. */
  timestamp: string;
}

export const SetPositionMylibraryReadingpositionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.String.pipe(T.HttpQuery("position")),
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    action: Schema.optional(Schema.String).pipe(T.HttpQuery("action")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    contentVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contentVersion"),
    ),
    deviceCookie: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deviceCookie"),
    ),
    timestamp: Schema.String.pipe(T.HttpQuery("timestamp")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/mylibrary/readingpositions/{volumeId}/setPosition",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetPositionMylibraryReadingpositionsRequest>;

export type SetPositionMylibraryReadingpositionsResponse = Empty;
export const SetPositionMylibraryReadingpositionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type SetPositionMylibraryReadingpositionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets my reading position information for a volume. */
export const setPositionMylibraryReadingpositions: API.OperationMethod<
  SetPositionMylibraryReadingpositionsRequest,
  SetPositionMylibraryReadingpositionsResponse,
  SetPositionMylibraryReadingpositionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetPositionMylibraryReadingpositionsRequest,
  output: SetPositionMylibraryReadingpositionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddBookCloudloadingRequest {
  /** The document MIME type. It can be set only if the drive_document_id is set. */
  mime_type?: string;
  /** A drive document id. The upload_client_token must not be set. */
  drive_document_id?: string;
  /** The document name. It can be set only if the drive_document_id is set. */
  name?: string;
  /** Scotty upload token. */
  upload_client_token?: string;
}

export const AddBookCloudloadingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mime_type: Schema.optional(Schema.String).pipe(T.HttpQuery("mime_type")),
    drive_document_id: Schema.optional(Schema.String).pipe(
      T.HttpQuery("drive_document_id"),
    ),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    upload_client_token: Schema.optional(Schema.String).pipe(
      T.HttpQuery("upload_client_token"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/cloudloading/addBook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddBookCloudloadingRequest>;

export type AddBookCloudloadingResponse = BooksCloudloadingResource;
export const AddBookCloudloadingResponse =
  /*@__PURE__*/ /*#__PURE__*/ BooksCloudloadingResource;

export type AddBookCloudloadingError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Add a user-upload volume and triggers processing. */
export const addBookCloudloading: API.OperationMethod<
  AddBookCloudloadingRequest,
  AddBookCloudloadingResponse,
  AddBookCloudloadingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddBookCloudloadingRequest,
  output: AddBookCloudloadingResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteBookCloudloadingRequest {
  /** The id of the book to be removed. */
  volumeId: string;
}

export const DeleteBookCloudloadingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/cloudloading/deleteBook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteBookCloudloadingRequest>;

export type DeleteBookCloudloadingResponse = Empty;
export const DeleteBookCloudloadingResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteBookCloudloadingError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Remove the book and its contents */
export const deleteBookCloudloading: API.OperationMethod<
  DeleteBookCloudloadingRequest,
  DeleteBookCloudloadingResponse,
  DeleteBookCloudloadingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBookCloudloadingRequest,
  output: DeleteBookCloudloadingResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateBookCloudloadingRequest {
  /** Request body */
  body?: BooksCloudloadingResource;
}

export const UpdateBookCloudloadingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(BooksCloudloadingResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/cloudloading/updateBook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateBookCloudloadingRequest>;

export type UpdateBookCloudloadingResponse = BooksCloudloadingResource;
export const UpdateBookCloudloadingResponse =
  /*@__PURE__*/ /*#__PURE__*/ BooksCloudloadingResource;

export type UpdateBookCloudloadingError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a user-upload volume. */
export const updateBookCloudloading: API.OperationMethod<
  UpdateBookCloudloadingRequest,
  UpdateBookCloudloadingResponse,
  UpdateBookCloudloadingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBookCloudloadingRequest,
  output: UpdateBookCloudloadingResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SyncVolumeLicensesMyconfigRequest {
  /** ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. */
  locale?: string;
  /** The volume(s) to request download restrictions for. */
  volumeIds?: string[];
  /** Set to true to include non-comics series. Defaults to false. */
  includeNonComicsSeries?: boolean;
  /** Set to true to show pre-ordered books. Defaults to false. */
  showPreorders?: boolean;
  /** String to identify the originator of this request. */
  source: string;
  /** List of features supported by the client, i.e., 'RENTALS' */
  features?: "FEATURES_UNDEFINED" | "RENTALS" | (string & {})[];
  /** The client nonce value. */
  nonce: string;
  /** The device/version ID from which to release the restriction. */
  cpksver: string;
}

export const SyncVolumeLicensesMyconfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    volumeIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("volumeIds"),
    ),
    includeNonComicsSeries: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeNonComicsSeries"),
    ),
    showPreorders: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showPreorders"),
    ),
    source: Schema.String.pipe(T.HttpQuery("source")),
    features: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("features"),
    ),
    nonce: Schema.String.pipe(T.HttpQuery("nonce")),
    cpksver: Schema.String.pipe(T.HttpQuery("cpksver")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/myconfig/syncVolumeLicenses",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SyncVolumeLicensesMyconfigRequest>;

export type SyncVolumeLicensesMyconfigResponse = Volumes;
export const SyncVolumeLicensesMyconfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type SyncVolumeLicensesMyconfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Request downloaded content access for specified volumes on the My eBooks shelf. */
export const syncVolumeLicensesMyconfig: API.OperationMethod<
  SyncVolumeLicensesMyconfigRequest,
  SyncVolumeLicensesMyconfigResponse,
  SyncVolumeLicensesMyconfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SyncVolumeLicensesMyconfigRequest,
  output: SyncVolumeLicensesMyconfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RequestAccessMyconfigRequest {
  /** The device/version ID from which to request the restrictions. */
  cpksver: string;
  /** The client nonce value. */
  nonce: string;
  /** String to identify the originator of this request. */
  source: string;
  /** The volume to request concurrent/download restrictions for. */
  volumeId: string;
  /** ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. */
  locale?: string;
  /** The type of access license to request. If not specified, the default is BOTH. */
  licenseTypes?:
    | "LICENSE_TYPES_UNDEFINED"
    | "BOTH"
    | "CONCURRENT"
    | "DOWNLOAD"
    | (string & {});
}

export const RequestAccessMyconfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpksver: Schema.String.pipe(T.HttpQuery("cpksver")),
    nonce: Schema.String.pipe(T.HttpQuery("nonce")),
    source: Schema.String.pipe(T.HttpQuery("source")),
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    licenseTypes: Schema.optional(Schema.String).pipe(
      T.HttpQuery("licenseTypes"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/myconfig/requestAccess",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RequestAccessMyconfigRequest>;

export type RequestAccessMyconfigResponse = RequestAccessData;
export const RequestAccessMyconfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ RequestAccessData;

export type RequestAccessMyconfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Request concurrent and download access restrictions. */
export const requestAccessMyconfig: API.OperationMethod<
  RequestAccessMyconfigRequest,
  RequestAccessMyconfigResponse,
  RequestAccessMyconfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RequestAccessMyconfigRequest,
  output: RequestAccessMyconfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReleaseDownloadAccessMyconfigRequest {
  /** ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US. */
  locale?: string;
  /** The volume(s) to release restrictions for. */
  volumeIds: string[];
  /** The device/version ID from which to release the restriction. */
  cpksver: string;
  /** String to identify the originator of this request. */
  source?: string;
}

export const ReleaseDownloadAccessMyconfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    volumeIds: Schema.Array(Schema.String).pipe(T.HttpQuery("volumeIds")),
    cpksver: Schema.String.pipe(T.HttpQuery("cpksver")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/myconfig/releaseDownloadAccess",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReleaseDownloadAccessMyconfigRequest>;

export type ReleaseDownloadAccessMyconfigResponse = DownloadAccesses;
export const ReleaseDownloadAccessMyconfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ DownloadAccesses;

export type ReleaseDownloadAccessMyconfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Release downloaded content access restriction. */
export const releaseDownloadAccessMyconfig: API.OperationMethod<
  ReleaseDownloadAccessMyconfigRequest,
  ReleaseDownloadAccessMyconfigResponse,
  ReleaseDownloadAccessMyconfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReleaseDownloadAccessMyconfigRequest,
  output: ReleaseDownloadAccessMyconfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateUserSettingsMyconfigRequest {
  /** Request body */
  body?: Usersettings;
}

export const UpdateUserSettingsMyconfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(Usersettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/myconfig/updateUserSettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateUserSettingsMyconfigRequest>;

export type UpdateUserSettingsMyconfigResponse = Usersettings;
export const UpdateUserSettingsMyconfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Usersettings;

export type UpdateUserSettingsMyconfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value. */
export const updateUserSettingsMyconfig: API.OperationMethod<
  UpdateUserSettingsMyconfigRequest,
  UpdateUserSettingsMyconfigResponse,
  UpdateUserSettingsMyconfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUserSettingsMyconfigRequest,
  output: UpdateUserSettingsMyconfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUserSettingsMyconfigRequest {
  /** Unused. Added only to workaround TEX mandatory request template requirement */
  country?: string;
}

export const GetUserSettingsMyconfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/myconfig/getUserSettings" }),
    svc,
  ) as unknown as Schema.Schema<GetUserSettingsMyconfigRequest>;

export type GetUserSettingsMyconfigResponse = Usersettings;
export const GetUserSettingsMyconfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Usersettings;

export type GetUserSettingsMyconfigError = DefaultErrors | NotFound | Forbidden;

/** Gets the current settings for the user. */
export const getUserSettingsMyconfig: API.OperationMethod<
  GetUserSettingsMyconfigRequest,
  GetUserSettingsMyconfigResponse,
  GetUserSettingsMyconfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUserSettingsMyconfigRequest,
  output: GetUserSettingsMyconfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetVolumesRequest {
  /** ISO-3166-1 code to override the IP-based location. */
  country?: string;
  /** ID of volume to retrieve. */
  volumeId: string;
  /** string to identify the originator of this request. */
  source?: string;
  user_library_consistent_read?: boolean;
  /** Set to true to include non-comics series. Defaults to false. */
  includeNonComicsSeries?: boolean;
  /** Brand results for partner ID. */
  partner?: string;
  /** Restrict information returned to a set of selected fields. */
  projection?: "PROJECTION_UNDEFINED" | "FULL" | "LITE" | (string & {});
}

export const GetVolumesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
  volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
  source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  user_library_consistent_read: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("user_library_consistent_read"),
  ),
  includeNonComicsSeries: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeNonComicsSeries"),
  ),
  partner: Schema.optional(Schema.String).pipe(T.HttpQuery("partner")),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
}).pipe(
  T.Http({ method: "GET", path: "books/v1/volumes/{volumeId}" }),
  svc,
) as unknown as Schema.Schema<GetVolumesRequest>;

export type GetVolumesResponse = Volume;
export const GetVolumesResponse = /*@__PURE__*/ /*#__PURE__*/ Volume;

export type GetVolumesError = DefaultErrors | NotFound | Forbidden;

/** Gets volume information for a single volume. */
export const getVolumes: API.OperationMethod<
  GetVolumesRequest,
  GetVolumesResponse,
  GetVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVolumesRequest,
  output: GetVolumesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVolumesRequest {
  /** String to identify the originator of this request. */
  source?: string;
  /** Restrict information returned to a set of selected fields. */
  projection?: "PROJECTION_UNDEFINED" | "FULL" | "LITE" | (string & {});
  /** Set to true to show books available for preorder. Defaults to false. */
  showPreorders?: boolean;
  /** The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. */
  maxAllowedMaturityRating?:
    | "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    | "MATURE"
    | "not-mature"
    | (string & {});
  /** Restrict results to books with this language code. */
  langRestrict?: string;
  /** Index of the first result to return (starts at 0) */
  startIndex?: number;
  /** Restrict to books or magazines. */
  printType?:
    | "PRINT_TYPE_UNDEFINED"
    | "ALL"
    | "BOOKS"
    | "MAGAZINES"
    | (string & {});
  /** Restrict to volumes by download availability. */
  download?: "DOWNLOAD_UNDEFINED" | "EPUB" | (string & {});
  /** Filter search results. */
  filter?:
    | "FILTER_UNDEFINED"
    | "ebooks"
    | "free-ebooks"
    | "full"
    | "paid-ebooks"
    | "partial"
    | (string & {});
  /** Restrict search to this user's library. */
  libraryRestrict?:
    | "LIBRARY_RESTRICT_UNDEFINED"
    | "my-library"
    | "no-restrict"
    | (string & {});
  /** Maximum number of results to return. */
  maxResults?: number;
  /** Full-text search query string. */
  q: string;
  /** Sort search results. */
  orderBy?: "ORDER_BY_UNDEFINED" | "newest" | "relevance" | (string & {});
  /** Restrict and brand results for partner ID. */
  partner?: string;
}

export const ListVolumesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  projection: Schema.optional(Schema.String).pipe(T.HttpQuery("projection")),
  showPreorders: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("showPreorders"),
  ),
  maxAllowedMaturityRating: Schema.optional(Schema.String).pipe(
    T.HttpQuery("maxAllowedMaturityRating"),
  ),
  langRestrict: Schema.optional(Schema.String).pipe(
    T.HttpQuery("langRestrict"),
  ),
  startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
  printType: Schema.optional(Schema.String).pipe(T.HttpQuery("printType")),
  download: Schema.optional(Schema.String).pipe(T.HttpQuery("download")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  libraryRestrict: Schema.optional(Schema.String).pipe(
    T.HttpQuery("libraryRestrict"),
  ),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  q: Schema.String.pipe(T.HttpQuery("q")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  partner: Schema.optional(Schema.String).pipe(T.HttpQuery("partner")),
}).pipe(
  T.Http({ method: "GET", path: "books/v1/volumes" }),
  svc,
) as unknown as Schema.Schema<ListVolumesRequest>;

export type ListVolumesResponse = Volumes;
export const ListVolumesResponse = /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListVolumesError = DefaultErrors | NotFound | Forbidden;

/** Performs a book search. */
export const listVolumes: API.OperationMethod<
  ListVolumesRequest,
  ListVolumesResponse,
  ListVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVolumesRequest,
  output: ListVolumesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVolumesAssociatedRequest {
  /** Association type. */
  association?:
    | "ASSOCIATION_UNDEFINED"
    | "end-of-sample"
    | "end-of-volume"
    | "related-for-play"
    | (string & {});
  /** The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. */
  maxAllowedMaturityRating?:
    | "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    | "MATURE"
    | "not-mature"
    | (string & {});
  /** ID of the source volume. */
  volumeId: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. */
  locale?: string;
}

export const ListVolumesAssociatedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    association: Schema.optional(Schema.String).pipe(
      T.HttpQuery("association"),
    ),
    maxAllowedMaturityRating: Schema.optional(Schema.String).pipe(
      T.HttpQuery("maxAllowedMaturityRating"),
    ),
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/volumes/{volumeId}/associated" }),
    svc,
  ) as unknown as Schema.Schema<ListVolumesAssociatedRequest>;

export type ListVolumesAssociatedResponse = Volumes;
export const ListVolumesAssociatedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListVolumesAssociatedError = DefaultErrors | NotFound | Forbidden;

/** Return a list of associated books. */
export const listVolumesAssociated: API.OperationMethod<
  ListVolumesAssociatedRequest,
  ListVolumesAssociatedResponse,
  ListVolumesAssociatedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVolumesAssociatedRequest,
  output: ListVolumesAssociatedResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVolumesMybooksRequest {
  /** Maximum number of results to return. */
  maxResults?: number;
  /** String to identify the originator of this request. */
  source?: string;
  /** How the book was acquired */
  acquireMethod?:
    | "ACQUIRE_METHOD_UNDEFINED"
    | "FAMILY_SHARED"
    | "PREORDERED"
    | "PREVIOUSLY_RENTED"
    | "PUBLIC_DOMAIN"
    | "PURCHASED"
    | "RENTED"
    | "SAMPLE"
    | "UPLOADED"
    | (string & {})[];
  /** ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations. */
  locale?: string;
  /** ISO-3166-1 code to override the IP-based location. */
  country?: string;
  /** The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod. */
  processingState?:
    | "PROCESSING_STATE_UNDEFINED"
    | "COMPLETED_FAILED"
    | "COMPLETED_SUCCESS"
    | "RUNNING"
    | (string & {})[];
  /** Index of the first result to return (starts at 0) */
  startIndex?: number;
}

export const ListVolumesMybooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    acquireMethod: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("acquireMethod"),
    ),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    country: Schema.optional(Schema.String).pipe(T.HttpQuery("country")),
    processingState: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("processingState"),
    ),
    startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/volumes/mybooks" }),
    svc,
  ) as unknown as Schema.Schema<ListVolumesMybooksRequest>;

export type ListVolumesMybooksResponse = Volumes;
export const ListVolumesMybooksResponse = /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListVolumesMybooksError = DefaultErrors | NotFound | Forbidden;

/** Return a list of books in My Library. */
export const listVolumesMybooks: API.OperationMethod<
  ListVolumesMybooksRequest,
  ListVolumesMybooksResponse,
  ListVolumesMybooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVolumesMybooksRequest,
  output: ListVolumesMybooksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVolumesUseruploadedRequest {
  /** ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. */
  locale?: string;
  /** Maximum number of results to return. */
  maxResults?: number;
  /** String to identify the originator of this request. */
  source?: string;
  /** The ids of the volumes to be returned. If not specified all that match the processingState are returned. */
  volumeId?: string[];
  /** The processing state of the user uploaded volumes to be returned. */
  processingState?:
    | "PROCESSING_STATE_UNDEFINED"
    | "COMPLETED_FAILED"
    | "COMPLETED_SUCCESS"
    | "RUNNING"
    | (string & {})[];
  /** Index of the first result to return (starts at 0) */
  startIndex?: number;
}

export const ListVolumesUseruploadedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("volumeId"),
    ),
    processingState: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("processingState"),
    ),
    startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/volumes/useruploaded" }),
    svc,
  ) as unknown as Schema.Schema<ListVolumesUseruploadedRequest>;

export type ListVolumesUseruploadedResponse = Volumes;
export const ListVolumesUseruploadedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListVolumesUseruploadedError = DefaultErrors | NotFound | Forbidden;

/** Return a list of books uploaded by the current user. */
export const listVolumesUseruploaded: API.OperationMethod<
  ListVolumesUseruploadedRequest,
  ListVolumesUseruploadedResponse,
  ListVolumesUseruploadedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVolumesUseruploadedRequest,
  output: ListVolumesUseruploadedResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListVolumesRecommendedRequest {
  /** ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. */
  locale?: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. */
  maxAllowedMaturityRating?:
    | "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    | "MATURE"
    | "not-mature"
    | (string & {});
}

export const ListVolumesRecommendedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    maxAllowedMaturityRating: Schema.optional(Schema.String).pipe(
      T.HttpQuery("maxAllowedMaturityRating"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/volumes/recommended" }),
    svc,
  ) as unknown as Schema.Schema<ListVolumesRecommendedRequest>;

export type ListVolumesRecommendedResponse = Volumes;
export const ListVolumesRecommendedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListVolumesRecommendedError = DefaultErrors | NotFound | Forbidden;

/** Return a list of recommended books for the current user. */
export const listVolumesRecommended: API.OperationMethod<
  ListVolumesRecommendedRequest,
  ListVolumesRecommendedResponse,
  ListVolumesRecommendedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVolumesRecommendedRequest,
  output: ListVolumesRecommendedResponse,
  errors: [NotFound, Forbidden],
}));

export interface RateVolumesRecommendedRequest {
  /** ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. */
  locale?: string;
  /** Rating to be given to the volume. */
  rating: "RATING_UNDEFINED" | "HAVE_IT" | "NOT_INTERESTED" | (string & {});
  /** String to identify the originator of this request. */
  source?: string;
  /** ID of the source volume. */
  volumeId: string;
}

export const RateVolumesRecommendedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    rating: Schema.String.pipe(T.HttpQuery("rating")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.String.pipe(T.HttpQuery("volumeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/volumes/recommended/rate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RateVolumesRecommendedRequest>;

export type RateVolumesRecommendedResponse =
  BooksVolumesRecommendedRateResponse;
export const RateVolumesRecommendedResponse =
  /*@__PURE__*/ /*#__PURE__*/ BooksVolumesRecommendedRateResponse;

export type RateVolumesRecommendedError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rate a recommended book for the current user. */
export const rateVolumesRecommended: API.OperationMethod<
  RateVolumesRecommendedRequest,
  RateVolumesRecommendedResponse,
  RateVolumesRecommendedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RateVolumesRecommendedRequest,
  output: RateVolumesRecommendedResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFamilyInfoFamilysharingRequest {
  /** String to identify the originator of this request. */
  source?: string;
}

export const GetFamilyInfoFamilysharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/familysharing/getFamilyInfo" }),
    svc,
  ) as unknown as Schema.Schema<GetFamilyInfoFamilysharingRequest>;

export type GetFamilyInfoFamilysharingResponse = FamilyInfo;
export const GetFamilyInfoFamilysharingResponse =
  /*@__PURE__*/ /*#__PURE__*/ FamilyInfo;

export type GetFamilyInfoFamilysharingError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information regarding the family that the user is part of. */
export const getFamilyInfoFamilysharing: API.OperationMethod<
  GetFamilyInfoFamilysharingRequest,
  GetFamilyInfoFamilysharingResponse,
  GetFamilyInfoFamilysharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFamilyInfoFamilysharingRequest,
  output: GetFamilyInfoFamilysharingResponse,
  errors: [NotFound, Forbidden],
}));

export interface ShareFamilysharingRequest {
  /** The docid to share. */
  docId?: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** The volume to share. */
  volumeId?: string;
}

export const ShareFamilysharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    docId: Schema.optional(Schema.String).pipe(T.HttpQuery("docId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.optional(Schema.String).pipe(T.HttpQuery("volumeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/familysharing/share",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ShareFamilysharingRequest>;

export type ShareFamilysharingResponse = Empty;
export const ShareFamilysharingResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ShareFamilysharingError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates sharing of the content with the user's family. Empty response indicates success. */
export const shareFamilysharing: API.OperationMethod<
  ShareFamilysharingRequest,
  ShareFamilysharingResponse,
  ShareFamilysharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ShareFamilysharingRequest,
  output: ShareFamilysharingResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnshareFamilysharingRequest {
  /** The docid to unshare. */
  docId?: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** The volume to unshare. */
  volumeId?: string;
}

export const UnshareFamilysharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    docId: Schema.optional(Schema.String).pipe(T.HttpQuery("docId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    volumeId: Schema.optional(Schema.String).pipe(T.HttpQuery("volumeId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/familysharing/unshare",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnshareFamilysharingRequest>;

export type UnshareFamilysharingResponse = Empty;
export const UnshareFamilysharingResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type UnshareFamilysharingError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates revoking content that has already been shared with the user's family. Empty response indicates success. */
export const unshareFamilysharing: API.OperationMethod<
  UnshareFamilysharingRequest,
  UnshareFamilysharingResponse,
  UnshareFamilysharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnshareFamilysharingRequest,
  output: UnshareFamilysharingResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCategoriesOnboardingRequest {
  /** ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset. */
  locale?: string;
}

export const ListCategoriesOnboardingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/onboarding/listCategories" }),
    svc,
  ) as unknown as Schema.Schema<ListCategoriesOnboardingRequest>;

export type ListCategoriesOnboardingResponse = Category;
export const ListCategoriesOnboardingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Category;

export type ListCategoriesOnboardingError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List categories for onboarding experience. */
export const listCategoriesOnboarding: API.OperationMethod<
  ListCategoriesOnboardingRequest,
  ListCategoriesOnboardingResponse,
  ListCategoriesOnboardingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCategoriesOnboardingRequest,
  output: ListCategoriesOnboardingResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCategoryVolumesOnboardingRequest {
  /** Number of maximum results per page to be included in the response. */
  pageSize?: number;
  /** List of category ids requested. */
  categoryId?: string[];
  /** The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out. */
  maxAllowedMaturityRating?:
    | "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    | "MATURE"
    | "not-mature"
    | (string & {});
  /** ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset. */
  locale?: string;
  /** The value of the nextToken from the previous page. */
  pageToken?: string;
}

export const ListCategoryVolumesOnboardingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    categoryId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("categoryId"),
    ),
    maxAllowedMaturityRating: Schema.optional(Schema.String).pipe(
      T.HttpQuery("maxAllowedMaturityRating"),
    ),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/onboarding/listCategoryVolumes" }),
    svc,
  ) as unknown as Schema.Schema<ListCategoryVolumesOnboardingRequest>;

export type ListCategoryVolumesOnboardingResponse = Volume2;
export const ListCategoryVolumesOnboardingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volume2;

export type ListCategoryVolumesOnboardingError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List available volumes under categories for onboarding experience. */
export const listCategoryVolumesOnboarding: API.PaginatedOperationMethod<
  ListCategoryVolumesOnboardingRequest,
  ListCategoryVolumesOnboardingResponse,
  ListCategoryVolumesOnboardingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCategoryVolumesOnboardingRequest,
  output: ListCategoryVolumesOnboardingResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListLayersRequest {
  /** The content version for the requested volume. */
  contentVersion?: string;
  /** The volume to retrieve layers for. */
  volumeId: string;
  /** Maximum number of results to return */
  maxResults?: number;
  /** The value of the nextToken from the previous page. */
  pageToken?: string;
  /** String to identify the originator of this request. */
  source?: string;
}

export const ListLayersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentVersion: Schema.optional(Schema.String).pipe(
    T.HttpQuery("contentVersion"),
  ),
  volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
}).pipe(
  T.Http({ method: "GET", path: "books/v1/volumes/{volumeId}/layersummary" }),
  svc,
) as unknown as Schema.Schema<ListLayersRequest>;

export type ListLayersResponse = Layersummaries;
export const ListLayersResponse = /*@__PURE__*/ /*#__PURE__*/ Layersummaries;

export type ListLayersError = DefaultErrors | NotFound | Forbidden;

/** List the layer summaries for a volume. */
export const listLayers: API.OperationMethod<
  ListLayersRequest,
  ListLayersResponse,
  ListLayersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLayersRequest,
  output: ListLayersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetLayersRequest {
  /** The volume to retrieve layers for. */
  volumeId: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** The ID for the layer to get the summary for. */
  summaryId: string;
  /** The content version for the requested volume. */
  contentVersion?: string;
}

export const GetLayersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
  source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  summaryId: Schema.String.pipe(T.HttpPath("summaryId")),
  contentVersion: Schema.optional(Schema.String).pipe(
    T.HttpQuery("contentVersion"),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "books/v1/volumes/{volumeId}/layersummary/{summaryId}",
  }),
  svc,
) as unknown as Schema.Schema<GetLayersRequest>;

export type GetLayersResponse = Layersummary;
export const GetLayersResponse = /*@__PURE__*/ /*#__PURE__*/ Layersummary;

export type GetLayersError = DefaultErrors | NotFound | Forbidden;

/** Gets the layer summary for a volume. */
export const getLayers: API.OperationMethod<
  GetLayersRequest,
  GetLayersResponse,
  GetLayersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLayersRequest,
  output: GetLayersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLayersAnnotationDataRequest {
  /** The requested pixel height for any images. If height is provided width must also be provided. */
  h?: number;
  /** The ID for the layer to get the annotation data. */
  layerId: string;
  /** The requested scale for the image. */
  scale?: number;
  /** The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set. */
  annotationDataId?: string[];
  /** Maximum number of results to return */
  maxResults?: number;
  /** RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). */
  updatedMax?: string;
  /** The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. */
  locale?: string;
  /** RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). */
  updatedMin?: string;
  /** The volume to retrieve annotation data for. */
  volumeId: string;
  /** The value of the nextToken from the previous page. */
  pageToken?: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** The content version for the requested volume. */
  contentVersion: string;
  /** The requested pixel width for any images. If width is provided height must also be provided. */
  w?: number;
}

export const ListLayersAnnotationDataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    h: Schema.optional(Schema.Number).pipe(T.HttpQuery("h")),
    layerId: Schema.String.pipe(T.HttpPath("layerId")),
    scale: Schema.optional(Schema.Number).pipe(T.HttpQuery("scale")),
    annotationDataId: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("annotationDataId"),
    ),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    updatedMax: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMax")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    updatedMin: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMin")),
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    contentVersion: Schema.String.pipe(T.HttpQuery("contentVersion")),
    w: Schema.optional(Schema.Number).pipe(T.HttpQuery("w")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/volumes/{volumeId}/layers/{layerId}/data",
    }),
    svc,
  ) as unknown as Schema.Schema<ListLayersAnnotationDataRequest>;

export type ListLayersAnnotationDataResponse = Annotationsdata;
export const ListLayersAnnotationDataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Annotationsdata;

export type ListLayersAnnotationDataError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the annotation data for a volume and layer. */
export const listLayersAnnotationData: API.PaginatedOperationMethod<
  ListLayersAnnotationDataRequest,
  ListLayersAnnotationDataResponse,
  ListLayersAnnotationDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLayersAnnotationDataRequest,
  output: ListLayersAnnotationDataResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface GetLayersAnnotationDataRequest {
  /** String to identify the originator of this request. */
  source?: string;
  /** The ID of the annotation data to retrieve. */
  annotationDataId: string;
  /** For the dictionary layer. Whether or not to allow web definitions. */
  allowWebDefinitions?: boolean;
  /** The requested pixel width for any images. If width is provided height must also be provided. */
  w?: number;
  /** The content version for the volume you are trying to retrieve. */
  contentVersion: string;
  /** The volume to retrieve annotations for. */
  volumeId: string;
  /** The requested pixel height for any images. If height is provided width must also be provided. */
  h?: number;
  /** The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. */
  locale?: string;
  /** The requested scale for the image. */
  scale?: number;
  /** The ID for the layer to get the annotations. */
  layerId: string;
}

export const GetLayersAnnotationDataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    annotationDataId: Schema.String.pipe(T.HttpPath("annotationDataId")),
    allowWebDefinitions: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowWebDefinitions"),
    ),
    w: Schema.optional(Schema.Number).pipe(T.HttpQuery("w")),
    contentVersion: Schema.String.pipe(T.HttpQuery("contentVersion")),
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    h: Schema.optional(Schema.Number).pipe(T.HttpQuery("h")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    scale: Schema.optional(Schema.Number).pipe(T.HttpQuery("scale")),
    layerId: Schema.String.pipe(T.HttpPath("layerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetLayersAnnotationDataRequest>;

export type GetLayersAnnotationDataResponse = DictionaryAnnotationdata;
export const GetLayersAnnotationDataResponse =
  /*@__PURE__*/ /*#__PURE__*/ DictionaryAnnotationdata;

export type GetLayersAnnotationDataError = DefaultErrors | NotFound | Forbidden;

/** Gets the annotation data. */
export const getLayersAnnotationData: API.OperationMethod<
  GetLayersAnnotationDataRequest,
  GetLayersAnnotationDataResponse,
  GetLayersAnnotationDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLayersAnnotationDataRequest,
  output: GetLayersAnnotationDataResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetLayersVolumeAnnotationsRequest {
  /** The volume to retrieve annotations for. */
  volumeId: string;
  /** String to identify the originator of this request. */
  source?: string;
  /** The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. */
  locale?: string;
  /** The ID of the volume annotation to retrieve. */
  annotationId: string;
  /** The ID for the layer to get the annotations. */
  layerId: string;
}

export const GetLayersVolumeAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    annotationId: Schema.String.pipe(T.HttpPath("annotationId")),
    layerId: Schema.String.pipe(T.HttpPath("layerId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}",
    }),
    svc,
  ) as unknown as Schema.Schema<GetLayersVolumeAnnotationsRequest>;

export type GetLayersVolumeAnnotationsResponse = Volumeannotation;
export const GetLayersVolumeAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumeannotation;

export type GetLayersVolumeAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the volume annotation. */
export const getLayersVolumeAnnotations: API.OperationMethod<
  GetLayersVolumeAnnotationsRequest,
  GetLayersVolumeAnnotationsResponse,
  GetLayersVolumeAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLayersVolumeAnnotationsRequest,
  output: GetLayersVolumeAnnotationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListLayersVolumeAnnotationsRequest {
  /** Maximum number of results to return */
  maxResults?: number;
  /** RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive). */
  updatedMax?: string;
  /** The end position to end retrieving data from. */
  endPosition?: string;
  /** The ID for the layer to get the annotations. */
  layerId: string;
  /** Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false. */
  showDeleted?: boolean;
  /** String to identify the originator of this request. */
  source?: string;
  /** The content version for the requested volume. */
  contentVersion: string;
  /** The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. */
  locale?: string;
  /** The version of the volume annotations that you are requesting. */
  volumeAnnotationsVersion?: string;
  /** The start offset to start retrieving data from. */
  startOffset?: string;
  /** RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive). */
  updatedMin?: string;
  /** The volume to retrieve annotations for. */
  volumeId: string;
  /** The value of the nextToken from the previous page. */
  pageToken?: string;
  /** The start position to start retrieving data from. */
  startPosition?: string;
  /** The end offset to end retrieving data from. */
  endOffset?: string;
}

export const ListLayersVolumeAnnotationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    updatedMax: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMax")),
    endPosition: Schema.optional(Schema.String).pipe(
      T.HttpQuery("endPosition"),
    ),
    layerId: Schema.String.pipe(T.HttpPath("layerId")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    contentVersion: Schema.String.pipe(T.HttpQuery("contentVersion")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
    volumeAnnotationsVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("volumeAnnotationsVersion"),
    ),
    startOffset: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startOffset"),
    ),
    updatedMin: Schema.optional(Schema.String).pipe(T.HttpQuery("updatedMin")),
    volumeId: Schema.String.pipe(T.HttpPath("volumeId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    startPosition: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startPosition"),
    ),
    endOffset: Schema.optional(Schema.String).pipe(T.HttpQuery("endOffset")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/volumes/{volumeId}/layers/{layerId}",
    }),
    svc,
  ) as unknown as Schema.Schema<ListLayersVolumeAnnotationsRequest>;

export type ListLayersVolumeAnnotationsResponse = Volumeannotations;
export const ListLayersVolumeAnnotationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumeannotations;

export type ListLayersVolumeAnnotationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the volume annotations for a volume and layer. */
export const listLayersVolumeAnnotations: API.PaginatedOperationMethod<
  ListLayersVolumeAnnotationsRequest,
  ListLayersVolumeAnnotationsResponse,
  ListLayersVolumeAnnotationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLayersVolumeAnnotationsRequest,
  output: ListLayersVolumeAnnotationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListBookshelvesRequest {
  /** ID of user for whom to retrieve bookshelves. */
  userId: string;
  /** String to identify the originator of this request. */
  source?: string;
}

export const ListBookshelvesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    userId: Schema.String.pipe(T.HttpPath("userId")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  },
).pipe(
  T.Http({ method: "GET", path: "books/v1/users/{userId}/bookshelves" }),
  svc,
) as unknown as Schema.Schema<ListBookshelvesRequest>;

export type ListBookshelvesResponse = Bookshelves;
export const ListBookshelvesResponse = /*@__PURE__*/ /*#__PURE__*/ Bookshelves;

export type ListBookshelvesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a list of public bookshelves for the specified user. */
export const listBookshelves: API.OperationMethod<
  ListBookshelvesRequest,
  ListBookshelvesResponse,
  ListBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBookshelvesRequest,
  output: ListBookshelvesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetBookshelvesRequest {
  /** ID of user for whom to retrieve bookshelves. */
  userId: string;
  /** ID of bookshelf to retrieve. */
  shelf: string;
  /** String to identify the originator of this request. */
  source?: string;
}

export const GetBookshelvesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.HttpPath("userId")),
  shelf: Schema.String.pipe(T.HttpPath("shelf")),
  source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
}).pipe(
  T.Http({
    method: "GET",
    path: "books/v1/users/{userId}/bookshelves/{shelf}",
  }),
  svc,
) as unknown as Schema.Schema<GetBookshelvesRequest>;

export type GetBookshelvesResponse = Bookshelf;
export const GetBookshelvesResponse = /*@__PURE__*/ /*#__PURE__*/ Bookshelf;

export type GetBookshelvesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves metadata for a specific bookshelf for the specified user. */
export const getBookshelves: API.OperationMethod<
  GetBookshelvesRequest,
  GetBookshelvesResponse,
  GetBookshelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBookshelvesRequest,
  output: GetBookshelvesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBookshelvesVolumesRequest {
  /** Index of the first element to return (starts at 0) */
  startIndex?: number;
  /** ID of user for whom to retrieve bookshelf volumes. */
  userId: string;
  /** Set to true to show pre-ordered books. Defaults to false. */
  showPreorders?: boolean;
  /** ID of bookshelf to retrieve volumes. */
  shelf: string;
  /** Maximum number of results to return */
  maxResults?: number;
  /** String to identify the originator of this request. */
  source?: string;
}

export const ListBookshelvesVolumesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIndex: Schema.optional(Schema.Number).pipe(T.HttpQuery("startIndex")),
    userId: Schema.String.pipe(T.HttpPath("userId")),
    showPreorders: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showPreorders"),
    ),
    shelf: Schema.String.pipe(T.HttpPath("shelf")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "books/v1/users/{userId}/bookshelves/{shelf}/volumes",
    }),
    svc,
  ) as unknown as Schema.Schema<ListBookshelvesVolumesRequest>;

export type ListBookshelvesVolumesResponse = Volumes;
export const ListBookshelvesVolumesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Volumes;

export type ListBookshelvesVolumesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves volumes in a specific bookshelf for the specified user. */
export const listBookshelvesVolumes: API.OperationMethod<
  ListBookshelvesVolumesRequest,
  ListBookshelvesVolumesResponse,
  ListBookshelvesVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListBookshelvesVolumesRequest,
  output: ListBookshelvesVolumesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetNotificationRequest {
  /** String to identify the originator of this request. */
  source?: string;
  /** String to identify the notification. */
  notification_id: string;
  /** ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body. */
  locale?: string;
}

export const GetNotificationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    notification_id: Schema.String.pipe(T.HttpQuery("notification_id")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
  },
).pipe(
  T.Http({ method: "GET", path: "books/v1/notification/get" }),
  svc,
) as unknown as Schema.Schema<GetNotificationRequest>;

export type GetNotificationResponse = Notification;
export const GetNotificationResponse = /*@__PURE__*/ /*#__PURE__*/ Notification;

export type GetNotificationError = DefaultErrors | NotFound | Forbidden;

/** Returns notification details for a given notification id. */
export const getNotification: API.OperationMethod<
  GetNotificationRequest,
  GetNotificationResponse,
  GetNotificationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNotificationRequest,
  output: GetNotificationResponse,
  errors: [NotFound, Forbidden],
}));

export interface AcceptPromoofferRequest {
  /** device model */
  model?: string;
  /** device android_id */
  androidId?: string;
  /** device serial */
  serial?: string;
  /** Volume id to exercise the offer */
  volumeId?: string;
  /** device product */
  product?: string;
  /** device device */
  device?: string;
  /** device manufacturer */
  manufacturer?: string;
  offerId?: string;
}

export const AcceptPromoofferRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    androidId: Schema.optional(Schema.String).pipe(T.HttpQuery("androidId")),
    serial: Schema.optional(Schema.String).pipe(T.HttpQuery("serial")),
    volumeId: Schema.optional(Schema.String).pipe(T.HttpQuery("volumeId")),
    product: Schema.optional(Schema.String).pipe(T.HttpQuery("product")),
    device: Schema.optional(Schema.String).pipe(T.HttpQuery("device")),
    manufacturer: Schema.optional(Schema.String).pipe(
      T.HttpQuery("manufacturer"),
    ),
    offerId: Schema.optional(Schema.String).pipe(T.HttpQuery("offerId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/promooffer/accept",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AcceptPromoofferRequest>;

export type AcceptPromoofferResponse = Empty;
export const AcceptPromoofferResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type AcceptPromoofferError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts the promo offer. */
export const acceptPromooffer: API.OperationMethod<
  AcceptPromoofferRequest,
  AcceptPromoofferResponse,
  AcceptPromoofferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcceptPromoofferRequest,
  output: AcceptPromoofferResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DismissPromoofferRequest {
  /** device product */
  product?: string;
  /** device device */
  device?: string;
  /** device manufacturer */
  manufacturer?: string;
  /** Offer to dimiss */
  offerId?: string;
  /** device model */
  model?: string;
  /** device android_id */
  androidId?: string;
  /** device serial */
  serial?: string;
}

export const DismissPromoofferRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    product: Schema.optional(Schema.String).pipe(T.HttpQuery("product")),
    device: Schema.optional(Schema.String).pipe(T.HttpQuery("device")),
    manufacturer: Schema.optional(Schema.String).pipe(
      T.HttpQuery("manufacturer"),
    ),
    offerId: Schema.optional(Schema.String).pipe(T.HttpQuery("offerId")),
    model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
    androidId: Schema.optional(Schema.String).pipe(T.HttpQuery("androidId")),
    serial: Schema.optional(Schema.String).pipe(T.HttpQuery("serial")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "books/v1/promooffer/dismiss",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DismissPromoofferRequest>;

export type DismissPromoofferResponse = Empty;
export const DismissPromoofferResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DismissPromoofferError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks the promo offer as dismissed. */
export const dismissPromooffer: API.OperationMethod<
  DismissPromoofferRequest,
  DismissPromoofferResponse,
  DismissPromoofferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissPromoofferRequest,
  output: DismissPromoofferResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPromoofferRequest {
  /** device android_id */
  androidId?: string;
  /** device serial */
  serial?: string;
  /** device model */
  model?: string;
  /** device device */
  device?: string;
  /** device manufacturer */
  manufacturer?: string;
  /** device product */
  product?: string;
}

export const GetPromoofferRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  androidId: Schema.optional(Schema.String).pipe(T.HttpQuery("androidId")),
  serial: Schema.optional(Schema.String).pipe(T.HttpQuery("serial")),
  model: Schema.optional(Schema.String).pipe(T.HttpQuery("model")),
  device: Schema.optional(Schema.String).pipe(T.HttpQuery("device")),
  manufacturer: Schema.optional(Schema.String).pipe(
    T.HttpQuery("manufacturer"),
  ),
  product: Schema.optional(Schema.String).pipe(T.HttpQuery("product")),
}).pipe(
  T.Http({ method: "GET", path: "books/v1/promooffer/get" }),
  svc,
) as unknown as Schema.Schema<GetPromoofferRequest>;

export type GetPromoofferResponse = Offers;
export const GetPromoofferResponse = /*@__PURE__*/ /*#__PURE__*/ Offers;

export type GetPromoofferError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of promo offers available to the user */
export const getPromooffer: API.OperationMethod<
  GetPromoofferRequest,
  GetPromoofferResponse,
  GetPromoofferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPromoofferRequest,
  output: GetPromoofferResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetPersonalizedstreamRequest {
  /** The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out. */
  maxAllowedMaturityRating?:
    | "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    | "MATURE"
    | "not-mature"
    | (string & {});
  /** String to identify the originator of this request. */
  source?: string;
  /** ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations. */
  locale?: string;
}

export const GetPersonalizedstreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxAllowedMaturityRating: Schema.optional(Schema.String).pipe(
      T.HttpQuery("maxAllowedMaturityRating"),
    ),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    locale: Schema.optional(Schema.String).pipe(T.HttpQuery("locale")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/personalizedstream/get" }),
    svc,
  ) as unknown as Schema.Schema<GetPersonalizedstreamRequest>;

export type GetPersonalizedstreamResponse = Discoveryclusters;
export const GetPersonalizedstreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ Discoveryclusters;

export type GetPersonalizedstreamError = DefaultErrors | NotFound | Forbidden;

/** Returns a stream of personalized book clusters */
export const getPersonalizedstream: API.OperationMethod<
  GetPersonalizedstreamRequest,
  GetPersonalizedstreamResponse,
  GetPersonalizedstreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPersonalizedstreamRequest,
  output: GetPersonalizedstreamResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOfflineMetadataDictionaryRequest {
  /** The device/version ID from which to request the data. */
  cpksver: string;
}

export const ListOfflineMetadataDictionaryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpksver: Schema.String.pipe(T.HttpQuery("cpksver")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/dictionary/listOfflineMetadata" }),
    svc,
  ) as unknown as Schema.Schema<ListOfflineMetadataDictionaryRequest>;

export type ListOfflineMetadataDictionaryResponse = Metadata;
export const ListOfflineMetadataDictionaryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Metadata;

export type ListOfflineMetadataDictionaryError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of offline dictionary metadata available */
export const listOfflineMetadataDictionary: API.OperationMethod<
  ListOfflineMetadataDictionaryRequest,
  ListOfflineMetadataDictionaryResponse,
  ListOfflineMetadataDictionaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOfflineMetadataDictionaryRequest,
  output: ListOfflineMetadataDictionaryResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSeriesRequest {
  /** String that identifies the series */
  series_id: string[];
}

export const GetSeriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  series_id: Schema.Array(Schema.String).pipe(T.HttpQuery("series_id")),
}).pipe(
  T.Http({ method: "GET", path: "books/v1/series/get" }),
  svc,
) as unknown as Schema.Schema<GetSeriesRequest>;

export type GetSeriesResponse = Series;
export const GetSeriesResponse = /*@__PURE__*/ /*#__PURE__*/ Series;

export type GetSeriesError = DefaultErrors | NotFound | Forbidden;

/** Returns Series metadata for the given series ids. */
export const getSeries: API.OperationMethod<
  GetSeriesRequest,
  GetSeriesResponse,
  GetSeriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSeriesRequest,
  output: GetSeriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSeriesMembershipRequest {
  /** Number of maximum results per page to be included in the response. */
  page_size?: number;
  /** String that identifies the series */
  series_id: string;
  /** The value of the nextToken from the previous page. */
  page_token?: string;
}

export const GetSeriesMembershipRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page_size: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_size")),
    series_id: Schema.String.pipe(T.HttpQuery("series_id")),
    page_token: Schema.optional(Schema.String).pipe(T.HttpQuery("page_token")),
  }).pipe(
    T.Http({ method: "GET", path: "books/v1/series/membership/get" }),
    svc,
  ) as unknown as Schema.Schema<GetSeriesMembershipRequest>;

export type GetSeriesMembershipResponse = Seriesmembership;
export const GetSeriesMembershipResponse =
  /*@__PURE__*/ /*#__PURE__*/ Seriesmembership;

export type GetSeriesMembershipError = DefaultErrors | NotFound | Forbidden;

/** Returns Series membership data given the series id. */
export const getSeriesMembership: API.OperationMethod<
  GetSeriesMembershipRequest,
  GetSeriesMembershipResponse,
  GetSeriesMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSeriesMembershipRequest,
  output: GetSeriesMembershipResponse,
  errors: [NotFound, Forbidden],
}));
