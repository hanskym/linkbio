export interface MetadataProps {
  /** The title of the page, shown in the browser tab and search results */
  title?: string;

  /** A brief description of the page for SEO and social sharing */
  description?: string;

  /** Comma-separated keywords for SEO purposes */
  keywords?: string;

  /** The name of the content's author */
  author?: string;

  /** URL to an image used in Open Graph and Twitter cards */
  image?: string;

  /** Locale identifier, e.g., 'en_US' */
  locale?: string;

  /** Twitter handle of the content or site owner, e.g., '@yourhandle' */
  twitterHandle?: string;
}
