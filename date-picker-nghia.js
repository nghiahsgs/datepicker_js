// <template v-if="s4_start_date">
//     <date-picker-nghia id_input="datepicker_start_date_s4" @selected_date="handle_selected_date_start" :default_date="s4_start_date" format="dd-mm-yy">
//     <input type="text" id="datepicker_start_date_s4"  class="form-control datepicker">
//     </date-picker-nghia>
// </template>

// handle_selected_date_start(date){
//     console.log('handle_selected_date_start',date)
//     this.s4_start_date = date
// },
Vue.component('date-picker-nghia', {
    data: function () {
        return {
            // loadingCampaign: true
        }
    },
    props:{id_input: String,format:String,default_date:String},
    template:`<template><div>
            <slot></slot>
    </div></template>`,
    methods:{
        selected_date(date){
            this.$emit('selected_date',date)
        }
    },
    mounted:async function(){
        const css_selector = '#'+this.id_input
        console.log(css_selector)

        //init and set format value
        if(this.format){
            $(css_selector).datepicker({dateFormat: this.format });
        }else{
            $(css_selector).datepicker({dateFormat: 'dd-mm-yy' });
        }

        //bat su kien thay doi date tren date picker
        const self = this
        $(css_selector).change(function() {
            // console.log('dosomething!!!')
            const date = $(css_selector).val()
            self.selected_date(date)
        });

        //set default value
        if(this.default_date){
            console.log('this.default_date',this.default_date)
            $(css_selector).datepicker( "setDate", this.default_date);
        }
    }


})
