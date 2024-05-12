import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TawkMessengerVue, {
    propertyId: "65ed7b549131ed19d9778008",

    widgetId: "1hojqjgo9",
  });
});
