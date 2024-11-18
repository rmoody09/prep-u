<script setup>
    import Tag from '~/components/Tag.vue'
    const props = defineProps(['options', 'valueAttribute', 'optionAttribute']);

    //const selected = ref([])
    const selected = defineModel({default: []});

    function tagDeleteClicked(options) {
        console.log('tagDeleteClicked')
        console.log(options.id);
        console.log(JSON.stringify(selected.value))
        selected.value = selected.value.filter(item => item[props.valueAttribute] != options.id)
        console.log(JSON.stringify(selected.value))
    }

    function getTagLabel(tag) {
        return tag[props.optionAttribute];
    }

    function getTagValue(tag) {
        return tag[props.valueAttribute];
    }

</script>

<template>
    <div class="flex gap-2">
        <Tag v-for="tag in selected" :id="getTagValue(tag)" :label="getTagLabel(tag)" :onRemove="tagDeleteClicked" >
            {{ getTagLabel(tag) }}
        </Tag>
    </div>
    <USelectMenu v-model="selected" :options="props.options" :option-attribute="props.optionAttribute" searchable searchable-placeholder="Search tags" multiple>
        <template #label>{{ selected.length }}  selected</template>
    </USelectMenu>
</template>