import './manifest.json';
import '../static/icons/icon.png';
import '../static/icons/icon-48.png';
import '../static/icons/icon-96.png';
import '../docs/ui-preferences/default_containers.md';
import {tabUpdatedListener, webRequestListener} from './containers';
import {messageExternalListener} from './messageExternalListener';
import {cleanUpTemporaryContainers, onTabCreated, onTabRemoved} from './temporaryContainers';

browser.webRequest.onBeforeRequest.addListener(
  webRequestListener,
  {urls: ['<all_urls>'], types: ['main_frame']},
  ['blocking'],
);

browser.runtime.onMessageExternal.addListener(
  messageExternalListener
);

browser.tabs.onUpdated.addListener(
    tabUpdatedListener
);

browser.tabs.onCreated.addListener(onTabCreated);
browser.tabs.onRemoved.addListener(onTabRemoved);

// Clean up left over containers at startup
cleanUpTemporaryContainers();
