convert_date_string_to_timestamp=(dateString,charDetermine)=>{
    const L = dateString.split(charDetermine)
    const day = L[0]
    const month = L[1] - 1
    const year = L[2]
    const timeStamp = (new Date(year,month,day)).getTime()
    return parseInt(timeStamp)
}
get_date_string_from_date_obj = (today,format,determine)=>{
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let str_day
    if(format=='ddmmyy'){
        str_day = dd + determine + mm + determine + yyyy;
    }else if(format=='mmddyy'){
        str_day = mm + determine + dd + determine + yyyy;
    }else if(format=='yymmdd'){
        str_day = yyyy + determine + mm + determine + dd;
    }else{
        str_day = ''
    }
    return str_day
}
// let today = new Date();
// let format = 'ddmmyy'
// let determine = '/'
// str_day = get_date_string_from_date_obj(today,format,determine)
// console.log(str_day)

shift_date_time = (today,delta)=>{
    let past = new Date(today);
    past.setDate( past.getDate() + delta );
    return past
}
// let today = new Date();
// let past = shift_date_time(today,1)
// console.log(today)
// console.log(past)


split_time_from_date_picker = (date_str)=>{
    let day = date_str.split('-')[0]
    let month = date_str.split('-')[1]
    let year = date_str.split('-')[2]
    return {day,month,year}
}

// date_str = '06-02-1998'
// const {day,month,year} = split_time_from_date_picker(date_str)
// console.log({day,month,year})
