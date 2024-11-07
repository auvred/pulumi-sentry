import * as pulumi from "@pulumi/pulumi";
/**
 * Sentry Plugin resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * // Create a plugin
 * const _default = new sentry.SentryPlugin("default", {
 *     config: {
 *         webhook: "slack://webhook",
 *     },
 *     organization: "my-organization",
 *     plugin: "slack",
 *     project: "web-app",
 * });
 * ```
 */
export declare class SentryPlugin extends pulumi.CustomResource {
    /**
     * Get an existing SentryPlugin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryPluginState, opts?: pulumi.CustomResourceOptions): SentryPlugin;
    /**
     * Returns true if the given object is an instance of SentryPlugin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryPlugin;
    /**
     * Plugin config.
     */
    readonly config: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The slug of the organization the project belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * Plugin ID.
     */
    readonly plugin: pulumi.Output<string>;
    /**
     * The slug of the project to create the plugin for.
     */
    readonly project: pulumi.Output<string>;
    /**
     * Create a SentryPlugin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryPluginArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryPlugin resources.
 */
export interface SentryPluginState {
    /**
     * Plugin config.
     */
    config?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * Plugin ID.
     */
    plugin?: pulumi.Input<string>;
    /**
     * The slug of the project to create the plugin for.
     */
    project?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryPlugin resource.
 */
export interface SentryPluginArgs {
    /**
     * Plugin config.
     */
    config?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * Plugin ID.
     */
    plugin: pulumi.Input<string>;
    /**
     * The slug of the project to create the plugin for.
     */
    project: pulumi.Input<string>;
}
