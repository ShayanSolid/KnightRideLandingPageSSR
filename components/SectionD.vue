<template>
  <div>
    <TextBox class="pt-4" :header="$t('sectionD.mission.title')" :body="$t('sectionD.mission.body')"
    />

    <TextBox class="pt-4" :header="$t('sectionD.app.title')" :body="$t('sectionD.app.body')"
    />

    <TextBox class="pt-4" :header="$t('sectionD.about_app.title')" :body="$t('sectionD.about_app.body')"
    />

    <DownloadButton/>

  </div>
</template>

<script>
export default {
  name: 'SectionD'
}
</script>

<style scoped>

</style>
