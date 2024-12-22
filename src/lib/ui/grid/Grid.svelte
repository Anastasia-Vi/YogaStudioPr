<script>
  import { portrait } from '$lib/stores/global'
  export let cols = 12
  export let gap = 1
  export let mgap = gap
  export let mlgap = gap
  export let printAvoidBreak = true
  export let printBreakBefore = true
</script>

<div class={`grid grid-cols-${cols} grid-gap-${gap} grid-mgap-${mgap} grid-mlgap-${mlgap} ${Object.keys($$restProps || {}).filter(k => $$restProps[k]).join(' ')}`}
  class:printAvoidBreak={printAvoidBreak}
  class:printBreakBefore={printBreakBefore}
  class:portrait={$portrait}
  class:landscape={!$portrait}>
  <slot />
</div>