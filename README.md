# Programa Champions IA · OCASA

Sitio estático para GitHub Pages. No necesita instalar nada ni compilar.

## Estructura

```
index.html                 Portada del programa (intro, objetivos, Mes 1-2-3)
mes-2/index.html           Índice del Mes 2 (n8n y agentes)
mes-2/modulo-1.html … 4    Un módulo por semana, cada uno con su URL
mes-2/adicional.html       Material adicional (opcional)
mes-3/index.html           Índice del Mes 3 (Claude Code)
mes-3/modulo-1.html, 2
mes-3/adicional.html
assets/champions.css       Estilos compartidos
assets/champions.js        Checkboxes, avance, botones de copiar
assets/curso.js            Datos del curso (meses, módulos, actividades)
assets/archivos/           CSV y TXT de práctica
```

## Publicar

1. Creá un repo (por ejemplo `champions`) y subí todo el contenido de esta carpeta a la raíz.
2. En el repo: Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)`.
3. En un par de minutos queda en `https://TU-USUARIO.github.io/champions/`.

Links para pasar por Slack:

- Programa: `…/champions/`
- Mes 2: `…/champions/mes-2/` · Módulo 1: `…/champions/mes-2/modulo-1.html`
- Mes 3: `…/champions/mes-3/` · Módulo 2: `…/champions/mes-3/modulo-2.html`

El sitio queda público para cualquiera que tenga el link.

## Sumar el Mes 1

1. Creá la carpeta `mes-1/` con su `index.html` (y `modulo-N.html` si lo dividís por semana, igual que los otros meses).
2. En `index.html` de la raíz, reemplazá el `<div class="mescard off" …>` del Mes 1 (hay un comentario arriba que lo marca) por
   `<a class="mescard" data-mes="mes-1" href="mes-1/index.html">…</a>` y cambiá "Próximamente" por "Entrar →".
3. En `assets/curso.js`, en la entrada `mes-1`, poné `"disponible": true` y, si tiene módulos con checkboxes, cargalos igual que los del Mes 2
   (`key` del localStorage y los `data-id` obligatorios de cada módulo en `req`). Así la portada muestra el avance.

## Avance

Se guarda en el navegador de cada persona (localStorage) con las claves `champions-n8n-v1` y `champions-claude-code-v1`.
Si cambiás los `data-id` de un checkbox, esa casilla aparece desmarcada para quien ya la había marcado.
