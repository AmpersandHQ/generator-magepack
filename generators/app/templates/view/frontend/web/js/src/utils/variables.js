/**
 * Variables
 *
 * A place for variables we may use across the app,
 * e.g. action types, 'magic numbers' et al.
 * Prevents them being in their own files and random
 * files being imported all over the place.
 *
 * @copyright (c) Ampersand Commerce 2018
 */

 /**
 * Types
 *
 * Types used to define actions and reducers.
 * Ensures that we have one source of truth for these
 * to use across both actions and reducers and keep everything
 * as identical as possible.
 */
export const Types = {
    SELECT_ITEM: 'SELECT_ITEM',
    REQUESTING: 'REQUESTING',
    RECEIVED: 'RECEIVED',
    ASYNC_ME: 'ASYNC_ME',
}
