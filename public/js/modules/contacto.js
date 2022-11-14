console.log('🆗: Módulo PageContacto cargado.');

class PageContacto {

    static async init() {
        console.log('PageContacto.init()');

        const formulario2 = document.getElementById('secondaryForm');
        const inputs2 = document.querySelectorAll('#secondaryForm input');
        const textAreas2 = document.querySelectorAll('#secondaryForm textarea');

        const expresiones2 = {
            nombre: /^[a-záéíóúüñA-ZÁÉÍÓÚÑ0-9.,-\s\'\"\_]{1,30}$/,
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            comentario: /^[a-záéíóúüñA-ZÁÉÍÓÚÑ0-9.,-\s\'\"\_]{2,2000}$/
        }

        const validarFormulario2 = (e) => {
            switch (e.target.name) {
                case "nombre":
                    validarCampo2(expresiones2.nombre, e.target, 'name');
                    break;
                case "email":
                    validarCampo2(expresiones2.correo, e.target, 'email');
                    break;
                case "comments":
                    validarCampo2(expresiones2.comentario, e.target, 'comments');
                    break;
            }
        }

        const campos2 = {
            name: false,
            email: false,
            comments: false
        }

        const validarCampo2 = (expresion2, input2, campo2) => {
            if (expresion2.test(input2.value)) {
                document.getElementById(`${campo2}Group`).classList.remove('secondary-form__incorrecto');
                document.getElementById(`${campo2}Group`).classList.add('secondary-form__correcto');
                document.querySelector(`#${campo2}Group .secondary-form__input-error`).classList.remove('secondary-form__input-activo');
                campos2[campo2] = true;
            } else {
                document.getElementById(`${campo2}Group`).classList.remove('secondary-form__correcto');
                document.getElementById(`${campo2}Group`).classList.add('secondary-form__incorrecto');
                document.querySelector(`#${campo2}Group .secondary-form__input-error`).classList.add('secondary-form__input-activo');
                campos2[campo2] = false;
            }
        }

        inputs2.forEach((input) => {
            input.addEventListener('keyup', validarFormulario2);
        });

        textAreas2.forEach((textarea) => {
            textarea.addEventListener('keyup', validarFormulario2);
        });

        formulario2.addEventListener('submit', (e) => {
            e.preventDefault();
            if (campos2.name && campos2.email && campos2.comments) {
                formulario2.reset();
                document.getElementById('secondaryFormSuccess').classList.add('secondary-form__success__activo');
                document.getElementById('secondaryFormError').classList.remove('secondary-form__error__activo');

                setTimeout(() => {
                    document.getElementById('secondaryFormSuccess').classList.remove('secondary-form__success__activo');
                    document.getElementById(`emailGroup`).classList.remove('secondary-form__correcto')
                    document.getElementById(`nameGroup`).classList.remove('secondary-form__correcto')
                    document.getElementById(`commentsGroup`).classList.remove('secondary-form__correcto')
                }, 3000);
                campos2.name = false;
                campos2.comments = false;
                campos2.email = false;
            } else {
                document.getElementById('secondaryFormSuccess').classList.remove('secondary-form__success__activo');
                document.getElementById('secondaryFormError').classList.add('secondary-form__error__activo');
            }
        });
    }
}

export default PageContacto;