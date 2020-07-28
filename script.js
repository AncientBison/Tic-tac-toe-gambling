s1 = document.getElementById("s1")
s2 = document.getElementById("s2")
s3 = document.getElementById("s3")
s4 = document.getElementById("s4")
s5 = document.getElementById("s5")
s6 = document.getElementById("s6")
s7 = document.getElementById("s7")
s8 = document.getElementById("s8")
s9 = document.getElementById("s9")

i1 = document.getElementById("i1")
i2 = document.getElementById("i2")
i3 = document.getElementById("i3")
i4 = document.getElementById("i4")
i5 = document.getElementById("i5")
i6 = document.getElementById("i6")
i7 = document.getElementById("i7")
i8 = document.getElementById("i8")
i9 = document.getElementById("i9")

y = []
o = []

var timeout = false
var hasOne = false

title = document.getElementById("title")

function win(op) {
  console.log(op)
  var wincons = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]]
  for (var i = 0;i<8;i++) {
    var con = wincons[i]
    console.log("o/p:" + y + "|con:" + con)
    if (op.indexOf(con[0]) != -1 && op.indexOf(con[1]) != -1 && op.indexOf(con[2]) != -1) {
      if (op = y) {
        title.innerHTML = "You Win!"
        hasOne = true
        break
      }
      else {
        title.innerHTML = "You Lose!"
        timeout = true
      }
    }
    else {
      console.log("none")
    }
  }
}

function opponent() {
  if (!hasOne) {
    var slot = JSON.stringify(Math.floor(Math.random()*10))
    while (slot == "0" || y.indexOf(slot) == -1 || o.indexOf(slot) == -1) {
      var slot = JSON.stringify(Math.floor(Math.random()*10))
    }
    o.push(slot)
    var tile = "i" + slot
    s = document.getElementById(tile)
    console.log("Opponent tile: " + tile)
    console.log("Opponent board: " + o)
    s.src = "circle.png"
    timeout = false
  }
}

s1.addEventListener("click", function() {
  if (y.indexOf("1") == -1 && !timeout) {
    y.push("1")
    console.log(y)
    i1.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s2.addEventListener("click", function() {
  if (y.indexOf("2") == -1 && !timeout) {
    y.push("2")
    console.log(y)
    i2.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s3.addEventListener("click", function() {
  if (y.indexOf("3") == -1 && !timeout) {
    y.push("3")
    console.log(y)
    i3.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s4.addEventListener("click", function() {
  if (y.indexOf("4") == -1 && !timeout) {
    y.push("4")
    console.log(y)
    i4.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s5.addEventListener("click", function() {
  if (y.indexOf("5") == -1 && !timeout) {
    y.push("5")
    console.log(y)
    i5.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s6.addEventListener("click", function() {
  if (y.indexOf("6") == -1 && !timeout) {
    y.push("6")
    console.log(y)
    i6.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s7.addEventListener("click", function() {
  if (y.indexOf("7") == -1 && !timeout) {
    y.push("7")
    console.log(y)
    i7.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s8.addEventListener("click", function() {
  if (y.indexOf("8") == -1 && !timeout) {
    y.push("8")
    console.log(y)
    i8.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})

s9.addEventListener("click", function() {
  if (y.indexOf("9") == -1 && !timeout) {     
    y.push("9")
    console.log(y)
    i9.src = "cross.png"
    win(y)
    setTimeout(opponent, 675)
    timeout = true
  }
})