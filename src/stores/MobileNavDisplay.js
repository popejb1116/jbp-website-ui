import {writable} from 'svelte/store'
export const displayMobileNav = writable(false)

export const toggleMobileNav = () => {
   displayMobileNav.update(state => !state)
}