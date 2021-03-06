/* istanbul ignore file */
/**
 * This file is automatically created by Recurly's OpenAPI generation process
 * and thus any edits you make by hand will be lost. If you wish to make a
 * change to this file, please create a Github issue explaining the changes you
 * need and we will usher them to the appropriate places.
 */
'use strict'

const Resource = require('../Resource')

/**
 * SubscriptionAddOn
 * @typedef {Object} SubscriptionAddOn
 * @prop {AddOnMini} addOn - Just the important parts.
 * @prop {Date} createdAt - Created at
 * @prop {Date} expiredAt - Expired at
 * @prop {string} id - Subscription Add-on ID
 * @prop {string} object - Object type
 * @prop {number} quantity - Add-on quantity
 * @prop {string} subscriptionId - Subscription ID
 * @prop {string} tierType - The type of tiering used by the Add-on.
 * @prop {Array.<SubscriptionAddOnTier>} tiers - Empty unless `tier_type` is `tiered`, `volume`, or `stairstep`.
 * @prop {number} unitAmount - This is priced in the subscription's currency.
 * @prop {Date} updatedAt - Updated at
 */
class SubscriptionAddOn extends Resource {
  static getSchema () {
    return {
      addOn: 'AddOnMini',
      createdAt: Date,
      expiredAt: Date,
      id: String,
      object: String,
      quantity: Number,
      subscriptionId: String,
      tierType: String,
      tiers: ['SubscriptionAddOnTier'],
      unitAmount: Number,
      updatedAt: Date
    }
  }
}

module.exports = SubscriptionAddOn
