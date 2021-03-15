/**
 *
 * Asynchronously loads the component for WordList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
