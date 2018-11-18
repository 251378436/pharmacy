import Vue from "vue";

Vue.filter("numberTwoDecimalPlaces", (value: any) => {
    return value.toFixed(2);
});