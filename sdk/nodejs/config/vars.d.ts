/**
 * The target Sentry Base API URL in the format `https://[hostname]/api/`. The default value is `https://sentry.io/api/`.
 * The value must be provided when working with Sentry On-Premise. The value can be sourced from the `SENTRY_BASE_URL`
 * environment variable.
 */
export declare const baseUrl: string | undefined;
/**
 * The authentication token used to connect to Sentry. The value can be sourced from the `SENTRY_AUTH_TOKEN` environment
 * variable.
 */
export declare const token: string | undefined;
