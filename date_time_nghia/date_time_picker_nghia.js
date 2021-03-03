Vue.component('date-time-picker-nghia', {
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
        selected_date_time(datetime){
            this.$emit('selected_date_time',datetime)
        }
    },
    mounted:async function(){
        const css_selector = '#'+this.id_input
        console.log('css_selector',css_selector)

        //init defaut value and set format value
        $(css_selector).datetimepicker({
            value:this.default_date,
            format:this.format,
        });
        

        // //bat su kien thay doi date tren date picker
        const self = this
        
        $(css_selector).datetimepicker({
            onChangeDateTime:function(){
                const datetime = $(css_selector).val()
                self.selected_date_time(datetime)
            }
        });

    }


})