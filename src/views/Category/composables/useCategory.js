import { getCategory } from '@/api/category'
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory(id) {
  const categoryList = ref({})
  async function getCategoryList(id) {
    const res = await getCategory(id)
    categoryList.value = res.result
  }
  getCategoryList(id)
  onBeforeRouteUpdate((to) => {
    getCategoryList(to.params.id)
  })
  return { categoryList }
}
