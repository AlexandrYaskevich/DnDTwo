import State from './State';
import Cards from './Cards';
import DragDrop from './DnD';

const state = new State(localStorage);
const creatingCards = new Cards();

creatingCards.bindToDOM(document.querySelector('.container'));
creatingCards.init();

const dragDrop = new DragDrop();
dragDrop.init();

window.addEventListener('unload', () => {
  state.save(creatingCards.createObj());
});

const loader = state.load();
creatingCards.showLoad(loader);
  
