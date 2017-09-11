export default {
  editor: {
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
