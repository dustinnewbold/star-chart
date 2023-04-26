import { BodyResult } from './types/Result';
import { getFormData } from './util/getFormData';
import { getNatalResult } from './util/getNatalResult';

const resultElements = {
  bodies: {
    sun: document.getElementById('result-body-sun'),
    moon: document.getElementById('result-body-moon'),
    mercury: document.getElementById('result-body-mercury'),
    venus: document.getElementById('result-body-venus'),
    mars: document.getElementById('result-body-mars'),
    jupiter: document.getElementById('result-body-jupiter'),
    saturn: document.getElementById('result-body-saturn'),
    uranus: document.getElementById('result-body-uranus'),
    neptune: document.getElementById('result-body-neptune'),
    pluto: document.getElementById('result-body-pluto'),
    ascendant: document.getElementById('result-body-ascendant'),
  },
  elements: {
    fire: document.getElementById('result-el-fire'),
    earth: document.getElementById('result-el-earth'),
    air: document.getElementById('result-el-air'),
    water: document.getElementById('result-el-water'),
  },
};

const showBodyResult = (htmlElement: HTMLElement | null, result: BodyResult) => {
  if ( ! htmlElement ) return;

  if ( ! result ) {
    htmlElement.innerHTML = '-';
    return;
  }

  const sign = result.sign;
  const element = result.element;

  if ( ! element ) {
    htmlElement.innerHTML = sign;
    return;
  }

  htmlElement.innerHTML = `${sign} (${element})`;
};

const formElement = document.getElementById('starchart');
formElement?.addEventListener('submit', e => {
  e.preventDefault();
  
  const inputs = getFormData();
  const result = getNatalResult(inputs);

  showBodyResult(resultElements.bodies.sun, result.bodies.sun);
  showBodyResult(resultElements.bodies.moon, result.bodies.moon);
  showBodyResult(resultElements.bodies.mercury, result.bodies.mercury);
  showBodyResult(resultElements.bodies.venus, result.bodies.venus);
  showBodyResult(resultElements.bodies.mars, result.bodies.mars);
  showBodyResult(resultElements.bodies.jupiter, result.bodies.jupiter);
  showBodyResult(resultElements.bodies.saturn, result.bodies.saturn);
  showBodyResult(resultElements.bodies.uranus, result.bodies.uranus);
  showBodyResult(resultElements.bodies.neptune, result.bodies.neptune);
  showBodyResult(resultElements.bodies.pluto, result.bodies.pluto);
  showBodyResult(resultElements.bodies.ascendant, result.bodies.ascendant);

  if ( resultElements.elements.fire ) resultElements.elements.fire.innerHTML = result.elements.fire.toString();
  if ( resultElements.elements.earth ) resultElements.elements.earth.innerHTML = result.elements.earth.toString();
  if ( resultElements.elements.air ) resultElements.elements.air.innerHTML = result.elements.air.toString();
  if ( resultElements.elements.water ) resultElements.elements.water.innerHTML = result.elements.water.toString();
});
