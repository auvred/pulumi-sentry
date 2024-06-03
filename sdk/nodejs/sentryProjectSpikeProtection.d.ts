import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Project Spike Protection resource. This resource is used to create and manage spike protection for a project.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const defaultSentryProject = new sentry.SentryProject("defaultSentryProject", {
 *     organization: "my-organization",
 *     teams: [
 *         "my-first-team",
 *         "my-second-team",
 *     ],
 *     platform: "javascript",
 * });
 * // Enable spike protection for the project
 * const defaultSentryProjectSpikeProtection = new sentry.SentryProjectSpikeProtection("defaultSentryProjectSpikeProtection", {
 *     organization: defaultSentryProject.organization,
 *     project: defaultSentryProject.id,
 *     enabled: true,
 * });
 * ```
 */
export declare class SentryProjectSpikeProtection extends pulumi.CustomResource {
    /**
     * Get an existing SentryProjectSpikeProtection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryProjectSpikeProtectionState, opts?: pulumi.CustomResourceOptions): SentryProjectSpikeProtection;
    /**
     * Returns true if the given object is an instance of SentryProjectSpikeProtection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryProjectSpikeProtection;
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The slug of the organization the project belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The slug of the project to enable or disable spike protection for.
     */
    readonly project: pulumi.Output<string>;
    /**
     * Create a SentryProjectSpikeProtection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryProjectSpikeProtectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryProjectSpikeProtection resources.
 */
export interface SentryProjectSpikeProtectionState {
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The slug of the project to enable or disable spike protection for.
     */
    project?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryProjectSpikeProtection resource.
 */
export interface SentryProjectSpikeProtectionArgs {
    /**
     * Toggle the browser-extensions, localhost, filtered-transaction, or web-crawlers filter on or off.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The slug of the project to enable or disable spike protection for.
     */
    project: pulumi.Input<string>;
}
