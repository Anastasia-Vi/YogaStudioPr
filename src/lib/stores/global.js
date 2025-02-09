import { writable } from 'svelte/store';
import { browser } from '$app/environment';
export const processBrowser = writable(browser)
export const deferredPrompt = writable(null)
export const installAppVisible = writable(false)
export const language = writable("it")
export const globalSettings = writable({})
export const env = import.meta.env;
export const scrolledY = writable(0)
export const now = writable(new Date())

const portraitStore = () => {
    let mql = browser && window.matchMedia("(orientation: portrait)");
    const { subscribe, set } = writable(mql && !!mql.matches)

    if(browser){
        // Add a media query change listener
        mql.addListener(m => set(mql && !!m.matches))
    }else{
        set(false)
    }
    return { subscribe }
}
export const portrait = portraitStore()

export const socialLinks = [
    {
      icon: "/vk.svg",
      label: "VK",
      url: "https://vk.com/welcome.yoga",
    },
    {
      icon: "whatsapp.svg",
      label: "WhatsApp",
      url: "https://wa.me/+79029417000",
    },
    {
      icon: "/instagram.svg",
      label: "Instagram",
      url: "https://www.instagram.com/welcome.yoga?igsh=Z3VmZDZpbjB3Z3Nu",
    },
  ];