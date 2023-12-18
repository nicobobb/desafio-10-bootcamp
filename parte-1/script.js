class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    nombreCompleto() {
        return `${this.titulo}, de ${this.autor.toUpperCase()}`;
    }

    mostrarDatosEnConsola() {
        console.log(this.nombreCompleto());
    }

    mostrarDatosEnAlert() {
        alert(this.nombreCompleto());
    }

    getTitulo() {
        return this.titulo;
    }

    mostrarDatos(tipo) {
        switch (tipo) {
            case "console":
                this.mostrarDatosEnConsola();
                break;
            case "alert":
                this.mostrarDatosEnAlert();
                break;
            default:
                this.mostrarDatosEnConsola();
                break;
        }
    }
}

let unLibro = new Libro("Ángeles y Demonios", "Dan Brown");
let otroLibro = new Libro("Fuego y Sangre", "GEORGE R. R. MARTIN");
