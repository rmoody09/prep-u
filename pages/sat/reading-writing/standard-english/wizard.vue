<template>
    <h1 class="sat-guide-page-header">Standard English Process</h1>

    <ClientOnly>
        <template #fallback>
            <StandardEnglishProcessFlowFallback />
        </template>
        <StandardEnglishProcessFlow />
    </ClientOnly>
</template>