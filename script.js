/* ============================================================
   CARBEL COFFEE & PASTRY — datos y lógica
   ============================================================
   ✅ CON PRECIOS REALES. Toda la carta está transcrita de su propia carta
   digital (menu.fu.do/carbelcoffe/qr-menu), leída el 10-09-2026. Nombres,
   descripciones y precios son literalmente los suyos. Ningún precio
   inventado ni estimado. Si suben precios, hay que actualizar esta carta.
   ============================================================ */

const MENU = {
  "brunch": {
    "label": "Brunch y desayunos",
    "items": [
      {
        "n": "Brunch Carbel",
        "p": 14900,
        "d": "Americano o cappuccino, jugo natural de naranja o pulpa, tostadas con huevos revueltos y palta fresca, tomates cherry. Incluye pastel a elección"
      },
      {
        "n": "Golden Brunch",
        "p": 14900,
        "d": "Croissant relleno de pesto, rúcula, jamón serrano, palta y huevo frito, con café a elección, jugo y un cinnamon roll"
      },
      {
        "n": "Brunch Americano",
        "p": 15900,
        "d": "Dos tostadas, dos huevos fritos, palta, tocino, ricotta, cherrys, café a elección y jugo"
      },
      {
        "n": "Desayuno de la casa",
        "p": 9900,
        "d": "Bowl con huevos revueltos, palta laminada y jamón, café a elección y un jugo · hasta las 12:30"
      },
      {
        "n": "Power Breakfast",
        "p": 8900,
        "d": "Tostadas con huevos revueltos, café americano o latte, jugo de naranja o mango · hasta las 12:30"
      },
      {
        "n": "Once de la casa",
        "p": 8900,
        "d": "Croissant de jamón y queso o serrano, media luna, café o té y jugo a elección · de 18:00 a 20:00"
      },
      {
        "n": "Once de la huerta",
        "p": 8900,
        "d": "Tostadas con palta, tomates cherry, jamón y queso, café o té y jugo · de 18:00 a 20:00"
      }
    ]
  },
  "promos": {
    "label": "Promos Carbel",
    "items": [
      {
        "n": "Combo Pizza & Coffee",
        "p": 8900,
        "d": "Pizza a elección + iced latte sabores, matcha o té a elección"
      },
      {
        "n": "Dúo salado",
        "p": 7900,
        "d": "Capuccino, latte o americano + croissant jamón queso o serrano"
      },
      {
        "n": "Dúo dulce",
        "p": 7900,
        "d": "Capuccino, latte o americano + pastel o torta a elección"
      },
      {
        "n": "Súper dúo",
        "p": 3900,
        "d": "Americano mediano o capuccino + cinnamon roll o una medialuna con manjar"
      }
    ]
  },
  "dieciocho": {
    "label": "Especial 18",
    "items": [
      {
        "n": "Terremoto Carbel",
        "p": 4900,
        "d": "El típico terremoto pero en su versión: dos bolas de helado de piña, destilado sin alcohol, puré de frutos rojos y agua gasificada"
      },
      {
        "n": "Empolvado",
        "p": 2300,
        "d": "El clásico de septiembre"
      }
    ]
  },
  "cafeteria": {
    "label": "Cafetería",
    "items": [
      {
        "n": "Espresso doble",
        "p": 2400,
        "d": "Doble shot de café en grano recién extraído"
      },
      {
        "n": "Americano mediano",
        "p": 2900,
        "d": "Doble carga de espresso y agua caliente, taza de 250 ml"
      },
      {
        "n": "Americano grande",
        "p": 3200,
        "d": "Dos cargas de espresso y agua caliente, taza de 300 ml"
      },
      {
        "n": "Capuccino",
        "p": 3400,
        "d": "Espresso y leche texturizada, taza de 250 ml",
        "img": "postre.jpg"
      },
      {
        "n": "Latte",
        "p": 3700,
        "d": "Doble shot de espresso y leche texturizada, taza de 300 ml"
      },
      {
        "n": "Flat white",
        "p": 3400,
        "d": "Dos shots de espresso y leche vaporizada, textura sedosa, taza de 150 ml"
      },
      {
        "n": "Latte vainilla",
        "p": 3900,
        "d": "Latte con syrup de vainilla"
      },
      {
        "n": "Latte caramel",
        "p": 3900,
        "d": "Latte con syrup de caramelo, tamaño grande"
      },
      {
        "n": "Moccachino",
        "p": 4000,
        "d": "Doble espresso, chocolate y leche texturizada, taza de 300 ml"
      },
      {
        "n": "Matcha latte mediano",
        "p": 3700,
        "d": "Adagio matcha puro con leche texturizada, taza de 250 ml"
      },
      {
        "n": "Matcha latte grande",
        "p": 3900,
        "d": "Adagio matcha puro con leche texturizada, taza de 300 ml"
      },
      {
        "n": "Chai latte mediano",
        "p": 3700,
        "d": "Té chai con leche vaporizada, canela y clavo de olor"
      },
      {
        "n": "Chai latte grande",
        "p": 3900,
        "d": "Té chai con leche vaporizada, canela y clavo de olor"
      },
      {
        "n": "Chocolate caliente mediano",
        "p": 3700,
        "d": "Con crema, taza de 250 ml"
      },
      {
        "n": "Chocolate caliente grande",
        "p": 4000,
        "d": "Con crema, taza de 300 ml"
      },
      {
        "n": "Tea bag by Adagio Teas",
        "p": 3000,
        "d": "Distintas variedades de Adagio Teas"
      },
      {
        "n": "Pumpkin latte",
        "p": 3900,
        "d": "Latte con syrup de calabaza y clavo de olor, espresso y crema · de temporada"
      },
      {
        "n": "Tonka latte",
        "p": 3900,
        "d": "Notas de vainilla, almendra tostada y un toque especiado · de temporada"
      },
      {
        "n": "Latte crème brûlée",
        "p": 3900,
        "d": "Latte con syrup del clásico postre · de temporada"
      },
      {
        "n": "Irish latte",
        "p": 3900,
        "d": "Latte con syrup de Irish cream · de temporada"
      },
      {
        "n": "Cold Briu Bloom",
        "p": 3900,
        "d": "100% arábico, 22 horas de reposo, listo para consumo"
      },
      {
        "n": "Cold Briu Core",
        "p": 3900,
        "d": "Cold brew listo para servir, 100% arábico, más cafeína, más intenso"
      }
    ]
  },
  "frios": {
    "label": "Fríos y mocktails",
    "items": [
      {
        "n": "Espresso sin Martini",
        "p": 5300,
        "d": "Doble espresso, notas de vainilla e Irish, con destilado sin alcohol. Agitado en frío"
      },
      {
        "n": "Tropical Carbel",
        "p": 5300,
        "d": "Jugo de limón, puré de mango, syrup de italian spritz, agua con gas y hielo"
      },
      {
        "n": "Espresso orange",
        "p": 4500,
        "d": "Espresso, naranja natural, hielo"
      },
      {
        "n": "Iced tea sabores",
        "p": 4900,
        "d": "Té de rooibos y pulpa de fruta a elección"
      },
      {
        "n": "Cold brew tonic naranja",
        "p": 4900,
        "d": "Cold brew, jugo de naranja natural, tónica y hielo"
      },
      {
        "n": "Cold brew tonic mango",
        "p": 4900,
        "d": "Cold brew, mango, tónica y hielo"
      },
      {
        "n": "Iced butterfly pea latte",
        "p": 4500,
        "d": "Flor de guisante azul y jengibre con leche a elección"
      },
      {
        "n": "Iced matcha blueberry",
        "p": 4900,
        "d": "Matcha puro con pulpa de frutos rojos"
      },
      {
        "n": "Iced matcha latte",
        "p": 4000
      },
      {
        "n": "Iced chai latte",
        "p": 4000
      },
      {
        "n": "Iced caramel latte",
        "p": 4000,
        "d": "Latte frío con espuma de leche y salsa de caramelo"
      },
      {
        "n": "Iced vainilla latte",
        "p": 4000,
        "d": "Latte frío con syrup de vainilla y espuma de leche"
      },
      {
        "n": "Iced mocha",
        "p": 4000,
        "d": "Hielo, leche, chocolate y espresso"
      },
      {
        "n": "Caramel frappé",
        "p": 4900,
        "d": "Syrup de caramelo, espresso, leche a elección y crema chantillí"
      },
      {
        "n": "Matcha frappé",
        "p": 4900,
        "d": "Matcha by Adagio Teas, leche a elección y crema chantillí"
      },
      {
        "n": "Jugo 100% naranja natural 250 ml",
        "p": 3600,
        "d": "Recién exprimido"
      },
      {
        "n": "Jugo 100% naranja natural 400 ml",
        "p": 4300,
        "d": "Recién exprimido"
      },
      {
        "n": "Jugo pulpa mango",
        "p": 3500
      },
      {
        "n": "Jugo pulpa frambuesa",
        "p": 3500
      },
      {
        "n": "Jugos AMA",
        "p": 2900
      },
      {
        "n": "Bebida lata",
        "p": 1900
      },
      {
        "n": "Agua mineral",
        "p": 1800
      }
    ]
  },
  "pasteleria": {
    "label": "Pastelería",
    "items": [
      {
        "n": "Streusel de manzana",
        "p": 5300,
        "d": "Manzana horneada con cobertura de streusel crocante de mantequilla"
      },
      {
        "n": "Mini torta chocolate-chocolate",
        "p": 5300,
        "d": "Torta de chocolate cubierta con ganache",
        "img": "vitrina.jpg"
      },
      {
        "n": "Mini torta tres leches",
        "p": 5300,
        "d": "Bizcocho con manjar, crema diplomática y merengue"
      },
      {
        "n": "Mini torta 4 leches frambuesa",
        "p": 5300
      },
      {
        "n": "Mini torta red velvet",
        "p": 5300,
        "d": "Cheesecake relleno de bizcocho blanco, frosting y un toque de limón"
      },
      {
        "n": "Mini torta manjar chocolate",
        "p": 5300,
        "d": "Bizcocho con manjar y chocolate"
      },
      {
        "n": "Mini torta vainilla nutella",
        "p": 5300,
        "d": "Bizcocho de vainilla con nutella"
      },
      {
        "n": "Mini torta tipo tiramisú",
        "p": 5300
      },
      {
        "n": "Carrot cake",
        "p": 5300,
        "d": "Torta de zanahoria con frosting"
      },
      {
        "n": "Pie de limón",
        "p": 5300
      },
      {
        "n": "Cheesecake maracuyá",
        "p": 5300
      },
      {
        "n": "Cheesecake frutos rojos",
        "p": 5300,
        "d": "Queso crema y frutos rojos, horneado"
      },
      {
        "n": "Cheesecake pistacho",
        "p": 5300,
        "d": "Con salsa de pistacho y trozos de pistacho"
      },
      {
        "n": "Cinnamon roll",
        "p": 2800,
        "d": "Rollo de canela con masa de milhojas"
      },
      {
        "n": "Medialuna tradicional",
        "p": 1900,
        "d": "Medialuna argentina"
      },
      {
        "n": "Galletón avena cranberry",
        "p": 2900,
        "img": "cookies.jpg"
      }
    ]
  },
  "sinazucar": {
    "label": "Sin azúcar y sin gluten",
    "items": [
      {
        "n": "Pastel hojarasca amor sin azúcar",
        "p": 5300,
        "d": "Pastel individual de hojarasca, manjar y mermelada de frambuesa sin azúcar"
      },
      {
        "n": "Mini torta frambuesa crema sin azúcar",
        "p": 5300,
        "d": "Bizcocho con crema y frambuesa sin azúcar"
      },
      {
        "n": "Alfajor sin azúcar",
        "p": 3200
      },
      {
        "n": "Pie de limón sin azúcar y sin gluten",
        "p": 5300,
        "d": "Individual"
      },
      {
        "n": "Pie de nuez vegano y sin gluten",
        "p": 5300,
        "d": "Mini pie de nuez, sin gluten, vegano y keto"
      },
      {
        "n": "Pie de chocolate blanco y berries",
        "p": 5300,
        "d": "Sin gluten, vegano y sin azúcar"
      }
    ]
  },
  "salados": {
    "label": "Salados y pizzas",
    "items": [
      {
        "n": "Croissant jamón queso",
        "p": 4900,
        "d": "Jamón, queso y queso crema"
      },
      {
        "n": "Croissant jamón serrano",
        "p": 4900,
        "d": "Sándwich en pan croissant con jamón serrano, pesto y queso"
      },
      {
        "n": "Croissant mediterráneo",
        "p": 6900,
        "d": "Palta, jamón serrano, queso, pesto y tomates cherry"
      },
      {
        "n": "Croissant vegetariano",
        "p": 5900,
        "d": "Pesto, cherrys, palta y queso"
      },
      {
        "n": "Ciabatta de la huerta",
        "p": 6500,
        "d": "Sándwich en pan ciabatta con pollo, tomate, lechuga y palta",
        "img": "logo-pared.jpg"
      },
      {
        "n": "Tostadas Carbel",
        "p": 6500,
        "d": "Huevos revueltos, palta, tomates cherry y sésamo"
      },
      {
        "n": "Omelette Carbel",
        "p": 6900,
        "d": "Omelette de dos huevos con tomates cherry, palta y tostadas"
      },
      {
        "n": "Tostadas con huevo",
        "p": 4900,
        "d": "Huevos revueltos con tostadas y tomatitos cherry"
      },
      {
        "n": "Tostadas con palta",
        "p": 4500,
        "d": "Pan de masa madre, palta hass y semillas de sésamo"
      },
      {
        "n": "Pizza pepperoni",
        "p": 6900,
        "d": "Mozzarella, orégano y pepperoni americano"
      },
      {
        "n": "Pizza margarita",
        "p": 6900,
        "d": "Mozzarella, parmesano, albahaca y aceite de oliva"
      },
      {
        "n": "Pizza de la casa",
        "p": 6900,
        "d": "Mozzarella, aceitunas, champiñones y pepperoni americano"
      },
      {
        "n": "Pizza Martini",
        "p": 6900,
        "d": "Mozzarella, pepperoni, tocino y jamón serrano"
      },
      {
        "n": "Panuzzo Antonia",
        "p": 6900,
        "d": "Relleno de mozzarella, jamón acaramelado, orégano, aceite de oliva, cherrys y aceitunas"
      }
    ]
  },
  "heladeria": {
    "label": "Heladería",
    "items": [
      {
        "n": "Helado simple by El Taller",
        "p": 3300,
        "d": "100% artesanal",
        "img": "heladeria.jpg"
      },
      {
        "n": "Helado doble by El Taller",
        "p": 3900,
        "d": "100% artesanal"
      },
      {
        "n": "Affogato",
        "p": 4500,
        "d": "Helado de vainilla y un shot de espresso"
      },
      {
        "n": "Affogato Carbel",
        "p": 4500,
        "d": "Helado de pistacho y un shot de espresso"
      },
      {
        "n": "Café helado",
        "p": 4900,
        "d": "Dos bolas de vainilla, espresso, leche y crema"
      }
    ]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl   = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

Object.keys(MENU).forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = MENU[key].label;
  tab.dataset.key = key;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  tab.addEventListener('click', () => showTab(key));
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  MENU[key].items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item reveal';

    if (item.img) {
      const cont = document.createElement('div');
      const im = document.createElement('img');
      im.src = item.img; im.alt = item.n; im.loading = 'lazy';
      im.style.cssText = 'width:58px;height:58px;object-fit:cover;border-radius:12px;';
      cont.appendChild(im);
      row.appendChild(cont);
    }

    const texto = document.createElement('div');
    texto.className = 'menu-item-text';
    const nombre = document.createElement('span');
    nombre.className = 'name';
    nombre.textContent = item.n;
    texto.appendChild(nombre);

    if (item.d) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = item.d;
      texto.appendChild(desc);
    }

    // Sin precio publicado: "Consultar", nunca un monto inventado.
    const precio = document.createElement('div');
    precio.className = 'price';
    precio.textContent = item.p ? money(item.p) : 'Consultar';

    row.appendChild(texto);
    row.appendChild(precio);
    grid.appendChild(row);
  });

  panel.appendChild(grid);
  panelsEl.appendChild(panel);
});

function showTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    const activo = t.dataset.key === key;
    t.classList.toggle('active', activo);
    t.setAttribute('aria-selected', activo ? 'true' : 'false');
  });
  document.querySelectorAll('.menu-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  initScrollReveal();
}

/* ---------- NAVEGACIÓN POR PESTAÑAS ---------- */
const navLinks = document.getElementById('navLinks');

function goToTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.dataset.tabPanel === tabId);
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === tabId);
  });
  navLinks.classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initScrollReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); goToTab(el.dataset.tab); });
});

document.getElementById('navToggle').addEventListener('click', function () {
  const abierto = navLinks.classList.toggle('open');
  this.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

/* ---------- INDICADOR ABIERTO / CERRADO ----------
   Horario 07:00-20:30 según SU PROPIA carta digital. Ojo: la ficha de Google dice que cierran a las 21:00 — hay una contradicción entre ambos y conviene que el local la resuelva. Se usa el dato propio del negocio por ser el suyo. */
function horarioDeHoy() {
  return [7 * 60, 20 * 60 + 30];
}

function actualizarEstado(dotId, textId) {
  const dot  = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if (!dot || !text) return;
  const ahora   = new Date();
  const minutos = ahora.getHours() * 60 + ahora.getMinutes();
  const h       = horarioDeHoy();
  const abierto = !!h && minutos >= h[0] && minutos < h[1];
  text.textContent = abierto ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !abierto);
}

actualizarEstado('statusDot', 'statusText');
actualizarEstado('statusDot2', 'statusText2');

/* ---------- SCROLL REVEAL (con red de seguridad) ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 6) * 55) + 'ms';
    io.observe(el);
  });

  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
}
initScrollReveal();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 320);
});
