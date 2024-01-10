<template>
    <a-modal 
        v-model:open="open" 
        :closable="false"
        title="Auction Sale"
        width="1000px" 
    >
        <div class="mt-2">
            <a-row>
                <a-col>
                    <a-form-item label="Car Type">
                        <a-select
                            ref="select"
                            v-model:value="form.carTypeId"
                            style="width: 120px"
                        >
                            <a-select-option 
                                v-for="item in carTypes" 
                                :value="item.id" 
                            >
                                {{ item.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col>
                    <a-form-item label="Price" class="ml-2">
                        <a-input-number
                            v-model:value="form.price"
                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                            @keyup.enter="calculate"
                        />
                    </a-form-item>
                </a-col>
                <a-col :span="4">
                    <a-button 
                        type="primary" 
                        class="ml-2" 
                        @click="calculate"
                    >
                        <CalculatorOutlined />
                    </a-button>
                </a-col>
            </a-row>
        </div>
        <div class="mt-2">
            <VehicleTable :data="[calculatedValues]"/>
        </div>
        <template #footer>
            <a-button key="back" @click="handleCancel">Cancel</a-button>
            <a-button key="submit" type="primary" @click="handleSave" :disabled="!calculatedValues">Save</a-button>
          </template>
    </a-modal>
</template>

<script lang='ts' src='./NewVehicleModal.ts'></script>
