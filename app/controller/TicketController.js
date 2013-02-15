/*
 * File: app/controller/TicketController.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('TicketTracker.controller.TicketController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'ticketDataView',
            selector: 'ticketPanel ticketDataView'
        },
        {
            ref: 'ticketFormPanel',
            selector: 'ticketFormWindow ticketForm'
        },
        {
            ref: 'ticketFormWindow',
            selector: 'ticketFormWindow'
        }
    ],

    onDataviewItemClick: function(dataview, record, item, index, e, eOpts) {
        var win = this.getTicketFormWindow();
        if(!win){
            win = Ext.create('TicketTracker.view.TicketFormWindow');
        }
        win.show();
        this.getTicketFormPanel().loadRecord(record);
    },

    onSortByImportanceButtonClick: function(button, e, eOpts) {
        this.getTicketDataView().getStore().sort('importance', 'DESC');
    },

    onComboboxChange: function(field, newValue, oldValue, eOpts) {
        this.getTicketDataView().getStore().clearFilter();
        this.getTicketDataView().getStore().filter('importance', newValue);
    },

    onClearFilterButtonClick: function(button, e, eOpts) {
        this.getTicketDataView().getStore().clearFilter();
    },

    onAddButtonClick: function(button, e, eOpts) {
        var win = this.getTicketFormWindow();
        if(!win){
            win = Ext.create('TicketTracker.view.TicketFormWindow');
        }
        this.getTicketFormPanel().loadRecord(Ext.create('TicketTracker.model.Ticket'));
        this.adding = true;
        win.show();
    },

    onSaveButtonClick: function(button, e, eOpts) {
        var form = this.getTicketFormPanel();
        var selectedRecord = form.getRecord();
        if (this.adding) {
            this.adding = undefined;
            this.getTicketDataView().getStore().add(selectedRecord);
        }
        selectedRecord.set(form.getValues());
        this.getTicketDataView().getStore().filter();
        this.getTicketFormWindow().close();
    },

    onDataviewItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        e.stopEvent();

        if (!this.ctxMenu) {
            this.ctxMenu = Ext.create('Ext.menu.Menu', {
                items:[{
                    text: 'Delete Ticket'
                }],
                defaults: {
                    listeners: {
                        click: function(item) {
                            this.getTicketDataView().getStore().remove([record]);
                            this.getTicketDataView().getStore().filter();
                        },
                        scope: this
                    }
                }
            });   
        }

        this.ctxMenu.showAt(e.getXY());
    },

    init: function(application) {
        this.control({
            "ticketPanel ticketDataView": {
                itemclick: this.onDataviewItemClick,
                itemcontextmenu: this.onDataviewItemContextMenu
            },
            "ticketPanel button[action='sortByImportance']": {
                click: this.onSortByImportanceButtonClick
            },
            "ticketPanel combo[name='status']": {
                change: this.onComboboxChange
            },
            "ticketPanel button[action='clearFilter']": {
                click: this.onClearFilterButtonClick
            },
            "ticketPanel button[action='addTicket']": {
                click: this.onAddButtonClick
            },
            "ticketFormWindow button[action='saveTicket']": {
                click: this.onSaveButtonClick
            }
        });
    }

});
