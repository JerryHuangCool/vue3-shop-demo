<script setup>
import { getSubCategory, getSubCategoryGoods } from '@/api/category'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const list = ref({})
const goodsList = ref([])
const disabled = ref(false)
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
async function getSubCategoryList() {
  const res = await getSubCategory(route.params.id)
  list.value = res.result
}
async function getSubGoodsList() {
  const res = await getSubCategoryGoods(reqData.value)
  goodsList.value = res.result.items
}
function handleClick() {
  reqData.value.page = 1
  getSubGoodsList()
}
async function load() {
  reqData.value.page++
  const res = await getSubCategoryGoods(reqData.value)
  goodsList.value = [...goodsList.value, ...res.result.items]
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}
getSubCategoryList()
getSubGoodsList()
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${list.parentId}` }"
          >{{ list.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ list.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs @tab-change="handleClick" v-model="reqData.sortField">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodsList" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
