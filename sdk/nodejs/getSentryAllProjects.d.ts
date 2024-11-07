import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Return a list of projects available to the authenticated session.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryAllProjects({
 *     organization: "my-organization",
 * });
 * ```
 */
export declare function getSentryAllProjects(args: GetSentryAllProjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryAllProjectsResult>;
/**
 * A collection of arguments for invoking getSentryAllProjects.
 */
export interface GetSentryAllProjectsArgs {
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: string;
}
/**
 * A collection of values returned by getSentryAllProjects.
 */
export interface GetSentryAllProjectsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: string;
    /**
     * The slugs of the projects.
     */
    readonly projectSlugs: string[];
    /**
     * The list of projects.
     */
    readonly projects: outputs.GetSentryAllProjectsProject[];
}
/**
 * Return a list of projects available to the authenticated session.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryAllProjects({
 *     organization: "my-organization",
 * });
 * ```
 */
export declare function getSentryAllProjectsOutput(args: GetSentryAllProjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryAllProjectsResult>;
/**
 * A collection of arguments for invoking getSentryAllProjects.
 */
export interface GetSentryAllProjectsOutputArgs {
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
}
