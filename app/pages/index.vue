<template>
    <div>
        <Suspense>
            <ContentRenderer v-if="data" :value="data" />
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
    const { data } = await useAsyncData("page-home", async () => await queryCollection("content").path("/").first());

    useSeoMeta({
        title: data.value?.seo?.title,
        description: data.value?.seo?.description
    });
</script>
