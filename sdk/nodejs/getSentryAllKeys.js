"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentryAllKeysOutput = exports.getSentryAllKeys = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
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
function getSentryAllKeys(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sentry:index/getSentryAllKeys:getSentryAllKeys", {
        "filterStatus": args.filterStatus,
        "organization": args.organization,
        "project": args.project,
    }, opts);
}
exports.getSentryAllKeys = getSentryAllKeys;
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
function getSentryAllKeysOutput(args, opts) {
    return pulumi.output(args).apply((a) => getSentryAllKeys(a, opts));
}
exports.getSentryAllKeysOutput = getSentryAllKeysOutput;
//# sourceMappingURL=getSentryAllKeys.js.map