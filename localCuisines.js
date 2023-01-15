let menu = [
{   
    Id: "Tteokbokki",
    title: "",
    category: "korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: "Spicy rice cakes, serving with fish cake.",
},
{   
    Id: "Chicken Ramen",
    title: "",
    category: "japan",
    price: 10.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
},
{   
    Id: "Bibimbap",
    title: "",
    category: "korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: "Boiling vegetables, serving with special hot sauce",
},
{   
    Id: "Dan Dan Mian",
    title: "",
    category: "china",
    price: 8.99,
    img: "https://i.pinimg.com/474x/01/b4/ce/01b4ceacf253c1ebc69d04cfda0fd95a.jpg",
    desc: "Boiling vegetables, serving with special hot sauce",
},
{   
    Id: "Yangzhou Fried Rice",
    title: "",
    category: "china",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: "Yangzhou style fried rice, serving with bean and pickles",
},
{   
    Id: "Onigiri",
    title: "",
    category: "japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: "Rice Sandwich, serving with soy sauce",
},
{   
    Id: "Jajangmyeon",
    title: "",
    category: "korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: "Black bean sauce noodle, serving with green onion",
},
{   
    Id: "Ma Yi Shang Shu",
    title: "",
    category: "china",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: "Hot pepper sauce noodle, serving with soy bean and onion",
},
{   
    Id: "Doroyaki",
    title: "",
    category: "japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: "Red bean paste dessert, serving with honey.",
},
{   
    Id: "Adana Kebab",
    title: "",
    category: "turkey",
    price: 79.99,
    img: "https://10619-2.s.cdn12.com/rests/original/104_504913001.jpg",
    desc: "A type of kebab or shish meatballs in Turkish cuisine, which is unique to Adana, made from pieces of meat minced by hand with a line-like knife called armor.",
},
{   
    Id: "Doner",
    title: "",
    category: "turkey",
    price: 34.99,
    img: "https://static.daktilo.com/sites/415/uploads/2021/03/09/large/5ec275545542850d68dee4ef.jpg",
    desc: "A dish unique to Turkish cuisine, in which pieces of meat, well seasoned with tallow and local spices, are cooked on a skewer and hung upright in front of a wood fire.",
},
] 

const newMenuReturn = (name) => {
    return menu.reduce((newMenu, food) => {
        if (name === "all") {
            newMenu.push(food)
        } else {if (food.category === name) {
            newMenu.push(food)
        }}
        return newMenu
    }, [])
}

function myFunction(name) {
    document.querySelector("#content").innerHTML = ""
    newMenuReturn(name).forEach(food => pushContent(food))
}

function pushContent(obj) {
    document.querySelector("#content").innerHTML += `<div class="col-sm-6 mt-2 mb-4">
    <div class="row">
        <div class="col-sm-4">
            <img class="w-100"
            src=${obj.img}></img>
        </div>
        <div class="col-sm-8">
            <div class="menu-price d-flex border-bottom border-dark">
                <h4>${obj.Id}</h4>
                <h4 id="price">${obj.price}</h4>
            </div>
            <div class="menu-text">
                <p class="mt-3">${obj.desc}</p>
            </div>
        </div>

    </div>
</div>`
}


