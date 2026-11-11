console.log ("Hello, World!");

const tags = ["vegan", "spicy", "gluten-free", "deserts"];
const prices = [10, 15, 15, 7,];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " ";
}

let total = 0;
for(let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

document.querySelector("#total").textContent = "$" + total;