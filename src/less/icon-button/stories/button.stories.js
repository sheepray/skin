export default { title: 'Icon Button/Icon Button/Button' };

export const menu = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
`;

export const RTLMenu = () => `
<div dir="rtl">
    <button aria-label="menu" type="button" class="icon-btn">
        <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
    </button>
</div>
`;

export const settings = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</button>
`;

export const cart = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--cart" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-cart"></use></svg>
</button>
`;

export const save = () => `
<button aria-label="menu" type="button" class="icon-btn">
    <svg class="icon icon--save" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-save"></use></svg>
</button>
`;

export const disabledMenu = () => `
<button type="button" class="icon-btn" aria-label="menu" disabled>
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
 </button>
 `;

export const disabledSettings = () => `
<button type="button" class="icon-btn" aria-label="menu" disabled>
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
 </button>
 `;

export const partiallyDisabledMenu = () => `
<button type="button" class="icon-btn" aria-label="menu" aria-disabled="true">
    <svg class="icon icon--menu" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-menu"></use></svg>
</button>
`;

export const partiallyDisabledSettings = () => `
<button type="button" class="icon-btn" aria-label="menu" aria-disabled="true">
    <svg class="icon icon--settings" aria-hidden="true" focusable="false" width="16" height="16"><use xlink:href="#icon-settings"></use></svg>
</button>
`;
