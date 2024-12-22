<script>
  import { portrait } from '$lib/stores/global'
  export let w = 9
  export let mw = 11
  export let mlw = 10
  export let p = 9
  export let printAvoidBreak = true
  export let printBreakBefore = true

  $: s = [
    w ? `row-w-${w}` : null,
    mw ? `row-mobile-w-${mw}` : null,
    mlw ? `row-mobile-landscape-w-${mlw}` : null,
    p ? `row-print-w-${p}` : null,
  ].filter(c => !c?.endsWith('-0')).join(' ')
</script>

<div class={`row ${s} ${Object.keys($$restProps || {}).filter(k => $$restProps[k]).join(' ')}`}
  class:printAvoidBreak={printAvoidBreak}
  class:printBreakBefore={printBreakBefore}
  class:portrait={$portrait}
  class:landscape={!$portrait}>
  <slot />
</div>