/* Datos del programa. Lo usa champions.js para calcular el avance.
   Para sumar el Mes 1: poné "disponible": true en su entrada y agregá sus módulos
   (o dejá "modulos": [] si es una sola página). Ver README.md. */
window.CURSO = {
  "meses": [
    {
      "id": "mes-1",
      "n": 1,
      "titulo": "Fundamentos de IA",
      "disponible": false,
      "url": "mes-1/index.html",
      "key": "",
      "modulos": []
    },
    {
      "id": "mes-2",
      "n": 2,
      "titulo": "n8n y agentes",
      "disponible": true,
      "url": "mes-2/index.html",
      "key": "champions-n8n-v1",
      "desc": "Automatizaciones y agentes en n8n: de tu primer workflow a un agente que consulta información, usa herramientas y pide aprobación antes de actuar.",
      "modulos": [
        {
          "n": 1,
          "titulo": "Primeros workflows en n8n",
          "corto": "Primeros workflows",
          "horas": "3 h",
          "url": "mes-2/modulo-1.html",
          "req": [
            "s1-m0",
            "s1-e0",
            "s1-e1",
            "s1-e2"
          ],
          "opt": [
            "s1-e3"
          ]
        },
        {
          "n": 2,
          "titulo": "Del workflow al agente",
          "corto": "Del workflow al agente",
          "horas": "4 h 43",
          "url": "mes-2/modulo-2.html",
          "req": [
            "s2-m0",
            "s2-m1",
            "s2-e0",
            "s2-e1",
            "s2-e2"
          ],
          "opt": []
        },
        {
          "n": 3,
          "titulo": "Contexto y manos: RAG y MCP",
          "corto": "Contexto y manos: RAG y MCP",
          "horas": "4 h 18",
          "url": "mes-2/modulo-3.html",
          "req": [
            "s3-m0",
            "s3-m1",
            "s3-e0",
            "s3-e1",
            "s3-e2"
          ],
          "opt": [
            "s3-e3"
          ]
        },
        {
          "n": 4,
          "titulo": "Un agente en el que se pueda confiar",
          "corto": "Un agente confiable",
          "horas": "4 h 25",
          "url": "mes-2/modulo-4.html",
          "req": [
            "s4-m0",
            "s4-m1",
            "s4-e0",
            "s4-e1",
            "s4-e2"
          ],
          "opt": []
        }
      ],
      "adicional": {
        "url": "mes-2/adicional.html",
        "ids": [
          "xa-m0",
          "xa-m1",
          "xb-m0",
          "xc-m0",
          "xc-m1",
          "xd-m0",
          "xe-m0"
        ]
      }
    },
    {
      "id": "mes-3",
      "n": 3,
      "titulo": "Claude Code",
      "disponible": true,
      "url": "mes-3/index.html",
      "key": "champions-claude-code-v1",
      "desc": "Claude trabajando sobre tus archivos: le das el contexto de tu área y construís herramientas propias para tu proyecto integrador.",
      "modulos": [
        {
          "n": 1,
          "titulo": "Primeros pasos con Claude Code",
          "corto": "Primeros pasos",
          "horas": "3 h 34",
          "url": "mes-3/modulo-1.html",
          "req": [
            "s1-m0",
            "s1-e0",
            "s1-e1",
            "s1-e2",
            "s1-e3"
          ],
          "opt": []
        },
        {
          "n": 2,
          "titulo": "Construir con Claude Code",
          "corto": "Construir con Claude Code",
          "horas": "4 h",
          "url": "mes-3/modulo-2.html",
          "req": [
            "s2-m0",
            "s2-m1",
            "s2-e0",
            "s2-e1",
            "s2-e2"
          ],
          "opt": [
            "s2-e3"
          ]
        }
      ],
      "adicional": {
        "url": "mes-3/adicional.html",
        "ids": [
          "xa-m0",
          "xb-m0",
          "xb-m1",
          "xc-m0",
          "xc-m1",
          "xd-m0"
        ]
      }
    }
  ]
};
