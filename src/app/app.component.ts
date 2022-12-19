import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component, NgZone, OnDestroy,
	OnInit, ViewChild
} from '@angular/core';
// BELLOW IS NEEDED FOR THE CLASS-TRANSFORM LIBRARY, DONT REMOVE
import { ActivatedRoute, Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';
// import devices from 'devextreme/core/devices'; // DX way to retrieve device info
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { DeviceInfo } from '@capacitor/device';
import { DxDropDownButtonComponent } from 'devextreme-angular';
import config from 'devextreme/core/config';
import Query from 'devextreme/data/query';
import popup from 'devextreme/ui/popup';
import { currentTheme, refreshTheme } from "devextreme/viz/themes";
import { isNil } from 'lodash';
import { SnotifyPosition, SnotifyService } from 'ng-alt-snotify';
import Oidc from 'oidc-client';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { environment } from '../environments/environment';
// import { Browser } from '@capacitor/browser';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ReactiveComponentModule } from '@ngrx/component';
import { AngularResizeEventModule } from 'angular-resize-event';
import { AngularSplitModule } from 'angular-split';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SortablejsModule } from 'ngx-sortablejs';
import {
	DxButtonGroupModule,
	DxButtonModule,
	DxCalendarModule,
	DxChartModule,
	DxCheckBoxModule,
	DxColorBoxModule,
	DxContextMenuModule,
	DxDataGridModule,
	DxDateBoxModule,
	// DxVectorMapModule,
	DxDraggableModule,
	// DxDiagramModule,
	DxDropDownBoxModule,
	DxDropDownButtonModule,
	DxFileUploaderModule,
	DxFilterBuilderModule,
	DxFormModule,
	DxHtmlEditorModule,
	DxListModule,
	DxLoadIndicatorModule,
	DxLoadPanelModule,
	DxLookupModule,
	DxMenuModule,
	DxNumberBoxModule,
	// DxPieChartModule,
	DxPivotGridModule,
	DxPopoverModule,
	DxPopupModule,
	DxRadioGroupModule,
	DxRangeSelectorModule,
	DxSchedulerModule,
	DxScrollViewModule,
	DxSelectBoxModule,
	DxSliderModule,
	DxSortableModule,
	DxSpeedDialActionModule,
	DxSwitchModule,
	DxTabPanelModule,
	DxTabsModule,
	DxTagBoxModule,
	DxTextAreaModule,
	DxTextBoxModule,
	DxTileViewModule,
	DxToastModule,
	DxToolbarModule,
	DxTooltipModule,
	DxTreeListModule,
	DxTreeViewModule,
	DxValidatorModule
} from 'devextreme-angular';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	



		
	
}
