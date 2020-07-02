var states = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
i = states.indexOf("AR")
console.log(i)

$(document).on("click", ".searches", function(event){
    event.preventDefault();   

    var states = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
    
    if ($(this).attr("id") === "searchBtn") {
        selection = $("#citySearch").val();
    }
    console.log(selection)
    
    i = states.indexOf(selection)
    console.log(i)

    var queryURL = "https://covidtracking.com/api/states";
     $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var city = selection;
        var cases = response[i].total
        var deaths = response[i].death
        var hospitalized = response[i].hospitalized
        var hospIncrease = response[i].hospitalizedIncrease
        var positive = response[i].positive

        console.log(cases)
        console.log(deaths)
        console.log(hospitalized)
        console.log(hospIncrease)
        console.log(positive)


});
});

// function dropDown(){}
// var dropBox = document.getElementById("input")
// document.getElementById

// for (let i = 0; i < array.length; i++) {
//     // alert = array[i];
//     dropBox.options.add(new Option(array[i]));
// }

// function getValue() {
//     var drop_Val = dropBox.options[dropBox.selectedIndex].value;
//     alert(drop_Val);
// }

// $(document).on("click", ".searches", function(event){
//     event.preventDefault();    

//     var states = ["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
    
//     if ($(this).attr("id") === "searchBtn") {
//         selection = $("#citySearch").val();
//     }
//     console.log(selection)
    
//     i = states.indexOf(selection)
//     console.log(i)


// })