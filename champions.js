(function(){
  var C = window.CURSO || {meses:[]};
  var root = document.body.getAttribute('data-root') || '';
  var mesId = document.body.getAttribute('data-mes');
  function load(key){ try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch(e){ return {}; } }
  function save(key, st){ try { localStorage.setItem(key, JSON.stringify(st)); } catch(e){} }
  function prog(mod, st){
    var d = mod.req.filter(function(id){ return st[id]; }).length;
    return {done:d, total:mod.req.length, full: mod.req.length > 0 && d === mod.req.length};
  }
  function current(mes, st){
    for (var i = 0; i < mes.modulos.length; i++) if (!prog(mes.modulos[i], st).full) return i;
    return -1;
  }
  function $(s, c){ return (c || document).querySelector(s); }
  function $$(s, c){ return [].slice.call((c || document).querySelectorAll(s)); }
  var MES = C.meses.filter(function(m){ return m.id === mesId; })[0];

  /* checkboxes: guardar y refrescar */
  if (MES){
    var st = load(MES.key);
    $$('input[data-id]').forEach(function(cb){
      if (st[cb.dataset.id]) cb.checked = true;
      cb.addEventListener('change', function(){
        st = load(MES.key); st[cb.dataset.id] = cb.checked; save(MES.key, st); paint();
      });
    });
  }

  function setMod(el, p, isCur){
    el.classList.toggle('is-done', p.full);
    el.classList.toggle('is-current', !p.full && isCur);
    el.classList.toggle('is-doing', !p.full && !isCur && p.done > 0);
  }

  function paint(){
    /* páginas de un mes */
    if (MES){
      var st = load(MES.key), cur = current(MES, st);
      MES.modulos.forEach(function(m, i){
        var p = prog(m, st);
        $$('[data-mod="' + m.n + '"]').forEach(function(el){
          if (el.classList.contains('pstat')){
            el.textContent = p.full ? '✓ Módulo completo' : (p.done + ' de ' + p.total + ' actividades hechas');
            el.classList.toggle('full', p.full);
            return;
          }
          setMod(el, p, i === cur);
          var chip = $('.chip', el); if (chip) chip.textContent = p.full ? 'Completo' : (i === cur ? 'Te toca' : (p.done ? 'En curso' : 'Pendiente'));
          var cnt = $('.cnt', el); if (cnt) cnt.textContent = p.done + ' de ' + p.total + ' actividades';
          var bar = $('.mbar i', el); if (bar) bar.style.width = (p.total ? Math.round(p.done / p.total * 100) : 0) + '%';
        });
      });
      var r = $('.resume');
      if (r){
        if (cur >= 0){
          var c = MES.modulos[cur], pc = prog(c, st);
          r.className = 'resume'; r.href = root + c.url;
          r.innerHTML = '<span>' + ((pc.done || cur > 0) ? 'Continuar' : 'Empezar') + ' con el Módulo ' + c.n + ' →</span><small></small>';
          $('small', r).textContent = c.titulo;
        } else {
          r.className = 'resume all'; r.href = root + MES.adicional.url;
          r.innerHTML = '<span>Completaste todos los módulos de este mes</span><small>Ver material adicional →</small>';
        }
      }
      var xc = $('.xcnt');
      if (xc){ var xs = load(MES.key), xd = MES.adicional.ids.filter(function(id){ return xs[id]; }).length; xc.textContent = xd + ' de ' + MES.adicional.ids.length + ' recursos vistos'; }
    }
    /* portada: avance por mes */
    $$('.mescard[data-mes]').forEach(function(card){
      var mes = C.meses.filter(function(m){ return m.id === card.dataset.mes; })[0];
      if (!mes || !mes.disponible || !mes.modulos.length) return;
      var st = load(mes.key), full = 0, done = 0, total = 0;
      mes.modulos.forEach(function(m){ var p = prog(m, st); if (p.full) full++; done += p.done; total += p.total; });
      var cur = current(mes, st);
      var t = $('.mtxt', card);
      if (t) t.textContent = full + ' de ' + mes.modulos.length + ' módulos completos' + (cur >= 0 && done > 0 ? ' · te toca el Módulo ' + (cur + 1) : '');
      var bar = $('.mbar i', card); if (bar) bar.style.width = (total ? Math.round(done / total * 100) : 0) + '%';
      var go = $('.go', card);
      if (go && done > 0){ go.textContent = cur >= 0 ? 'Continuar →' : 'Repasar →'; }
      if (done > 0 && cur >= 0) card.href = root + mes.modulos[cur].url;
    });
  }

  /* copiar prompts */
  $$('button.copy').forEach(function(b){
    b.addEventListener('click', function(){
      var pre = document.getElementById(b.dataset.target);
      var txt = pre ? pre.innerText : '';
      var done = function(){ var o = b.textContent; b.textContent = 'Copiado'; setTimeout(function(){ b.textContent = o; }, 1500); };
      function fallback(){
        var r = document.createRange(); r.selectNodeContents(pre);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        try { document.execCommand('copy'); done(); } catch(e){}
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
    });
  });

  paint();
  window.addEventListener('pageshow', paint);
})();
