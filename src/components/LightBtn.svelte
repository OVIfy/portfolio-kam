<script>
import {twMerge} from 'tailwind-merge'

export let fill;
export let style;

let isDarkModeActive = true

function switchMode(){
    isDarkModeActive = !isDarkModeActive
}
</script>
<button on:click={switchMode} class={twMerge('p-4 text-[14px] font-semibold border-[1px] rounded border-transparent hover:bg-gray-100 hover:bg-opacity-10 duration-300 transition-all flex gap-2', fill && 'bg-white text-black hover:bg-transparent hover:text-white', style)}>
    <div class={`w-[20px] aspect-square ${isDarkModeActive ? "bg-[url('Images/icons/icon-light-mode.svg')]" : "bg-[url('Images/icons/icon-dark-mode.svg')]"} bg-center bg-no-repeat bg-contain`}></div>
    <p class={isDarkModeActive == false && "opacity-20"}>{isDarkModeActive ? "Light Mode" : "Dark Mode"}</p>
</button>

