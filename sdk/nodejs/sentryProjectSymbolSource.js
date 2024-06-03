"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryProjectSymbolSource = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
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
class SentryProjectSymbolSource extends pulumi.CustomResource {
    /**
     * Get an existing SentryProjectSymbolSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SentryProjectSymbolSource(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SentryProjectSymbolSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentryProjectSymbolSource.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["appConnectIssuer"] = state ? state.appConnectIssuer : undefined;
            resourceInputs["appConnectPrivateKey"] = state ? state.appConnectPrivateKey : undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["clientEmail"] = state ? state.clientEmail : undefined;
            resourceInputs["layout"] = state ? state.layout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accessKey"] = args ? args.accessKey : undefined;
            resourceInputs["appConnectIssuer"] = args ? args.appConnectIssuer : undefined;
            resourceInputs["appConnectPrivateKey"] = (args === null || args === void 0 ? void 0 : args.appConnectPrivateKey) ? pulumi.secret(args.appConnectPrivateKey) : undefined;
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["clientEmail"] = args ? args.clientEmail : undefined;
            resourceInputs["layout"] = args ? args.layout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["password"] = (args === null || args === void 0 ? void 0 : args.password) ? pulumi.secret(args.password) : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["privateKey"] = (args === null || args === void 0 ? void 0 : args.privateKey) ? pulumi.secret(args.privateKey) : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["secretKey"] = (args === null || args === void 0 ? void 0 : args.secretKey) ? pulumi.secret(args.secretKey) : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["appConnectPrivateKey", "password", "privateKey", "secretKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SentryProjectSymbolSource.__pulumiType, name, resourceInputs, opts);
    }
}
exports.SentryProjectSymbolSource = SentryProjectSymbolSource;
/** @internal */
SentryProjectSymbolSource.__pulumiType = 'sentry:index/sentryProjectSymbolSource:SentryProjectSymbolSource';
//# sourceMappingURL=sentryProjectSymbolSource.js.map