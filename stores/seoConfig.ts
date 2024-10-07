export const useSeoConfigStore = defineStore("syncSeoConfig", {
    state: () => ({
        seoConfig: {},
    }),
    persist: true,
    actions: {
        async updateSeoConfig(data: any) {
            this.seoConfig = data;
        },
    },
});
