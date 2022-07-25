let cheese = -3;
let clicks = 0;

let clickUpgrades = {
    pickaxes: {
        price: 100,
        quantity: 0,
        multiplier: 2,
        powerUp: 0,
    },
    cart: {
        price: 200,
        quantity: 0,
        multiplier: 5,
        powerUp: 0,
    }
};

let automaticUpgrades = {
    rover: {
        price: 500,
        quantity: 0,
        multiplier: 20,
        powerUp: 0,
    },
    miner: {
        price: 1000,
        quantity: 0,
        multiplier: 50,
        powerUp: 0,
    }
};

function drawMoon() {
    let template = ''
    template += `
    <div class="col-12  d-flex justify-content-center">
            <img class="img-fluid moon-img" onclick="mine()" src="moon.png" alt="">
    </div>
   `
    let moonElm = document.getElementById('moon')
    moonElm.innerHTML = template
}
drawMoon()

function cheeseCount() {
    let template = ''
    template += `
    <div class="col-12">
        <p class="text-center p-text text-warning">Cheese Count: ${cheese}</p>
    </div>
    `
    let cheeseCountElm = document.getElementById('cheese')
    cheeseCountElm.innerHTML = template
}
cheeseCount()

function clickCheese() {
    let clickCheeseElm = document.getElementById('clickCheese')
    clickCheeseElm.innerHTML = clickUpgrades.cart.quantity * clickUpgrades.cart.multiplier + clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier + 1
}

function autoCheese() {
    let autoCheeseElm = document.getElementById('autoCheese')
    autoCheeseElm.innerHTML = automaticUpgrades.rover.quantity * automaticUpgrades.rover.multiplier + automaticUpgrades.miner.quantity * automaticUpgrades.miner.multiplier
}

function mine() {
    let mine = cheese
    let pickaxe = clickUpgrades.pickaxes
    let cart = clickUpgrades.cart
    cheese += 1
    cheese += pickaxe.multiplier * pickaxe.quantity
    cheese += cart.multiplier * cart.quantity
    drawMoon()
    cheeseCount()
}
mine()

//* NOTE Pickaxe *//
function drawPickaxeCount() {
    let pickaxeElm = document.getElementById('pickaxe-count')
    pickaxeElm.innerHTML = clickUpgrades.pickaxes.quantity
}

function pickaxeCost() {
    let pickaxeCostElm = document.getElementById('pickaxeCost')
    pickaxeCostElm.innerHTML = clickUpgrades.pickaxes.price * clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier + 100
}

function drawPickaxeMult() {
    let pickaxeMultElm = document.getElementById('pickaxe-mult')
    pickaxeMultElm.innerHTML = clickUpgrades.pickaxes.powerUp
}

function purchasePickaxe() {
    let pickaxe = clickUpgrades.pickaxes
    // pickaxe.forEach(pickaxe => quantity *= pickaxe.price)
    if (cheese >= pickaxe.price) {
        cheese -= pickaxe.price * pickaxe.quantity * pickaxe.multiplier + 100
        pickaxe.quantity += 1
        pickaxe.powerUp += 2
    } else {
        window.alert('You need more CHEESE!!! Click on the moon to get more cheese.')
    }
    // 1(the click) + (4(pickaxes) * 1(the multiplier))
    drawPickaxeCount()
    cheeseCount()
    drawPickaxeMult()
    pickaxeCost()
    clickCheese()
}

function usePickaxe() {
    let pickaxe = clickUpgrades.pickaxes
    if (pickaxe.quantity >= 1) {
        cheese += pickaxe.multiplier * pickaxe.quantity
        cheeseCount()
        drawPickaxeCount()
        mine()
    } else {
        window.alert('You need to buy a Pickaxe before you can use it!')
    }
}
mine()

//* NOTE Cart *//
function drawCartCount() {
    let cartElm = document.getElementById('cart-count')
    cartElm.innerHTML = clickUpgrades.cart.quantity
}
function cartCost() {
    let cartCostElm = document.getElementById('cartCost')
    cartCostElm.innerHTML = clickUpgrades.cart.quantity * clickUpgrades.cart.multiplier * clickUpgrades.cart.price + 200
}

function drawCartMult() {
    let cartMultElm = document.getElementById('cart-mult')
    cartMultElm.innerHTML = clickUpgrades.cart.powerUp
}

function purchaseCart() {
    let cart = clickUpgrades.cart
    if (cheese >= cart.price) {
        cheese -= (cart.quantity) * cart.multiplier * cart.price + 200
        cart.quantity += 1
        cart.powerUp += 5
    } else {
        window.alert('You need more CHEESE!!! Click on the moon to get more cheese.')
    }
    drawCartCount()
    cheeseCount()
    drawCartMult()
    cartCost()
    clickCheese()
}

function useCart() {
    let cart = clickUpgrades.cart
    if (cart.quantity >= 1) {
        cheese += cart.multiplier * cart.quantity
        cheeseCount()
        drawCartCount()
    } else {
        window.alert('You need to buy a Cart before you can use it!')
    }
}
mine()


//* NOTE Rover *//
function drawRoverCount() {
    let roverElm = document.getElementById('rover-count')
    roverElm.innerHTML = automaticUpgrades.rover.quantity
}

function roverCost() {
    let roverCostElm = document.getElementById('roverCost')
    roverCostElm.innerHTML = automaticUpgrades.rover.quantity * automaticUpgrades.rover.multiplier * automaticUpgrades.rover.price + 500
}

function drawRoverMult() {
    let roverMultElm = document.getElementById('rover-mult')
    roverMultElm.innerHTML = automaticUpgrades.rover.powerUp
}

function purchaseRover() {
    let rover = automaticUpgrades.rover
    // check quantity if we have enough cheese
    if (cheese >= rover.price) {
        cheese -= rover.quantity * rover.multiplier * rover.price + 500
        rover.quantity += 1
        rover.powerUp += 20
    } else {
        window.alert('You need more CHEESE!!! Click on the moon to get more cheese.')
    }
    console.log(rover)
    drawRoverCount()
    cheeseCount()
    drawRoverMult()
    roverCost()
    autoCheese()
}

function activateRover() {
    let rover = automaticUpgrades.rover
    if (rover.quantity >= 1) {
        cheese += rover.multiplier * rover.quantity
        cheeseCount()
        drawRoverCount()
    }
}

//* NOTE Miner *//
function drawMinerCount() {
    let minerElm = document.getElementById('miner-count')
    minerElm.innerHTML = automaticUpgrades.miner.quantity
}

function minerCost() {
    let minerCostElm = document.getElementById('minerCost')
    minerCostElm.innerHTML = automaticUpgrades.miner.quantity * automaticUpgrades.miner.multiplier * automaticUpgrades.miner.price + 1000
}

function drawMinerMult() {
    let minerMultElm = document.getElementById('miner-mult')
    minerMultElm.innerHTML = automaticUpgrades.miner.powerUp
}

function purchaseMiner() {
    let miner = automaticUpgrades.miner
    // check quantity if we have enough cheese
    if (cheese >= miner.price) {
        cheese -= miner.quantity * miner.multiplier * miner.price + 1000
        miner.quantity += 1
        miner.powerUp += 50
    } else {
        window.alert('You need more CHEESE!!! Click on the moon to get more cheese.')
    }
    console.log(miner)
    drawMinerCount()
    cheeseCount()
    drawMinerMult()
    minerCost()
    autoCheese()
}

function activateMiner() {
    let miner = automaticUpgrades.miner
    if (miner.quantity >= 1) {
        cheese += miner.multiplier * miner.quantity
        cheeseCount()
        drawMinerCount()
    }
}

// function updatePickaxe() {
//     let pickaxe = clickUpgrades.pickaxes
//     if (pickaxe.quantity > 1) {
//         pickaxe.price = pickaxe.price * 2

//     }
// }




setInterval(activateRover, 3000);
setInterval(activateMiner, 3000);





