<template></template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    async reloadResources() {
      this.resourceName =
        this.$router.currentRoute.params.resourceName ||
        this.$router.currentRoute.name;
      if (this.resourceName) {
        let filters_backup = _.cloneDeep(
          this.$store.getters[`${this.resourceName}/filters`]
        );
        let filters_to_change = _.cloneDeep(filters_backup);
        filters_to_change.push({});
        await this.$store.commit(
          `${this.resourceName}/storeFilters`,
          filters_to_change
        );
        await this.$store.commit(
          `${this.resourceName}/storeFilters`,
          filters_backup
        );
      }
    }
  }
};
</script>

<style></style>