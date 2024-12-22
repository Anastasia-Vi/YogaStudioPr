import { browser } from '$app/environment';

export const onScreen = (node, params) => {
  let isVisible = false
  if(!browser) return
  if(!params?.enable) return
  const checkVisibility = n => {
    if(n[0].intersectionRatio > 0 && !isVisible){
      isVisible = true
      node.dispatchEvent(new CustomEvent('visible', {
  			detail: n[0]
  		}));
      if(params && 'once' in params && params.once) io.unobserve(node);
    }else{
      if(isVisible){
        isVisible = false
        if(!params || !('once' in params) || !params.once){
          node.dispatchEvent(new CustomEvent('invisible', {
            detail: n[0]
          }));
        }
      }
    }
  }
  const io = browser ? new IntersectionObserver(entry => checkVisibility(entry), {root: null}) : null
  io.observe(node)
  return {destroy(){
    io.unobserve(node);
  }};
}
