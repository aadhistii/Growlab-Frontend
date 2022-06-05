<template>
    <div as="body" class="max-w-screen-3xl mx-auto py-12 px-10">
        <div class="mt-10 w-[75%]">
            <p class="text-2xl text-my-sin font-semibold">
                PLATFORM #1 UNTUK ACE CV ANDA
            </p>
            <h1 class="text-6xl text-cyprus font-bold leading-normal my-5">
                Review CV kamu, capai pekerjaan impian kamu
            </h1>
            <p class="text-2xl text-dim-grey my-6">
                Growlab adalah solusi untuk kamu mendapatkan CV terbaik yang disusun secara khusus
                oleh team profesional kami.
            </p>
        </div>

        <div id="option" class="block font-semibold rounded-[20px]">

            <div class="flex items-center pt-[50px] px-[50px]">
                <p class="text-cyprus text-4xl w-[50%]">Review CV Kamu</p>
                <a class="md:text-base w-[50%] text-right" href="">
                    <p class="text-dim-grey text-xl underline">
                        Kami di sini untuk membantu. Punya pertanyaan? Hubungi kami.
                        <span class="inline-block align-text-top">
                            <InformationCircleIcon class="h-6 w-6 text-dim-grey" />
                        </span>
                    </p>
                </a>
            </div>

            <div id="option-wrapper" class="flex flex-nowrap mx-[50px] py-10 h-40">

                <Menu as="div" class="inline-block text-left w-[50%] h-10 pr-5">
                    <div>
                        <MenuButton
                            class="object-center rounded-[20px] border w-full h-full border-gray-300 shadow-sm p-5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            <div class="flex w-full h-full">
                                <img src="../assets/pict/green-list.png">
                                <div class="px-5 text-left text-[#34364A] w-[80%] my-auto">
                                    <p class="font-normal lg:text-2xl md:text-base">Paket</p>
                                    <p class="font-medium lg:text-3xl md:text-2xl">Premium</p>
                                </div>
                                <ChevronDownIcon class="w-10 h-10 fill-dim-grey text-right my-auto"
                                    aria-hidden="true" />
                            </div>
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account
                                    settings</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                                </MenuItem>
                                <form method="POST" action="#">
                                    <MenuItem v-slot="{ active }">
                                    <button type="submit"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full text-left px-4 py-2 text-sm']">Sign
                                        out</button>
                                    </MenuItem>
                                </form>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>

                <Menu as="div" class="inline-block text-left w-[50%] h-10">
                    <div>
                        <MenuButton
                            class="rounded-[20px] border w-full h-full border-gray-300 shadow-sm p-5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <div class="flex">
                                <img src="../assets/pict/yellow-list.png" class="w-fit h-fit">
                                <div class="px-5 text-left text-[#34364A] w-[80%] my-auto">
                                    <p class="font-normal lg:text-2xl md:text-base">Tipe/Format CV Kamu</p>
                                    <p class="font-medium lg:text-3xl md:text-2xl">ATS Friendly</p>
                                </div>
                                <ChevronDownIcon class="w-10 h-10 fill-dim-grey my-auto" aria-hidden="true" />
                            </div>
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account
                                    settings</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                                </MenuItem>
                                <form method="POST" action="#">
                                    <MenuItem v-slot="{ active }">
                                    <button type="submit"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full text-left px-4 py-2 text-sm']">Sign
                                        out</button>
                                    </MenuItem>
                                </form>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>

            <div class="flex text-[20px] pt-5 h-full">
                <div class="flex divide-x-2 gap-10 divide-gray-200 w-[45%] mx-[50px] pb-5">
                    <div>
                        <p class="text-gray-400 font-medium">Reviewer yang siap</p>
                        <p class="text-4xl my-5 font-semibold">50 Orang</p>
                    </div>
                    <div class="px-10">
                        <p class="text-gray-400 font-medium">Estimasi CV kamu selesai</p>
                        <p class="text-4xl my-5 font-semibold">3 Hari</p>
                    </div>
                </div>
                <div
                    class="flex bottom-0 w-[60%] max-h-min p-10 bg-light-grey rounded-tl-[20px] rounded-br-[20px] justify-center">
                    <img src="../assets/pict/red-price.png" class="w-[70px] h-[70px]">
                    <div class="px-5">
                        <h2 class="font-semibold text-4xl">Rp 129.000</h2>
                        <p class="font-normal text-xl text-[#34364AB2]">Estimasi harga paket review kamu</p>
                    </div>
                    <button
                        class="px-[38px] py-[17px] font-semibold text-white bg-shamrock rounded-[10px] shadow-md hover:bg-green-700 transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shamrock">Cari
                        Reviewer Kamu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#option {
    box-shadow: 4px 4px 34px 30px rgba(196, 196, 196, 0.1);
}
</style>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { InformationCircleIcon } from '@heroicons/vue/outline'
</script>