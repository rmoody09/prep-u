<script setup>
    const columns = ref(1);
    const rows = ref(1);
    const includeHeader = ref(false);
    const tableTitle = ref('');

    const emit = defineEmits(['addTable']);

    const addTable = async () => {
        console.log('addTable');
        emit('addTable', { 
            columns: columns.value, 
            rows: rows.value, 
            includeHeader: includeHeader.value,
            title: tableTitle.value
        });
    }
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <h1 class="text-2xl font-bold">Add Table</h1>
        <div>
            <label for="table_title">Table Title (optional)</label>
            <UInput 
                id="table_title" 
                v-model="tableTitle" 
                placeholder="Enter table title"
            />
        </div>
        <div>
            <UCheckbox v-model="includeHeader" label="Include header row" />
        </div>
        <div>
            <div>
                <label for="columns_input">Columns</label>
                <UInput type="number" id="columns_input" v-model="columns" />
            </div>
        </div>
        <div>
            <div>
                <label for="rows_input">Rows</label>
                <UInput type="number" id="rows_input" v-model="rows" />
            </div>
        </div>
        <div>
            <UButton @click="addTable">Add Table</UButton>
        </div>
    </div>
</template>