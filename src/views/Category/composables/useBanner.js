import { getBanner } from '@/api/home'
import { ref } from 'vue'
export function useBanner() {
  const bannerList = ref([])
  async function getBannerList() {
    const res = await getBanner('2')
    bannerList.value = res.result
  }
  getBannerList()
  return {
    bannerList
  }
}
