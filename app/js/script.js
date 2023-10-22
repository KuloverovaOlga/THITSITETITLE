import burger from './modules/burger';
import scroll from './modules/scroll';
import modal from './modules/modal';
import modalHelp from './modules/modalHelp';
import accordeon from './modules/accordion';

scroll();
burger();
modal('.modal', '[data-modal]');
modalHelp();
accordeon();



