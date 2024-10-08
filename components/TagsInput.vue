<script setup>
    import Tag from '~/components/Tag.vue'
    const props = defineProps(['options', 'value-attribute', 'option-attribute']);

    const selected = ref([])

    function tagDeleteClicked(options) {
        console.log('tagDeleteClicked')
        console.log(options.id);
        console.log(JSON.stringify(selected.value))
        selected.value = selected.value.filter(item => item.id != options.id)
        console.log(JSON.stringify(selected.value))
    }

</script>

<template>
    <div class="flex gap-2">
        <Tag v-for="tag in selected" :id="tag.id" :label="tag.label" :onRemove="tagDeleteClicked" >
            {{ tag.label }}
        </Tag>
    </div>
    <USelectMenu v-model="selected" :options="props.options" :value-attribute="props['value-attribute']" :option-attribute="props['option-attribute']" multiple>
        <template #label>{{ selected.length }}  selected</template>
    </USelectMenu>
</template>