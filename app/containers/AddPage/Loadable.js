/**
 *
 * Asynchronously loads the component for AddPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
