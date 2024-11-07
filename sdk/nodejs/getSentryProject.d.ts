import * as pulumi from "@pulumi/pulumi";
/**
 * Return a list of projects available to the authenticated session.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 *
 * const default = sentry.getSentryProject({
 *     organization: "my-organization",
 *     slug: "my-project",
 * });
 * ```
 */
export declare function getSentryProject(args: GetSentryProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetSentryProjectResult>;
/**
 * A collection of arguments for invoking getSentryProject.
 */
export interface GetSentryProjectArgs {
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: string;
    /**
     * The slug of this project.
     */
    slug: string;
}
/**
 * A collection of values returned by getSentryProject.
 */
export interface GetSentryProjectResult {
    /**
     * The color of this project.
     */
    readonly color: string;
    /**
     * The date this project was created.
     */
    readonly dateCreated: string;
    /**
     * The features of this project.
     */
    readonly features: string[];
    /**
     * The slug of this project.
     */
    readonly id: string;
    /**
     * The internal ID of this project.
     */
    readonly internalId: string;
    /**
     * Whether this project is public.
     */
    readonly isPublic: boolean;
    /**
     * The name of this project.
     */
    readonly name: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: string;
    /**
     * The platform of this project.
     */
    readonly platform: string;
    /**
     * The slug of this project.
     */
    readonly slug: string;
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
 * const default = sentry.getSentryProject({
 *     organization: "my-organization",
 *     slug: "my-project",
 * });
 * ```
 */
export declare function getSentryProjectOutput(args: GetSentryProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSentryProjectResult>;
/**
 * A collection of arguments for invoking getSentryProject.
 */
export interface GetSentryProjectOutputArgs {
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of this project.
     */
    slug: pulumi.Input<string>;
}
