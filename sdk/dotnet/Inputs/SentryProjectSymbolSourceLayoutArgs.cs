// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Sentry.Inputs
{

    public sealed class SentryProjectSymbolSourceLayoutArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The casing of the symbol source layout. The layout of the folder structure. The options are: `default` - Default (mixed case), `uppercase` - Uppercase, `lowercase` - Lowercase.
        /// </summary>
        [Input("casing", required: true)]
        public Input<string> Casing { get; set; } = null!;

        /// <summary>
        /// The layout of the folder structure. The options are: `native` - Platform-Specific (SymStore / GDB / LLVM), `symstore` - Microsoft SymStore, `symstore_index2` - Microsoft SymStore (with index2.txt), `ssqp` - Microsoft SSQP, `unified` - Unified Symbol Server Layout, `debuginfod` - debuginfod.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public SentryProjectSymbolSourceLayoutArgs()
        {
        }
        public static new SentryProjectSymbolSourceLayoutArgs Empty => new SentryProjectSymbolSourceLayoutArgs();
    }
}