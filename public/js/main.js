import productController from '/js/controllers/product.js';

class Main {

    async ajax(url, method = 'get') {
        return await fetch(url, { method: method }).then(r => r.text());
    }

    getIdFromHash() {
        let id = location.hash.slice(1);
        if (id[0] === '/') {
            id = id.slice(1);
        }
        return id || 'inicio';
    }

    getViewUrlFromId(id) {
        return `views/${id}.html`;
    }

    getModuleUrlFromId(id) {
        return `./modules/${id}.js`;
    }

    setActiveLink(id) {
        const links = document.querySelectorAll('.main-nav__link');
        links.forEach(link => {
            if (link.getAttribute('href') === `#/${id}`) {
                link.classList.add('main-nav__link--active');
                link.ariaCurrent = 'page';
            } else {
                link.classList.remove('main-nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }

    async initJS(id) {
        const moduleUrl = this.getModuleUrlFromId(id);
        try {
            const { default: module } = await import(moduleUrl);
            if (typeof module.init !== 'function') {
                console.error(`El módulo ${id} no posee un método init().`);
                return;
            }
            module.init();
        } catch (error) {
            console.error(`No se pudo importar el módulo ${moduleUrl}.`);
        }
    }

    async loadTemplate() {
        const id = this.getIdFromHash();
        const viewUrl = this.getViewUrlFromId(id);
        const viewContent = await this.ajax(viewUrl);
        document.querySelector('main').innerHTML = viewContent;
        const products = await productController.getProducts();
        const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
        const botonAbrir = document.getElementById('boton-carrito')
        const botonCerrar = document.getElementById('carritoCerrar')
        const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
        const contentModal = document.getElementById('carrito-contenedor')
        const contadorCarrito = document.getElementById('contadorCarrito')
        const botonVaciar = document.getElementById('vaciar-carrito')
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let flag = 0;
        const saveCart = () => localStorage.setItem('cart', JSON.stringify(cart));
        const saveQuantity = () => localStorage.setItem('quantityTotal', JSON.stringify(quantityTotal))
        const precioTotal = document.getElementById('precioTotal')
        let quantityTotal = 0;

        botonAbrir.addEventListener('click', () => {
            if (flag === 0) {
                contenedorModal.classList.add('modal-active')
                flag = 1;
            }
            else {
                contenedorModal.classList.remove('modal-active')
                flag = 0;
            }
        })

        botonCerrar.addEventListener('click', () => {
            if (flag === 0) {
                contenedorModal.classList.add('modal-active')
                flag = 1;
            }
            else {
                contenedorModal.classList.remove('modal-active')
                flag = 0;
            }
        })

        contenedorModal.addEventListener('click', (event) => {
            if (flag === 0) {
                contenedorModal.classList.add('modal-active')
                flag = 1;
            }
            else {
                contenedorModal.classList.remove('modal-active')
                flag = 0;
            }
        })

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                contenedorModal.classList.remove('modal-active')
                flag = 0;
            }
        });

        modalCarrito.addEventListener('click', (event) => {
            event.stopPropagation()
        })

        const mainCall = document.getElementById('main')

        mainCall.addEventListener('click', e => {
            if (e.target.classList.contains('buyBtn')) {
                e.preventDefault();
                quantityTotal++;
                addToCart(e.target.id);
                botonAbrir.classList.add('boton-interaction-compra');
            }
        })

        function addToCart(id) {

            const productDuplicated = cart.some(prod => prod.id === id);

            if (productDuplicated) {
                const product = cart.map(product => {
                    if (product.id === id) {
                        product.cantidad++;
                    }
                })
            } else {
                const product = products.find((product) => product.id === id);
                cart.push(product);
            }

            const productAddInteraction = document.getElementById('productAdded');
            productAddInteraction.classList.add('producto-agregado-active');

            setTimeout(() => {
                productAddInteraction.classList.remove('producto-agregado-active');
            }, 700);

            setTimeout(() => {
                botonAbrir.classList.remove('boton-interaction-compra');
            }, 150);
            updateCart();
        }

        const updateCart = () => {
            contentModal.innerHTML = "No hay productos aún..."

            if (cart.length != 0) {
                contentModal.innerHTML = `
                    <div class="modal_products-header" >
                            <div class="modal_product-item" id="item-foto">FOTO</div>
                            <div class="modal_product-item" id="item-nombre">NOMBRE</div>
                            <div class="modal_product-item" id="item-cantidad">CANTIDAD</div>
                            <div class="modal_product-item" id="item-precio">PRECIO</div>
                            <div class="modal_product-item" id="item-subtotal">SUBTOTAL</div>
                            <div class="modal_product-item"></div>
                    </div>
                `
            }

            cart.forEach((prod) => {
                const { name, description, price, descriptionLarge, image, cantidad, id } = prod;
                const div = document.createElement('div');
                div.className = ('productoEnCarrito');
                div.innerHTML = `
                <picture class="modal_image-container modal_product-item-small">
                    <img src="${image}" alt="${name}" class="modal_image">
                </picture>
                <div class="modal_product-item">
                    ${name}
                </div>
                <div class="modal_product-item" id="cantidad">
                    ${cantidad}
                </div>
                <div class="modal_product-item" id="precio">
                    ${price}
                </div>
                <div class="modal_product-item" id="subtotal">
                    ${price * cantidad}
                </div>
                <div class="modal_product-item modal_product-item-small">
                    <button class="boton-eliminar" onclick="deleteFromCart('${id}')"><i class="fas fa-trash-alt"></i></button>
                </div>
            `

                contentModal.appendChild(div);
            })

            contadorCarrito.innerText = quantityTotal
            precioTotal.innerText = cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
            saveQuantity();
            saveCart();
        }

        function starting() {
            quantityTotal = JSON.parse(localStorage.getItem("quantityTotal"))
            updateCart();
        }

        starting()

        window.deleteFromCart = (id) => {
            const item = cart.find((prod) => prod.id === id);
            const indice = cart.indexOf(item);

            const productQuantity = cart.map(product => {
                if (product.id === id) {
                    quantityTotal -= product.cantidad;
                    product.cantidad = 1;
                }
            })

            cart.splice(indice, 1);
            updateCart();
        }

        botonVaciar.addEventListener('click', () => {
            quantityTotal = 0;
            cart.length = 0
            products.forEach(product => product.cantidad = 1)
            updateCart();
        })

        const btnEnviarCompra = document.getElementById('comprar-carrito');
        btnEnviarCompra.addEventListener('click', async (e) => {
            cart.pop;
            console.log(cart)
            try {
                return await fetch('http://127.0.0.1:8080/cart', {
                    method: 'post',
                    body: JSON.stringify(cart),
                    headers: { 'content-type': 'application/json' }
                }).then(r => r.json());
            } catch (e) {
            }
        })


        this.setActiveLink(id);

        this.initJS(id);
    }

    async loadTemplates() {
        this.loadTemplate();
        window.addEventListener('hashchange', () => this.loadTemplate());
    }

    async start() {
        await this.loadTemplates();
    }

    // static async renderTemplateTable(products) {
    //     const hbsFile = await fetch('/cart').then(r => r.text());
    //     const template = Handlebars.compile(hbsFile);
    //     const html = template({ products });
    //     document.querySelector('.products-table-container').innerHTML = html;
    // }

}

const main = new Main();
main.start();