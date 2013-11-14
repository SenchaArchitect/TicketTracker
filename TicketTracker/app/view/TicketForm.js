/*
 * File: app/view/TicketForm.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TicketTracker.view.TicketForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ticketForm',

    height: 250,
    width: 500,
    bodyPadding: 10,
    title: 'My Form',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Title',
                    name: 'title'
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    fieldLabel: 'Description',
                    name: 'description'
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Importance',
                    name: 'importance',
                    value: 1,
                    maxValue: 5,
                    minValue: 1
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    fieldLabel: 'Status',
                    name: 'status',
                    queryMode: 'local',
                    store: [
                        'Open',
                        'In Progress',
                        'Complete'
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});