function getAge() {
    var today = new Date();
    var birthDate = new Date("1994/09/17");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//function to insert text inside a string
String.prototype.insert = function (index, string) {
    if (index > 0) 
        return this.substring(0, index) + string + this.substring(index, this.length);
    else 
        return string + this;
    }
;

var text = document.getElementById("about-text");

text.innerHTML = text
    .innerHTML
    .insert(20, getAge());