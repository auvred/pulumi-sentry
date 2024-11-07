import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the sentry package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * The target Sentry Base API URL in the format `https://[hostname]/api/`. The default value is `https://sentry.io/api/`.
     * The value must be provided when working with Sentry On-Premise. The value can be sourced from the `SENTRY_BASE_URL`
     * environment variable.
     */
    readonly baseUrl: pulumi.Output<string | undefined>;
    /**
     * The authentication token used to connect to Sentry. The value can be sourced from the `SENTRY_AUTH_TOKEN` environment
     * variable.
     */
    readonly token: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The target Sentry Base API URL in the format `https://[hostname]/api/`. The default value is `https://sentry.io/api/`.
     * The value must be provided when working with Sentry On-Premise. The value can be sourced from the `SENTRY_BASE_URL`
     * environment variable.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * The authentication token used to connect to Sentry. The value can be sourced from the `SENTRY_AUTH_TOKEN` environment
     * variable.
     */
    token?: pulumi.Input<string>;
}
