import { DemoRuntimeProvider } from "@/components/runtime/demo-runtime-provider";
import { MotionShell } from "@/components/motion-shell";
import { Perplexity } from "@/components/examples/perplexity";

export default function Page() {
  return <MotionShell layout="perplexity" preview={false}><DemoRuntimeProvider><Perplexity /></DemoRuntimeProvider></MotionShell>;
}
