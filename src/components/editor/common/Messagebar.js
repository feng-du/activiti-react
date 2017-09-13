// import React from 'react';


// const Messagebar = (props) => {
//     const { model, locale } = props;

//     function renderMessage(model) {
//         const size = model.processes.size;
//         if (model.loading) {
//             <div className="loading pull-left" >
//                 <div className="l1"></div><div className="l2"></div><div className="l2"></div>
//             </div>
//         } else {
//             <div>
//                 { size>1 && <span>{`You have ${size} business process models`}</span> }
//                 { size==1 && <span>{locale["PROCESS-LIST"]["FILTER"]["MY-PROCESSES-ONE"]}</span> }
//                 { (size > 0 && model.filterText !='' && model.filterText !== undefined) && <span>{locale["PROCESS-LIST"]["FILTER"]["FILTER-TEXT"]}</span> }
                
//                 <span ng-if="model.processes.size > 0 && model.filterText !='' && model.filterText !== undefined">{{'PROCESS-LIST.FILTER.FILTER-TEXT' | translate:model}}</span>
//                 <span ng-if="model.processes.size == 0 && model.filterText !='' && model.filterText !== undefined">{{'PROCESS-LIST.FILTER.FILTER-TEXT-EMPTY' | translate:model}}</span>
//             </div>
//         }
//     }

//     return(
//         <div>
//             {/* <div className="dropdown-subtle pull-right">
// 				<div className="btn-group btn-group-sm" activiti-fix-dropdown-bug>
// 					<button type="button" className="btn btn-default dropdown-toggle"
// 						data-toggle="dropdown">{{'PROCESS-LIST.SORT.' + model.activeSort.labelKey | translate}} <i className="caret"></i></button>
// 					<ul className="dropdown-menu pull-right">
// 						<li ng-repeat="sort in model.sorts">
// 							<a ng-click="activateSort(sort)">{{'PROCESS-LIST.SORT.' + sort.labelKey | translate}}</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div> */}
// 			<div className="message clearfix">
//                 {
//                     renderMessage(model)
//                 }
						
// 			</div>
//         </div>
//     );
// };

// export default Messagebar;