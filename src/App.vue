<script setup lang="ts">
import DejaHero from './components/DejaHero.ce.vue'
import DejaUsername from './components/DejaUsername.ce.vue'
import DejaAddLayout from './components/Layouts/DejaAddLayout.ce.vue'
import DejaLayoutList from './components/Layouts/DejaLayoutList.ce.vue'
import DejaAuthProtected from './components/Users/DejaAuthProtected.ce.vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { FaEllipsisVertical, FaBars } from 'vue3-icons/fa6'
</script>

<template>
  <div className="flex flex-col max-w-screen-xl mx-auto">
    <div className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header>
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <label
                htmlFor="my-drawer"
                className="btn btn-square btn-ghost btn-primary drawer-button xs:visible md:hidden"
              >
                <FaBars />
              </label>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">DEJA Components</a>
            </div>
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <FaEllipsisVertical />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow mx-4">
          <DejaAuthProtected />
          <DejaAuthProtected>
            <DejaHero msg="hi" />
            <template v-slot:authenticated>
              <DejaLayoutList />
            </template>
          </DejaAuthProtected>
          <hr class="my-4 border-secondary border-opacity-50" />
          <DejaAddLayout />
        </main>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <aside className="bg-zinc-900 w-64 px-8 py-4 overflow-auto">
          <div className="flex w-full flex-col gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="skeleton h-32 w-full"></div>
          </div>

          <h2
            className="text-xl bg-clip-text bg-gradient-to-r text-transparent  from-indigo-500 to-pink-400"
          >
            Layouts
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="btn btn-primary btn-sm btn-outline">
            <span className="invisible">Add New</span>
          </button>

          <hr className="my-4 border-accent" />
          <h2
            className="bg-clip-text bg-gradient-to-r text-transparent  from-purple-800 to-pink-600"
          >
            Locos
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="skeleton btn btn-sm btn-secondary ">
            <span className="invisible">Add</span>
          </button>

          <hr className="my-4 border-accent" />
          <h2
            className=" bg-clip-text bg-gradient-to-r text-transparent  from-purple-300 to-pink-600"
          >
            Turnouts
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="skeleton btn btn-sm btn-secondary">
            <span className="invisible">Add</span>
          </button>

          <hr className="my-4 border-accent" />
          <h2
            className=" bg-clip-text bg-gradient-to-r text-transparent  from-purple-300 to-pink-600"
          >
            Effects
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="skeleton btn btn-sm btn-secondary">
            <span className="invisible">Add</span>
          </button>

          <hr className="my-4 border-accent" />
          <h2
            className=" bg-clip-text bg-gradient-to-r text-transparent  from-purple-300 to-pink-600"
          >
            Signals
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="skeleton btn btn-sm btn-secondary">
            <span className="invisible">Add</span>
          </button>

          <hr className="my-4 border-accent" />
          <h2
            className=" bg-clip-text bg-gradient-to-r text-transparent  from-purple-300 to-pink-600"
          >
            Sensors
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="skeleton btn btn-sm btn-secondary">
            <span className="invisible">Add</span>
          </button>

          <hr className="my-4 border-accent" />
          <h2
            className=" bg-clip-text bg-gradient-to-r text-transparent  from-purple-300 to-pink-600"
          >
            Routes
          </h2>
          <div className="skeleton h-32 w-full my-2"></div>
          <button className="skeleton btn btn-sm btn-secondary">
            <span className="invisible">Add</span>
          </button>
        </aside>
      </div>
    </div>
  </div>
</template>
