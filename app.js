let row = 4;

const details = () => {
    let name = document.getElementById("name").value;
    let uname = document.getElementById("uname").value;
    let amount = document.getElementById("amount").value;
    let ltbtn = document.getElementById("ltbtn");

    let spanbal = parseInt(document.getElementById("spanbal").innerHTML);

    if(!name || !uname || !amount) {
        alert("Please fill all the Details appropriately.");
        return;
    }
    amount = parseInt(document.getElementById("amount").value);

    // if(typeof(name) !== String || typeof(uname) !== String || typeof(amount) !== ) {
    //     alert("Invalid Entry !!!")
    //     return;
    // }
    
    // if(name !==String || uname !==String || amount !==Number ){
    //     prompt("Invalid Entry !!!");
    //     return;
    // }

    if(spanbal < amount){
        alert("Insufficient Balance !!!")
        return;
    }

    let histable = document.getElementById("histable");
    let newrow = histable.insertRow(row);

    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    let cell3 = newrow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = uname;
    cell3.innerHTML = amount;

    
    document.getElementById("spanbal").innerHTML = spanbal - amount;
    

    row++;
    alert("Successful Transaction !!!")

    
    const last = () =>{
        let ltbody = document.getElementById("ltbody");
        ltbody.innerHTML = `You sent Rs${amount} to ${name}.`
    }

    ltbtn.addEventListener("click", last);

    
}    



document.getElementById("mavbtn").addEventListener("click", details);

resetbtn = document.getElementById("resetbtn");
const reset = () =>{
    document.getElementById("hisform").reset();
}

resetbtn.addEventListener("click", reset)
    





