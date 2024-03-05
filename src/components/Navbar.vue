<!--<template>
<nav data-theme="lemonade">
    <div class="navbar bg-lime-950">

  <div class="flex justify-start flex-1 px-2">
    <div class="flex items-stretch">
      <a class="btn btn-ghost rounded-btn">Button</a>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">
            <label class="btn btn-circle swap swap-rotate">
  
  <input type="checkbox" />
  
  <svg class="swap-off fill-yellow-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  <svg class="swap-on fill-yellow-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            </label> 
        </div>

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
      <div class="flex-1 px-2 lg:flex-none">
    <a class="sm:invisible sm:h-10 text-lg font-bold"><img src="/src/assets/images/logo_greenhub.png"></a>
    <a class="invisible h-10 text-lg font-bold"><img src="/src/assets/images/Logo_horizontal_complet.png"></a>
</div>
    </div>
  </div>
</div>
</nav>

</template>
-->

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

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
    ShoppingCartIcon
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
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-lime-950 text-yellow-50' : 'text-yellow-50 hover:bg-lime-950 hover:text-yellow-50', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="bg-lime-950 p-1 rounded-full text-yellow-50 hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <HeartIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="bg-lime-950 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <UserIcon class="h-6 w-6" aria-hidden="true" />
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
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-lime-950 text-yellow-50' : 'text-yellow-50 hover:bg-lime-950 hover:text-yellow-50', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>