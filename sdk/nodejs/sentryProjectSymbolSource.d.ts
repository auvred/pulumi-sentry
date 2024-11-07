import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Sentry Project Symbol Source. See the [Sentry documentation](https://docs.sentry.io/api/projects/add-a-symbol-source-to-a-project/) for more information.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sentry from "@pulumiverse/sentry";
 *
 * const _default = new sentry.SentryProject("default", {
 *     organization: "my-organization",
 *     teams: [
 *         "my-first-team",
 *         "my-second-team",
 *     ],
 *     platform: "javascript",
 * });
 * // Add an App Store Connect source to the project
 * const httpSentryProjectSymbolSource = new sentry.SentryProjectSymbolSource("httpSentryProjectSymbolSource", {
 *     organization: _default.organization,
 *     project: _default.id,
 *     type: "appStoreConnect",
 *     layout: {
 *         type: "native",
 *         casing: "default",
 *     },
 *     appConnectIssuer: "app_connect_issuer",
 *     appConnectPrivateKey: `-----BEGIN PRIVATE KEY-----
 * [PRIVATE-KEY]
 * -----END PRIVATE KEY-----
 * `,
 *     appId: "app_id",
 * });
 * // Add a SymbolServer (HTTP) symbol source to the project
 * const httpIndex_sentryProjectSymbolSourceSentryProjectSymbolSource = new sentry.SentryProjectSymbolSource("httpIndex/sentryProjectSymbolSourceSentryProjectSymbolSource", {
 *     organization: _default.organization,
 *     project: _default.id,
 *     type: "http",
 *     layout: {
 *         type: "native",
 *         casing: "default",
 *     },
 *     url: "https://example.com",
 * });
 * // Add a Google Cloud Storage symbol source to the project
 * const gcs = new sentry.SentryProjectSymbolSource("gcs", {
 *     organization: _default.organization,
 *     project: _default.id,
 *     type: "s3",
 *     layout: {
 *         type: "native",
 *         casing: "default",
 *     },
 *     bucket: "gcs-bucket-name",
 *     clientEmail: "user@project.iam.gserviceaccount.com",
 *     privateKey: `-----BEGIN PRIVATE KEY-----
 * [PRIVATE-KEY]
 * -----END PRIVATE KEY-----
 * `,
 * });
 * // Add an Amazon S3 symbol source to the project
 * const s3 = new sentry.SentryProjectSymbolSource("s3", {
 *     organization: _default.organization,
 *     project: _default.id,
 *     type: "s3",
 *     layout: {
 *         type: "native",
 *         casing: "default",
 *     },
 *     bucket: "s3-bucket-name",
 *     region: "us-east-1",
 *     accessKey: "access_key",
 *     secretKey: "secret_key",
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 * $ pulumi import sentry:index/sentryProjectSymbolSource:SentryProjectSymbolSource default org-slug/project-slug/symbol-source-id
 * ```
 */
export declare class SentryProjectSymbolSource extends pulumi.CustomResource {
    /**
     * Get an existing SentryProjectSymbolSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentryProjectSymbolSourceState, opts?: pulumi.CustomResourceOptions): SentryProjectSymbolSource;
    /**
     * Returns true if the given object is an instance of SentryProjectSymbolSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SentryProjectSymbolSource;
    /**
     * The AWS Access Key.Required for S3 sources, invalid for all others.
     */
    readonly accessKey: pulumi.Output<string | undefined>;
    /**
     * The App Store Connect Issuer ID. Required for AppStoreConnect sources, invalid for all others.
     */
    readonly appConnectIssuer: pulumi.Output<string | undefined>;
    /**
     * The App Store Connect API Private Key. Required for AppStoreConnect sources, invalid for all others.
     */
    readonly appConnectPrivateKey: pulumi.Output<string | undefined>;
    /**
     * The App Store Connect App ID. Required for AppStoreConnect sources, invalid for all others.
     */
    readonly appId: pulumi.Output<string | undefined>;
    /**
     * The GCS or S3 bucket where the source resides. Required for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
     */
    readonly bucket: pulumi.Output<string | undefined>;
    /**
     * The GCS email address for authentication. Required for GCS sources, invalid for all others.
     */
    readonly clientEmail: pulumi.Output<string | undefined>;
    /**
     * Layout settings for the source. This is required for HTTP, GCS, and S3 sources and invalid for AppStoreConnect sources.
     */
    readonly layout: pulumi.Output<outputs.SentryProjectSymbolSourceLayout | undefined>;
    /**
     * The human-readable name of the source.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    readonly organization: pulumi.Output<string>;
    /**
     * The password for accessing the source. Optional for HTTP sources, invalid for all others.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The GCS or S3 prefix. Optional for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
     */
    readonly prefix: pulumi.Output<string | undefined>;
    /**
     * The GCS private key. Required for GCS sources, invalid for all others.
     */
    readonly privateKey: pulumi.Output<string | undefined>;
    /**
     * The slug of the project to create the filter for.
     */
    readonly project: pulumi.Output<string>;
    /**
     * The source's S3 region. Required for S3 sources, invalid for all others.
     */
    readonly region: pulumi.Output<string | undefined>;
    /**
     * The AWS Secret Access Key.Required for S3 sources, invalid for all others.
     */
    readonly secretKey: pulumi.Output<string | undefined>;
    /**
     * The type of symbol source. One of `appStoreConnect` (App Store Connect), `http` (SymbolServer (HTTP)), `gcs` (Google Cloud Storage), `s3` (Amazon S3).
     */
    readonly type: pulumi.Output<string>;
    /**
     * The source's URL. Optional for HTTP sources, invalid for all others.
     */
    readonly url: pulumi.Output<string | undefined>;
    /**
     * The user name for accessing the source. Optional for HTTP sources, invalid for all others.
     */
    readonly username: pulumi.Output<string | undefined>;
    /**
     * Create a SentryProjectSymbolSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentryProjectSymbolSourceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SentryProjectSymbolSource resources.
 */
export interface SentryProjectSymbolSourceState {
    /**
     * The AWS Access Key.Required for S3 sources, invalid for all others.
     */
    accessKey?: pulumi.Input<string>;
    /**
     * The App Store Connect Issuer ID. Required for AppStoreConnect sources, invalid for all others.
     */
    appConnectIssuer?: pulumi.Input<string>;
    /**
     * The App Store Connect API Private Key. Required for AppStoreConnect sources, invalid for all others.
     */
    appConnectPrivateKey?: pulumi.Input<string>;
    /**
     * The App Store Connect App ID. Required for AppStoreConnect sources, invalid for all others.
     */
    appId?: pulumi.Input<string>;
    /**
     * The GCS or S3 bucket where the source resides. Required for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
     */
    bucket?: pulumi.Input<string>;
    /**
     * The GCS email address for authentication. Required for GCS sources, invalid for all others.
     */
    clientEmail?: pulumi.Input<string>;
    /**
     * Layout settings for the source. This is required for HTTP, GCS, and S3 sources and invalid for AppStoreConnect sources.
     */
    layout?: pulumi.Input<inputs.SentryProjectSymbolSourceLayout>;
    /**
     * The human-readable name of the source.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization?: pulumi.Input<string>;
    /**
     * The password for accessing the source. Optional for HTTP sources, invalid for all others.
     */
    password?: pulumi.Input<string>;
    /**
     * The GCS or S3 prefix. Optional for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The GCS private key. Required for GCS sources, invalid for all others.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * The slug of the project to create the filter for.
     */
    project?: pulumi.Input<string>;
    /**
     * The source's S3 region. Required for S3 sources, invalid for all others.
     */
    region?: pulumi.Input<string>;
    /**
     * The AWS Secret Access Key.Required for S3 sources, invalid for all others.
     */
    secretKey?: pulumi.Input<string>;
    /**
     * The type of symbol source. One of `appStoreConnect` (App Store Connect), `http` (SymbolServer (HTTP)), `gcs` (Google Cloud Storage), `s3` (Amazon S3).
     */
    type?: pulumi.Input<string>;
    /**
     * The source's URL. Optional for HTTP sources, invalid for all others.
     */
    url?: pulumi.Input<string>;
    /**
     * The user name for accessing the source. Optional for HTTP sources, invalid for all others.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SentryProjectSymbolSource resource.
 */
export interface SentryProjectSymbolSourceArgs {
    /**
     * The AWS Access Key.Required for S3 sources, invalid for all others.
     */
    accessKey?: pulumi.Input<string>;
    /**
     * The App Store Connect Issuer ID. Required for AppStoreConnect sources, invalid for all others.
     */
    appConnectIssuer?: pulumi.Input<string>;
    /**
     * The App Store Connect API Private Key. Required for AppStoreConnect sources, invalid for all others.
     */
    appConnectPrivateKey?: pulumi.Input<string>;
    /**
     * The App Store Connect App ID. Required for AppStoreConnect sources, invalid for all others.
     */
    appId?: pulumi.Input<string>;
    /**
     * The GCS or S3 bucket where the source resides. Required for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
     */
    bucket?: pulumi.Input<string>;
    /**
     * The GCS email address for authentication. Required for GCS sources, invalid for all others.
     */
    clientEmail?: pulumi.Input<string>;
    /**
     * Layout settings for the source. This is required for HTTP, GCS, and S3 sources and invalid for AppStoreConnect sources.
     */
    layout?: pulumi.Input<inputs.SentryProjectSymbolSourceLayout>;
    /**
     * The human-readable name of the source.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the organization the project belongs to.
     */
    organization: pulumi.Input<string>;
    /**
     * The password for accessing the source. Optional for HTTP sources, invalid for all others.
     */
    password?: pulumi.Input<string>;
    /**
     * The GCS or S3 prefix. Optional for GCS and S3 sourcse, invalid for HTTP and AppStoreConnect sources.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The GCS private key. Required for GCS sources, invalid for all others.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * The slug of the project to create the filter for.
     */
    project: pulumi.Input<string>;
    /**
     * The source's S3 region. Required for S3 sources, invalid for all others.
     */
    region?: pulumi.Input<string>;
    /**
     * The AWS Secret Access Key.Required for S3 sources, invalid for all others.
     */
    secretKey?: pulumi.Input<string>;
    /**
     * The type of symbol source. One of `appStoreConnect` (App Store Connect), `http` (SymbolServer (HTTP)), `gcs` (Google Cloud Storage), `s3` (Amazon S3).
     */
    type: pulumi.Input<string>;
    /**
     * The source's URL. Optional for HTTP sources, invalid for all others.
     */
    url?: pulumi.Input<string>;
    /**
     * The user name for accessing the source. Optional for HTTP sources, invalid for all others.
     */
    username?: pulumi.Input<string>;
}
