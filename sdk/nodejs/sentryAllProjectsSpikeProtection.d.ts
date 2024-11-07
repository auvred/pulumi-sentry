import * as pulumi from "@pulumi/pulumi";
/**
 * Enable spike protection for all projects in an organization.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumi/sentry";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Enable spike protection for several projects in a Sentry organization.
 * const web_app = new sentry.SentryProject("web-app", {
 *     organization: "my-organization",
 *     teams: ["my-first-team"],
 *     slug: "web-app",
 *     platform: "go",
 * });
 * const mobile_app = new sentry.SentryProject("mobile-app", {
 *     organization: "my-organization",
 *     teams: ["my-second-team"],
 *     slug: "mobile-app",
 *     platform: "android",
 * });
 * const mainSentryAllProjectsSpikeProtection = new sentry.SentryAllProjectsSpikeProtection("mainSentryAllProjectsSpikeProtection", {
 *     organization: "my-organization",
 *     projects: [
 *         web_app.id,
 *         mobile_app.id,
 *     ],
 *     enabled: true,
 * });
 * const all = sentry.getSentryAllProjects({
 *     organization: "my-organization",
 * });
 * const mainIndex_sentryAllProjectsSpikeProtectionSentryAllProjectsSpikeProtection = new sentry.SentryAllProjectsSpikeProtection("mainIndex/sentryAllProjectsSpikeProtectionSentryAllProjectsSpikeProtection", {
 *     organization: all.then(all => all.organization),
 *     projects: all.then(all => all.projectSlugs),
 *     enabled: true,
 * });
 * ```
 */
export declare class SentryAllProjectsSpikeProtection extends pulumi.CustomResource {
    /**
     * Get an existing SentryAllProjectsSpikeProtection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryAllProjectsSpikeProtectionState, opts?: pulumi.CustomResourceOptions): SentryAllProjectsSpikeProtection;
    /**
     * Returns true if the given object is an instance of SentryAllProjectsSpikeProtection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryAllProjectsSpikeProtection;
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The slug of the organization the resource belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The slugs of the projects to enable or disable spike protection for.
     */
    readonly projects: pulumi.Output<string[]>;
    /**
     * Create a SentryAllProjectsSpikeProtection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryAllProjectsSpikeProtectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryAllProjectsSpikeProtection resources.
 */
export interface SentryAllProjectsSpikeProtectionState {
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The slugs of the projects to enable or disable spike protection for.
     */
    projects?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a SentryAllProjectsSpikeProtection resource.
 */
export interface SentryAllProjectsSpikeProtectionArgs {
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off for all projects.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slugs of the projects to enable or disable spike protection for.
     */
    projects: pulumi.Input<pulumi.Input<string>[]>;
}
