<template>
    <div>
        <div class="mb-6">
            <slot v-if="$slots.title" name="title" />
            <slot v-if="$slots.description" name="description" />
        </div>

        <div v-if="pending" class="text-gray-400 py-8 text-center">
            <slot v-if="$slots.loading" name="loading" />
            <span v-else>Зареждане на потребители...</span>
        </div>
        <div v-else-if="error" class="text-red-400 py-8 text-center">
            <slot v-if="$slots.error" name="error" :error="error" />
            <span v-else>Грешка при зареждане: {{ error.message }}</span>
        </div>
        <div v-else-if="data && data.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
                v-for="user in data" 
                :key="user.id" 
                class="p-6 border border-gray-700 bg-gray-800/50 rounded-lg hover:shadow-lg hover:shadow-gray-900/50 transition-shadow"
            >
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-lg">
                        {{ user.name.charAt(0).toUpperCase() }}
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white">{{ user.name }}</h3>
                        <p class="text-sm text-gray-400">@{{ user.username }}</p>
                    </div>
                </div>
                <div class="space-y-2 text-sm">
                    <div v-if="$slots.emailLabel" class="flex items-center gap-2 text-gray-300">
                        <span class="text-gray-500">
                            <slot name="emailLabel" />
                        </span>
                        <a :href="`mailto:${user.email}`" class="text-blue-400 hover:text-blue-300 transition-colors">
                            {{ user.email }}
                        </a>
                    </div>
                    <div v-if="$slots.phoneLabel" class="flex items-center gap-2 text-gray-300">
                        <span class="text-gray-500">
                            <slot name="phoneLabel" />
                        </span>
                        <a :href="`tel:${user.phone}`" class="text-blue-400 hover:text-blue-300 transition-colors">
                            {{ user.phone }}
                        </a>
                    </div>
                    <div v-if="$slots.websiteLabel" class="flex items-center gap-2 text-gray-300">
                        <span class="text-gray-500">
                            <slot name="websiteLabel" />
                        </span>
                        <a :href="`https://${user.website}`" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">
                            {{ user.website }}
                        </a>
                    </div>
                </div>
                <div v-if="$slots.addressLabel" class="mt-4 pt-4 border-t border-gray-700">
                    <p class="text-xs text-gray-500 mb-2">
                        <slot name="addressLabel" />
                    </p>
                    <p class="text-sm text-gray-300">
                        {{ user.address.street }}, {{ user.address.suite }}<br>
                        {{ user.address.city }}, {{ user.address.zipcode }}
                    </p>
                </div>
            </div>
        </div>
        <div v-else-if="data && data.length === 0" class="text-gray-400 py-8 text-center">
            <slot v-if="$slots.empty" name="empty" />
            <span v-else>Няма налични потребители.</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Fake API request using JSONPlaceholder
const { data, pending, error } = useAsyncData<User[]>('users-list', () => 
    $fetch<User[]>('https://jsonplaceholder.typicode.com/users')
);
</script>

