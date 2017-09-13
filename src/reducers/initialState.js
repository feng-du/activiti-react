import locale from '../libs/editor/i18n/en.json';

export default {
    locale,
    editor: {
        stencils: [],
        models: [],
        model: {
            filters: [
                {id: 'myProcesses', labelKey: 'MY-PROCESSES'}
            ],
            sorts: [
                    {id: 'modifiedDesc', labelKey: 'MODIFIED-DESC'},
                    {id: 'modifiedAsc', labelKey: 'MODIFIED-ASC'},
                    {id: 'nameAsc', labelKey: 'NAME-ASC'},
                    {id: 'nameDesc', labelKey: 'NAME-DESC'}
                ],
                
                activeFilter: {id: 'myProcesses', labelKey: 'MY-PROCESSES'},
                activeSort: {id: 'modifiedDesc', labelKey: 'MODIFIED-DESC'},
                filterText: '',
            }

    }
};
