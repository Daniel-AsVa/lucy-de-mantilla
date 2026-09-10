# Página web de Lucy de Mantilla

Proyecto estático preparado para editar en Visual Studio Code.

## Abrir el proyecto

1. Descomprime `lucy-de-mantilla-web.zip`.
2. Abre Visual Studio Code.
3. Selecciona **File > Open Folder** (`Datei > Ordner öffnen`).
4. Elige la carpeta `lucy-de-mantilla-web`.
5. Abre `index.html` para modificar los textos.
6. Abre `styles.css` para cambiar colores, tamaños y distribución.

## Ver la página

Puedes abrir `index.html` directamente en el navegador. Para actualizarla automáticamente mientras trabajas, instala la extensión **Live Server** en Visual Studio Code y pulsa **Go Live**.

## Colocar una fotografía

Guarda una fotografía autorizada dentro de `imagenes`, por ejemplo como `lucy-mantilla.jpg`. Después sustituye el bloque `<div class="portrait">...</div>` de `index.html` por:

```html
<div class="portrait portrait-photo">
  <img src="imagenes/lucy-mantilla.jpg" alt="Retrato de Lucy de Mantilla">
</div>
```

Añade al final de `styles.css`:

```css
.portrait-photo {
  padding: 0;
}

.portrait-photo::before {
  display: none;
}

.portrait-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Archivos principales

- `index.html`: contenido y estructura.
- `styles.css`: diseño y versión móvil.
- `script.js`: menú móvil y año automático.
- `imagenes`: fotografías autorizadas.

