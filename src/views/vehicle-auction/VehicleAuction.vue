<template>
  <a-row>
    <a-col :span="20" :offset="2">
      <a-button type="primary" class="mt-2" @click="toggleShowModal(true)">Add New</a-button>
      <div class="mt-2">
        <VehicleTable :data="auctionSales"/>
      </div>
    </a-col>
  </a-row>

  <NewVehicleModal
      :open="showModal"
      @cancel="toggleShowModal(false)"
      @refreshAuctionSales="getAllAuctionSales"
  />
</template>

<script lang="ts" src="./VehicleAuction.ts"></script>
