<script>
import Searchbar from './Searchbar.vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/vue/outline'
import { RouterLink } from 'vue-router'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
        XIcon,
        UserIcon,
        HeartIcon,
    ShoppingCartIcon,
    Searchbar
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-lime-950" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 pb-6 lg:px-8 pb-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-yellow-50 hover:text-yellow-50 hover:bg-lime-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <DisclosureButton as="a" href="/" class="text-white px-3 py-2 rounded-md text-base font-medium"><img class="block lg:hidden h-8 w-auto" src="/src/assets/images/Logo_simples_svg.svg" alt="Logo greenhub simples" /></DisclosureButton>
            <DisclosureButton as="a" href="/" class="text-white px-3 py-2 rounded-md text-base font-medium"><img class="hidden lg:block h-8 w-auto" src="/src/assets/images/Logo_horizontal_complet.png" alt="Logo greenhub complet" /></DisclosureButton>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4 text-yellow-50">
              <!---<a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-lime-950 text-yellow-50' : 'text-yellow-50 hover:bg-lime-950 hover:text-yellow-50', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>-->
              <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Épicerie</DisclosureButton>
              <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Santé</DisclosureButton>
              <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Maison</DisclosureButton>
              <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Beauté</DisclosureButton>
              <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Bébé</DisclosureButton>
              <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Services écologiques</DisclosureButton>
      </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="bg-lime-950 p-1 rounded-full text-yellow-50 hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <HeartIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div">
            <div>
              <MenuButton class="bg-lime-950 flex text-sm focus:outline-none">
                <span class="sr-only">Open user menu</span>
                <UserIcon class="h-6 w-6 text-yellow-50" aria-hidden="true" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-lime-950 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-lime-950' : '', 'block px-4 py-2 text-sm text-yellow-50']">Mon profil</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-lime-950' : '', 'block px-4 py-2 text-sm text-yellow-50']">Créer un compte</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-lime-950' : '', 'block px-4 py-2 text-sm text-yellow-50']">Me déconnecter</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <button type="button" class="bg-lime-950 p-1 rounded-full text-yellow-50 hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <Searchbar />
    </div>

    <DisclosurePanel class="sm:hidden sm:menu dropdown-content">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:menu dropdown-content">
        <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Épicerie</DisclosureButton>
        <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Santé</DisclosureButton>
        <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Maison</DisclosureButton>
        <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Beauté</DisclosureButton>
        <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Bébé</DisclosureButton>
        <DisclosureButton as="a" href="/category" class="text-white px-3 py-2 rounded-md text-base font-medium">Services écologiques</DisclosureButton>
      
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<!--<template>
        <ul tabindex="0" class=" sm:menu dropdown-content z-[1] p-2 text-yellow-50 bg-lime-950 rounded-box w-52 mt-4">
          <li>
    <details open>
      <summary>Épicerie</summary>
      <ul>
        <li><a>Produits sucrés</a></li>
        <li><a>Produits salés</a></li>
        <li><a>Boissons</a></li>
      </ul>
    </details>
        <li><a>Santé</a></li>
        <li><a>Bébé</a></li>
  </li>
  <ul>
    <li>
          <details open>
            <summary>Maison</summary>
            <ul>
              <li><a>Produits menagers</a></li>
              <li><a>Jardin</a></li>
            </ul>
          </details>
        </li>
        </ul>
  <li><a>Commerce équitable</a></li>
  <li><a>Services écologiques</a></li>
        </ul>
      </div>
    
</template>
-->