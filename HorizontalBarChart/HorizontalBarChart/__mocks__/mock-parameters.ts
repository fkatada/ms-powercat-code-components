/* istanbul ignore file */

import { IInputs } from '../generated/ManifestTypes';
import { MockEnumProperty, MockStringProperty, MockTwoOptionsProperty, MockWholeNumberProperty } from './mock-context';
import { MockDataSet } from './mock-datasets';

export function getMockParameters(): IInputs {
    return {
        Title: new MockStringProperty(),
        HideLabels: new MockTwoOptionsProperty(),
        HideTooltip: new MockTwoOptionsProperty(),
        BarHeight: new MockWholeNumberProperty(),
        Variant: new MockEnumProperty(),
        ChartDataMode: new MockEnumProperty(),
        AccessibilityLabel: new MockStringProperty(),
        Theme: new MockStringProperty(),
        CustomColors: new MockTwoOptionsProperty(),
        items: new MockDataSet([]),
        TabIndex: new MockWholeNumberProperty(),
        Tooltip: new MockStringProperty(),
    };
}
