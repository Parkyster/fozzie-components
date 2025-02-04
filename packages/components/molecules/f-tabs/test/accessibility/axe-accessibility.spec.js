const { buildUrl } = require('@justeat/f-wdio-utils/src/storybook-extensions');
const { getAccessibilityTestResults } = require('../../../../../../test/utils/axe-helper');

const Tabs = require('../../test-utils/component-objects/f-tabs.component');

const tabs = new Tabs();

describe('Accessibility tests', () => {
    beforeEach(() => {
        const pageUrl = buildUrl(tabs.componentType, tabs.componentName, tabs.path);
        tabs.open(pageUrl);
        tabs.waitForComponent();
    });
    it('a11y - should test f-tabs component WCAG compliance', () => {
        // Act
        const axeResults = getAccessibilityTestResults('f-tabs');

        // Assert
        expect(axeResults.violations.length).toBe(0);
    });
});
