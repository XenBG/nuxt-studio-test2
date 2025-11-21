<template>
    <div class="min-h-screen bg-gray-900">
        <header class="border-b border-gray-700 bg-gray-800/50">
            <nav class="container mx-auto px-4 py-4">
                <div class="flex items-center gap-6">
                    <NuxtLink to="/" class="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                        Jump.BG
                    </NuxtLink>
                    <div class="flex gap-4 ml-auto">
                        <NuxtLink 
                            to="/" 
                            class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-gray-700"
                            active-class="text-white bg-gray-700"
                        >
                            Начало
                        </NuxtLink>
                        <NuxtLink 
                            to="/users" 
                            class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-gray-700"
                            active-class="text-white bg-gray-700"
                        >
                            Потребители
                        </NuxtLink>
                    </div>
                </div>
            </nav>
        </header>
        <main class="container mx-auto px-4 py-8">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts"></script>

