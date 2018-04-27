Ext.define('Gear.ux.GearPlugin', {
    extend: 'Ext.plugin.Abstract',
    alias: ['plugin.gearPlugin'],

    requires: [
        'Ext.layout.container.Fit'
    ],

    parentGrid: null,
    dockContainer: null,
    defaultDockContainerHeight: 30,


    init: function (grid) {
        this.parentGrid = grid;
        if (!this.dockHeight) {
            this.dockHeight = this.defaultDockContainerHeight;
        }
        var containerCfg = this.getDockContainerConfig();
        this.dockContainer = this.parentGrid.addDocked(containerCfg)[0];

        this.addPluginTool();
    },
    getDockContainerConfig: function () {
        return {
            xtype: 'container',
            dock: 'top',
            height: this.dockHeight,
            hidden: true,
            layout: {
                type: 'fit',
                titleCollapse: false
            },
            items: [
            ]
        };
    },
    addPluginTool: function () {
        var me = this;

        this.parentGrid.addTool({
            type: 'gear',
            handler: function () {
                var panel = me.dockContainer;
                if (panel.isHidden()) {
                    panel.show();
                } else {
                    panel.hide();
                }
            }
        });
    }
});