import * as pulumi from "@pulumi/pulumi";
/**
 * Retrieve a Project's Client Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryKey({
 *     name: "Default",
 *     organization: "my-organization",
 *     project: "web-app",
 * });
 * const first = sentry.getSentryKey({
 *     first: true,
 *     organization: "my-organization",
 *     project: "web-app",
 * });
 * ```
 */
export declare function getSentryKey(args: GetSentryKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryKeyResult>;
/**
 * A collection of arguments for invoking getSentryKey.
 */
export interface GetSentryKeyArgs {
    /**
     * Boolean flag indicating that we want the first key of the returned keys.
     */
    first?: boolean;
    /**
     * The ID of this resource.
     */
    id?: string;
    /**
     * The name of the client key.
     */
    name?: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: string;
    /**
     * The slug of the project the resource belongs to.
     */
    project: string;
}
/**
 * A collection of values returned by getSentryKey.
 */
export interface GetSentryKeyResult {
    /**
     * Security header endpoint for features like CSP and Expect-CT reports.
     */
    readonly dsnCsp: string;
    /**
     * The DSN tells the SDK where to send the events to.
     */
    readonly dsnPublic: string;
    /**
     * Deprecated DSN includes a secret which is no longer required by newer SDK versions. If you are unsure which to use, follow installation instructions for your language.
     */
    readonly dsnSecret: string;
    /**
     * Boolean flag indicating that we want the first key of the returned keys.
     */
    readonly first?: boolean;
    /**
     * The ID of this resource.
     */
    readonly id?: string;
    /**
     * The name of the client key.
     */
    readonly name?: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: string;
    /**
     * The slug of the project the resource belongs to.
     */
    readonly project: string;
    /**
     * The ID of the project that the key belongs to.
     */
    readonly projectId: string;
    /**
     * The public key.
     */
    readonly public: string;
    /**
     * Number of events that can be reported within the rate limit window.
     */
    readonly rateLimitCount: number;
    /**
     * Length of time that will be considered when checking the rate limit.
     */
    readonly rateLimitWindow: number;
    /**
     * The secret key.
     */
    readonly secret: string;
}
/**
 * Retrieve a Project's Client Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryKey({
 *     name: "Default",
 *     organization: "my-organization",
 *     project: "web-app",
 * });
 * const first = sentry.getSentryKey({
 *     first: true,
 *     organization: "my-organization",
 *     project: "web-app",
 * });
 * ```
 */
export declare function getSentryKeyOutput(args: GetSentryKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryKeyResult>;
/**
 * A collection of arguments for invoking getSentryKey.
 */
export interface GetSentryKeyOutputArgs {
    /**
     * Boolean flag indicating that we want the first key of the returned keys.
     */
    first?: pulumi.Input<boolean>;
    /**
     * The ID of this resource.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the client key.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of the project the resource belongs to.
     */
    project: pulumi.Input<string>;
}