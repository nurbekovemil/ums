<template>
  <div class="univers">
	<h1>Universities</h1>
	<item-university/>
	<view-university/>
  </div>
</template>

<script>
import itemUniversity from '@/components/admin/university-comp/item-university'
import viewUniversity from '@/components/admin/university-comp/view-university'
export default {
  name: 'Univers',
  components: {
	itemUniversity,
	viewUniversity	
  }
}
</script>
