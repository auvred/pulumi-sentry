import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * List a Project's Client Keys.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const all = sentry.getSentryAllKeys({
 *     organization: "my-organization",
 *     project: "web-app",
 * });
 * ```
 */
export declare function getSentryAllKeys(args: GetSentryAllKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryAllKeysResult>;
/**
 * A collection of arguments for invoking getSentryAllKeys.
 */
export interface GetSentryAllKeysArgs {
    /**
     * Filter client keys by `active` or `inactive`. Defaults to returning all keys if not specified.
     */
    filterStatus?: string;
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
 * A collection of values returned by getSentryAllKeys.
 */
export interface GetSentryAllKeysResult {
    /**
     * Filter client keys by `active` or `inactive`. Defaults to returning all keys if not specified.
     */
    readonly filterStatus?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The list of client keys.
     */
    readonly keys: outputs.GetSentryAllKeysKey[];
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: string;
    /**
     * The slug of the project the resource belongs to.
     */
    readonly project: string;
}
/**
 * List a Project's Client Keys.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const all = sentry.getSentryAllKeys({
 *     organization: "my-organization",
 *     project: "web-app",
 * });
 * ```
 */
export declare function getSentryAllKeysOutput(args: GetSentryAllKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryAllKeysResult>;
/**
 * A collection of arguments for invoking getSentryAllKeys.
 */
export interface GetSentryAllKeysOutputArgs {
    /**
     * Filter client keys by `active` or `inactive`. Defaults to returning all keys if not specified.
     */
    filterStatus?: pulumi.Input<string>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of the project the resource belongs to.
     */
    project: pulumi.Input<string>;
}
