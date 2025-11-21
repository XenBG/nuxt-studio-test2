<template>
    <div>
        <div class="flex items-start gap-3 mb-6">
            <div class="flex flex-col">
                <slot v-if="$slots.title" name="title" />
                <slot v-if="$slots.description" name="description" />
            </div>
        </div>

        <div>
            <div v-if="pending" class="text-gray-400 py-8 text-center">Loading news...</div>
            <div v-else-if="error" class="text-red-400 py-8 text-center">Error loading news: {{ error.message }}</div>
            <div v-else-if="data && data.length > 0" class="space-y-6">
                <article 
                    v-for="item in data" 
                    :key="item.id" 
                    class="p-6 border border-gray-700 bg-gray-800/50 rounded-lg hover:shadow-lg hover:shadow-gray-900/50 transition-shadow"
                >
                    <h3 class="text-xl font-semibold text-white mb-3">{{ item.title }}</h3>
                    <p class="text-gray-300 mb-4 leading-relaxed">{{ item.body }}</p>
                    <div class="flex flex-wrap gap-4 text-sm text-gray-400 border-t border-gray-700 pt-4">
                        <div v-if="$slots.authorLabel" class="flex items-center gap-2">
                            <span class="font-medium text-gray-300">
                                <slot name="authorLabel" />
                            </span>
                            <span class="text-gray-400">{{ getAuthorName(item.userId) }}</span>
                        </div>
                        <div v-if="$slots.publishedLabel" class="flex items-center gap-2">
                            <span class="font-medium text-gray-300">
                                <slot name="publishedLabel" />
                            </span>
                            <span class="text-gray-400">{{ formatDate(item.id) }}</span>
                        </div>
                    </div>
                </article>
            </div>
            <div v-else-if="data && data.length === 0" class="text-gray-400 py-8 text-center">
                No news available.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface NewsItem {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// Fake API request using JSONPlaceholder
const { data, pending, error } = useAsyncData<NewsItem[]>('home-feature-news', () => 
    $fetch<NewsItem[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
);

// Helper function to get author name (fake data based on userId)
const getAuthorName = (userId: number): string => {
    const authors: Record<number, string> = {
        1: 'John Doe',
        2: 'Jane Smith',
        3: 'Bob Johnson',
        4: 'Alice Williams',
        5: 'Charlie Brown',
        6: 'Diana Prince',
        7: 'Edward Norton',
        8: 'Fiona Green',
        9: 'George Miller',
        10: 'Helen Davis'
    };
    return authors[userId] || `User ${userId}`;
};

// Helper function to format date (fake date based on item ID)
const formatDate = (id: number): string => {
    const date = new Date();
    date.setDate(date.getDate() - id);
    return date.toLocaleDateString('bg-BG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
</script>
