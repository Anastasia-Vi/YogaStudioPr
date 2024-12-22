<script>
  import { onScreen } from "$lib/utils/onscreen"
  export let col = 12
  export let row = 1
  export let mcol = 12
  export let mrow = row
  export let mlcol = col
  export let mlrow = row
  export let pcol = col
  export let prow = row
  export let hs = 0
  export let l = 0
  export let tohs = 0
  export let tol = -1
  export let alpha = 1
  export let toalpha = -1
  export let background = ''
  export let color = ''
  export let href = ''
  export let from = 0
  export let to = 100
  export let gradientDirection = 'to right'
  export let border = false
  export let printAvoidBreak = true
  export let error = false
  export let selected = false
  export let trackVisibility = false
  export let className = ''
  let card = true
  /**
   * @type {string[]}
   */
  let s = []

  const setup = (c, r, mc, mr, mlc, mlr, pc, pr) => {
    s = []
    if(Array.isArray(c)){
      if(c[0]) s.push(`grid-col-start-${c[0]}`)
      if(c[1]) s.push(`grid-col-end-${c[1]}`)
    }else if (c > 0){
      s.push(`grid-col-span-${c}`)
    }
    if(Array.isArray(r)){
      if(r[0]) s.push(`grid-row-start-${r[0]}`)
      if(r[1]) s.push(`grid-row-end-${r[1]}`)
    }else if (r > 0){
      s.push(`grid-row-span-${r}`)
    }
    if(Array.isArray(mc)){
      if(mc[0]) s.push(`grid-mobile-col-start-${mc[0]}`)
      if(mc[1]) s.push(`grid-mobile-col-end-${mc[1]}`)
    }else if (mc > 0){
      s.push(`grid-mobile-col-span-${mc}`)
    }
    if(Array.isArray(mr)){
      if(mr[0]) s.push(`grid-mobile-row-start-${mr[0]}`)
      if(mr[1]) s.push(`grid-mobile-row-end-${mr[1]}`)
    }else if (mr > 0){
      s.push(`grid-mobile-row-span-${mr}`)
    }
    if(Array.isArray(mlc)){
      if(mlc[0]) s.push(`grid-mobile-landscape-col-start-${mlc[0]}`)
      if(mlc[1]) s.push(`grid-mobile-landscape-col-end-${mlc[1]}`)
    }else if (mlc > 0){
      s.push(`grid-mobile-landscape-col-span-${mlc}`)
    }
    if(Array.isArray(mlr)){
      if(mlr[0]) s.push(`grid-mobile-landscape-row-start-${mlr[0]}`)
      if(mlr[1]) s.push(`grid-mobile-landscape-row-end-${mlr[1]}`)
    }else if (mlr > 0){
      s.push(`grid-mobile-landscape-row-span-${mlr}`)
    }
    if(Array.isArray(pc)){
      if(pc[0]) s.push(`grid-mobile-col-start-${pc[0]}`)
      if(pc[1]) s.push(`grid-mobile-col-end-${pc[1]}`)
    }else if (pc > 0){
      s.push(`grid-print-col-span-${pc}`)
    }
    if(Array.isArray(pr)){
      if(pr[0]) s.push(`grid-mobile-row-start-${pr[0]}`)
      if(pr[1]) s.push(`grid-mobile-row-end-${pr[1]}`)
    }else if (pr > 0){
      s.push(`grid-print-row-span-${pr}`)
    }

  }
  $: setup(col, row, mcol, mrow, mlcol, mlrow, pcol, prow)

  const getBkg = () => {
    if(!l) l = 0
    if(background){
      return background
    }else if(hs && (tohs || tol)){
      if(!tohs) tohs = hs
      if(!(tol>=0)) tol = l
      if(!(toalpha >= 0)) toalpha = alpha
      return `linear-gradient(${gradientDirection}, hsl(${hs}, ${l}%, ${alpha}) ${from}%, hsl(${tohs}, ${tol}%, ${toalpha}) ${to}%)`
    }else if(hs){
      return `hsl(${hs}, ${l}%, ${alpha})`
    }
  }
  const getColor = () => {
    if(!l) l = 0
    if(color){
      return color
    }else if(hs){
      return `hsl(${hs}, ${l > 50 ? 10 + parseInt(l / 50) : 90 - parseInt(l / 50)}%)`
    }
  }
  $: bkg = getBkg(background, hs, l, tohs, tol, alpha, toalpha, gradientDirection, from, to)
  $: clr = getColor(color, hs, l)

  const getStyle = () => {
    let ss = []
    if(bkg) ss = [...ss, `--card-background: ${bkg};`]
    if(clr) ss = [...ss, `--card-color: ${clr};`]
    if(border) ss = [...ss, `border-width: ${border ? (border > 0 ? `${border}px` : border) : 0};`]
    if(ss.length == 0) return null
    return ss.join(' ')
  }
  $: style = getStyle(bkg, clr, border)
</script>
{#if href}
  <a {href} 
    {style}
    use:onScreen={{enable: !!trackVisibility, ...(trackVisibility || {})}}
    on:visible
    on:click
    class={`${s.join(' ')} ${className} ${Object.keys($$restProps || {}).filter(k => $$restProps[k]).join(' ')}`}
    class:selected={selected}
    class:card={card}
    class:error={error}
    class:styled={bkg && !border}
    class:text={clr}
    class:printAvoidBreak={printAvoidBreak}
    class:border={border} {...$$restProps}>
    <slot />
  </a>
{:else}
  <div 
    {style}
    use:onScreen={{enable: !!trackVisibility, ...(trackVisibility || {})}}
    on:visible
    on:click
    class={`${s.join(' ')} ${className} ${Object.keys($$restProps || {}).filter(k => $$restProps[k]).join(' ')}`}
    class:card={card}
    class:selected={selected}
    class:error={error}
    class:styled={bkg && !border}
    class:text={clr}
    class:border={border} {...$$restProps}>
    <slot />
  </div>
{/if}

<style>
  .card{
    position: relative;
    white-space: normal;
  }
  .card.error{
    background-color: var(--error);
    color: var(--text-on-error);
  }
  .styled, .styled :global(.field){
    background: var(--card-background) !important;
  }
  .text, .text :global(.field){
    color: var(--card-color) !important;
  }
  .styled :global(table tr){
    background: #0004 !important;
  }
  .styled :global(table tr:nth-child(2n)){
    background: #0002 !important;
  }
  .text :global(table tr){
    color: var(--card-color) !important;
  }
  .styled :global(button){
    background: #0004 !important;
  }
  .border{
    border-color: var(--card-background) !important;
    border-style: solid;
  }
  .selected{
    background-color: var(--secondary);
    color: var(--text-on-secondary);
  }
</style>