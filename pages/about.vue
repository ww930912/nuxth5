<script lang="ts" setup>
const cstore = useCounterStore();
const ustore = useUserStore();
const { goBack } = useGoBack();

const { increment } = cstore;
const { setName } = ustore;
const name = ref(ustore.user.name);
</script>

<template>
  <div class="about">
    <h1>{{ $t("关于页面") }}</h1>
    <ItemRow title="pinia">
      <p>{{ $t("计数") }}: {{ cstore.count }}</p>
      <p>{{ $t("计数x2") }}: {{ cstore.doubleCount }}</p>
      <button @click="increment()">{{ $t("增加") }}</button>
    </ItemRow>
    <hr />
    <ItemCol title="persist pinia">
      <input v-model="name" />
      <button @click="setName(name)">{{ $t("设置") }}</button>
    </ItemCol>
    <hr />
    <ItemRow title="vue-router">
      <button @click="goBack">{{ $t("返回") }}</button>
    </ItemRow>
    <ItemRow title="moments">
      <p>{{ `${$t("当前时间")}: ${formatTime(new Date())}` }}</p>
    </ItemRow>
    <ItemCol title="pic">
      <img
        src="https://api-k-c7818b61-623.sptpub.com/api/v1/promo/banner/brand/2103509236163162112/image/2501033443903811586"
        alt="banner"
        class="banner"
      />
    </ItemCol>
    <!-- <ItemCol title="video">
      <video
        controls
        poster="https://archive.org/download/DuckAndCover_185/__ia_thumb.jpg"
        width="400"
        data-title="Duck and Cover"
        data-description="This film, a combination of animated cartoon and live action, shows young children what to do in case of an atomic attack."
      >
        <source
          src="https://archive.org/download/DuckAndCover_185/CivilDefenseFilm-DuckAndCoverColdWarNuclearPropaganda_512kb.mp4"
          type="video/mp4"
        />
        <source
          src="https://archive.org/download/DuckAndCover_185/CivilDefenseFilm-DuckAndCoverColdWarNuclearPropaganda.avi"
          type="video/x-msvideo"
        />
        Sorry, your browser doesn't support embedded videos. However, you can
        <a href="https://archive.org/details/DuckAndCover_185">download it</a>
        and watch it with your favorite video player!
      </video>
    </ItemCol> -->
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 20px;
  color: #fff;
  height: 1200px;
  overflow: auto;
  p {
    margin: 6px 0;
  }
  .banner {
    width: 400px;
  }
}
</style>
