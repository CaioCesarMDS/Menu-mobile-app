const MENU = [
    {
        title: "Lanche do dia",
        data: [
            {
                id: "1",
                title: "Hambúrguer Clássico",
                price: 24.9,
                description:
                    "Um hambúrguer suculento de carne angus grelhada, queijo cheddar derretido, alface fresca, tomate e maionese caseira, tudo isso dentro de um pão de hambúrguer delicioso.",
                cover: require("../../assets/products/cover/1.png"),
                thumbnail: require("../../assets/products/thumbnail/1.png"),
                ingredients: [
                    "Pão brioche",
                    "2x carnes angus de 80g",
                    "Queijo cheddar",
                    "Alface",
                    "Tomate",
                    "Cebola",
                    "Maionese caseira",
                ],
            },
        ],
    },
    {
        title: "Promoções",
        data: [
            {
                id: "2",
                title: "Hambúrguer Picante",
                price: 34.9,
                description:
                    "Para os amantes de um toque ardente, este hambúrguer vem com carne grelhada, queijo pepper jack derretido, jalapeños em conserva e um pouco de molho de pimenta chipotle.",
                cover: require("../../assets/products/cover/2.png"),
                thumbnail: require("../../assets/products/thumbnail/2.png"),
                ingredients: [
                    "Pão australiano",
                    "1 carne smash de 120g",
                    "Queijo pepper",
                    "Alface",
                    "Tomate",
                    "Jalapenõs em conserva",
                    "Molho de pimenta",
                ],
            },
            {
                id: "3",
                title: "Hambúrguer BBQ",
                price: 32.7,
                description:
                    "Um clássico americano com carne grelhada, queijo derretido, bacon crocante e molho barbecue defumado.",
                cover: require("../../assets/products/cover/3.png"),
                thumbnail: require("../../assets/products/thumbnail/3.png"),
                ingredients: [
                    "Pão brioche",
                    "110g de carne grelhada",
                    "Queijo derretido",
                    "Bacon crocante",
                    "Alface",
                    "Tomate",
                    "Cebola caramelizada",
                    "Molho barbecue",
                ],
            },
            {
                id: "4",
                title: "Hambúrguer Mediterrâneo",
                price: 29.9,
                description:
                    "Uma opção diferente com carne de cordeiro suculenta, queijo feta cremoso, tomate seco, rúcula fresca e azeite de oliva, servido em um pão de hambúrguer tradicional.",
                cover: require("../../assets/products/cover/4.png"),
                thumbnail: require("../../assets/products/thumbnail/4.png"),
                ingredients: [
                    "Pão brioche",
                    "Carne de cordeiro (140g)",
                    "Queijo feta cremoso",
                    "Rúcula fresca e Azeite",
                    "Tomate seco",
                    "Picles",
                    "Molho da casa",
                ],
            },
        ],
    },
    {
        title: "Sobremesa",
        data: [
            {
                id: "5",
                title: "Sundae Supreme",
                price: 18.9,
                description:
                    "Uma bola de sorvete de creme cremoso, coberta com calda de chocolate quente, chantilly farto, pedaços crocantes de waffle e cerejas suculentas.",
                cover: require("../../assets/products/cover/5.png"),
                thumbnail: require("../../assets/products/thumbnail/5.png"),
                ingredients: [
                    "Brownie",
                    "1x Bola de sorvete de creme",
                    "Calda de chocolate",
                    "Chantilly",
                    "Pedaços crocantes de waffle",
                ],
            },
            {
                id: "6",
                title: "Cupcake Delícia",
                price: 22.9,
                description:
                    "Um deleite para os amantes de cupcakes, recheado com sorvete de baunilha cremoso, coberto com uma montanha de chantilly, granulado colorido e uma cereja no topo para finalizar.",
                cover: require("../../assets/products/cover/6.png"),
                thumbnail: require("../../assets/products/thumbnail/6.png"),
                ingredients: [
                    "Sorvete de baunilha",
                    "Chantilly",
                    "Granulado colorido",
                    "Cereja",
                ],
            },
        ],
    },
    {
        title: "Bebidas",
        data: [
            {
                id: "7",
                title: "Coca Cola 350ml",
                price: 6.9,
                thumbnail: require("../../assets/products/thumbnail/7.png"),
                cover: require("../../assets/products/cover/7.png"),
                description:
                    "Uma coca super gelada para acompanhar o seu super lanche e refrescar o seu dia.",
                ingredients: [],
            },
        ],
    },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { CATEGORIES, MENU, PRODUCTS, ProductProps };
