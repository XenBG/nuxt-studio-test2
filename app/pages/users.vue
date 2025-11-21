<template>
    <div>
        <Suspense>
            <ContentRenderer v-if="data" :value="data" />
            <template #fallback>
                <div class="text-gray-400 py-8 text-center">Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
    const { data } = await useAsyncData("page-users", async () => await queryCollection("content").path("/users").first());

    useSeoMeta({
        title: data.value?.seo?.title,
        description: data.value?.seo?.description
    });
</script>

